require("dotenv").config();
const { voice } = require("../models/voice");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const retrieveVoices = async (request, response) => {
  try {
    await client.recordings.list().then((calls) => {
      let callData =  calls.map((call) => {
        return {
                "accountSid": call.accountSid,
                "callSid": call.callSid,
                "startTime": call.startTime,
                "duration": call.duration,
                "sid": call.sid,
                "uri": call.uri,
                "mediaUrl": call.mediaUrl + '.mp3'
              }
      });
      response.send(callData );
    });
  } catch (error) {
    response.send(error);
  }
};
module.exports = retrieveVoices;
