//required depends.
const Discord = require("discord.js");
require("dotenv/config");

//the client
const bot = new Discord.Client({disableEveryone: true});
//on functions
bot.on("ready", async () => {
    console.log("[WISP] I am now online!")
    bot.user.setActivity(`to your bullshit`, {type: "LISTENING"});
});








//imported settings
let prefix;


 //turning bot on/logging it in
 bot.login(process.env.TOKEN);