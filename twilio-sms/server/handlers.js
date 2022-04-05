import "dotenv/config";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

export const sendSMS = (req, res) => {
  const { msg } = req.body;

  client.messages
    .create({
      to: process.env.MY_PHONE_NUMBER,
      from: "+13185069947",
      body: msg,
    })
    .then((message) => console.log(message));
};
