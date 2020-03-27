import axios from "axios";

const hookSlack = text => {
  const slackWebhookUrl =
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
      const folderListId = "10002611";
      const accessToken = "pk_3665453_9WVOB8EUVLZFEDJ4B711MM51CPRCKUSO";
      const url = `https://api.clickup.com/api/v2/list/${folderListId}/task`;
      let urlClickUp;

      const result = await axios({
        method: "post",
        url,
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json"
        },
        data: {
          name: truncate(content, 20),
          content,
          tags,
          priority
        }
      });

      console.log(result, "result");

      const urlTask = result.data.url;
      return { message: urlTask };
      // return { message: "ความคิดเห็นของคุณทุกส่งเรียบร้อยแล้ว" };
    }
  }
};
