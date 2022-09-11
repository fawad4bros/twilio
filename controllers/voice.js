require("dotenv").config();
const VoiceResponse = require("twilio").twiml.VoiceResponse;
const forwardCallTo = process.env.Forward_To_Phone_Number;
const voice = async (request, response) => {
  try {
    const twiml = new VoiceResponse();
    /** helper function to set up a <Gather> */
    function gather() {
      // Cost $0.011 = 2.53pkr
      const gatherNode = twiml.gather({ numDigits: 1 });
      gatherNode.say(
        "to talk to our representative, press 1. to leave a voicemail, press 2."
      );
      // If the user doesn't enter input, loop
      twiml.redirect("/voice");
    }
    // If the user entered digits, process their request
    if (request.body.Digits) {
      switch (request.body.Digits) {
        case "1":
          // Cost $0.0025
          twiml.say(
            "Please wait until your call is forwarded to our representative"
          );
          twiml.dial(forwardCallTo);
          break;
        case "2":
          // Cost $0.0025
          twiml.say("please leave a voicemail after the beep");
          twiml.pause();
          twiml.say("beep lol");
          // Use <Record> to record the caller's message
          twiml.record();
          // End the call with <Hangup>
          twiml.hangup();
          break;
        default:
          twiml.say("Sorry, I don't understand that choice.");
          twiml.pause();
          gather();
          break;
      }
    } else {
      // If no input was sent, use the <Gather> verb to collect user input
      gather();
    }
    // Render the response as XML in reply to the webhook request
    response.type("text/xml");
    response.send(twiml.toString());
  } catch (error) {
    response.send(error);
  }
};
module.exports = voice;
