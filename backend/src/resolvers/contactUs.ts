import request from "request";
import "dotenv/config";

const hookSlack = text => {
  const slackWebhookUrl =
    process.env.SLACK_WEBHOOK_URL ||
    "https://hooks.slack.com/services/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";

  request(
    {
      method: "POST",
      url: slackWebhookUrl,
      body: JSON.stringify({
        text
      })
    },
    function(error) {
      if (error) return false;
    }
  );
};
const truncate = (input, limitText) =>
  input.length > limitText ? `${input.substring(0, limitText)}...` : input;

export default {
  Mutation: {
    sendFeedback: async (_, { payload: { name, content, tags, priority } }) => {
      const folderListId = process.env.CLICKUP_LIST_I || 10002611;
      const accessToken =
        process.env.CLICKUP_TOKEN ||
        "pk_3665453_9WVOB8EUVLZFEDJ4B711MM51CPRCKUSO";
      const url = `https://api.clickup.com/api/v2/list/${folderListId}/task`;
      request(
        {
          method: "POST",
          url,
          headers: {
            Authorization: accessToken,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: truncate(content, 20),
            content,
            tags,
            priority,
            date_created: Date.now()
          })
        },
        function async(error, response, body) {
          if (response.statusCode === 200) {
            const response = JSON.parse(body);
            const url = response?.url;
            let text = ":envelope_with_arrow: *ความคิดเห็น:* ";

            text += truncate(content, 100) + "\n";

            text += `*ดูความคิดเห็นทั้งหมดได้ที่ลิงค์* ${url}`;

            hookSlack(text);
          } else {
            console.log(error);
            return false;
          }
        }
      );
      return { message: "ความคิดเห็นของคุณทุกส่งเรียบร้อยแล้ว" };
    }
  }
};
