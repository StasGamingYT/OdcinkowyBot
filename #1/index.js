const config = require("./config.json");
const Discord = require("discord.js")

const client = new Discord.Client({
    disableEveryone: true
});

client.on("ready", () => {
    console.log(`${client.user.username} wystartował!`);
    client.user.setActivity('❗ Tryb Testowy ❗', { type: "WATCHING" })
});

client.login(config.token);
