//required depends.
const Discord = require("discord.js");
require("dotenv/config");

//the client
const bot = new Discord.Client({disableEveryone: true});
//on functions
bot.on("ready", async () => {
    console.log("[WISP] I am now online!")
    bot.user.setActivity(`your bullshit`, {type: "LISTENING"});
});
//imported settings
let prefix;

//db
const firebase = require("firebase/app");
const FieldValue = require("firebase-admin").firestore.FieldValue;
const admin = require("firebase-admin");
const sA = require("./serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(sA)
});
let db = admin.firestore();









 //turning bot on/logging it in
 bot.login(process.env.TOKEN);