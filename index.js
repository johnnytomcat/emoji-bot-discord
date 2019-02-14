const TOKEN = process.env.BOT_TOKEN;
const discord = require("discord.js");
//Create and log in client
const client = new discord.Client();
client
  .login(TOKEN)
  .then(() => {
    console.log(`Logged in as ${client.user.tag}`);
    registerListeners();
  })
  .catch(reason => {
    console.log(`Problem while logging in bot: ${reason}`);
    process.exit();
  });

//Looks for emoji and registers a message handler
function registerListeners() {
  //let emoji = client.emojis.find("name", emojiName);
  client.on("message", message => {
    let emoji = client.emojis.random();
    if (emoji === null) {
      console.log(`Unable to find emoji with name '${emojiName}'`);
      process.exit(0);
      return;
    }

    if (Math.floor(Math.random() * 100) % 10 === 0) {
      message
        .react(emoji)
        .then(() => {
          console.log("Reacted to message");
        })
        .catch(reason => {
          console.log(`Problem while reacting to message: ${reason}`);
        });
    }
  });
}
