import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import chalk from "chalk";

// import { sendSMS } from "./handlers";

import "dotenv/config";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

const app = express(http);

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/", (req, res) => {
  return res.send("Hello from Server!");
});

app.post("/sms", (req, res) => {
  const msg = "hello from twilio";

  client.messages
    .create({
      to: process.env.MY_PHONE_NUMBER,
      from: "+13185069947",
      body: msg,
    })
    .then((message) => console.log(message));
});

app.listen(app.get("port"), () => {
  console.log(
    `Server running on... ${chalk.blue(`http://localhost:${app.get("port")}`)}`
  );
});
