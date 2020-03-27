import axios from "axios";

const hookSlack = async (text, urlClickUp) => {
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
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
    sendFeedback: async (_, { payload: { content, tags, priority } }) => {
      const folderListId = process.env.CLICKUP_LIST_ID;
      const accessToken = process.env.CLICKUP_TOKEN;

      const url = `https://api.clickup.com/api/v2/list/${folderListId}/task`;

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
