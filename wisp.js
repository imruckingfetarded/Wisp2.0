//required depends.
const Discord = require("discord.js");
require("dotenv/config");

//the client
const bot = new Discord.Client({disableEveryone: true});

//imported settings
let prefix;
 const owner = process.env.OWNER
 const token = process.env.TOKEN

 //turning bot on/logging it in
 bot.login(process.env.token);