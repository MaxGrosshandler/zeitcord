const Eris = require("eris");

var bot = new Eris(process.env.TOKEN);
// Replace BOT_TOKEN with your bot account's token

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("messageCreate", async (msg) => { // When a message is created
    if(msg.content === "zping") { // If the message content is "!ping"
        bot.createMessage(msg.channel.id, "Pong!");
        // Send a message in the same channel with "Pong!"
    } else if(msg.content === "zkill") { // Otherwise, if the message is "!pong"
    if (msg.author.id === "195156669108322313"

    ) {
      let toExecute;
      let code = "process.exit()"
      if (code.split("\n").length === 1)
        toExecute = eval(`async () => ${code}`);
      else toExecute = eval(`async () => { ${code} }`);
      toExecute.bind(this);
      try {
        msg.channel.createMessage(await toExecute());
      } catch (err) {
        msg.channel.createMessage(err.stack);
      }
    }
        // Respond with "Ping!"
    }
});

bot.connect(); // Get the bot to connect to Discord