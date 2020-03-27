import axios from "axios";

const hookSlack = async (text, urlClickUp) => {
  const slackWebhookUrl =
    "https://hooks.slack.com/services/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";
  let formatText = `:envelope_with_arrow: ความคิดเห็น: ${truncate(
    text,
    100
  )} \n`;

  formatText += `ดูความคิดเห็นทั้งหมดได้ที่ลิงค์ ${urlClickUp}`;

  await axios({
    method: "post",
    url: slackWebhookUrl,
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      text: formatText
    }
  });
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
          name: truncate(content, 100),
          content,
          tags,
          priority
        }
      });

      const urlTask = result.data.url;

      hookSlack(content, urlTask);

      return { message: "ความคิดเห็นของคุณทุกส่งเรียบร้อยแล้ว" };
    }
  }
};
