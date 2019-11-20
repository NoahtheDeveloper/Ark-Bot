const Discord = require("discord.js");

const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

fs.readdir("./Info/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./Info/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});



fs.readdir("./Mod/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./Mod/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login('NjM0NDY3MDExODk5OTQ5MDU2.XbeTFA.FsI7q8ARVQPjtpzfngMdYSHMALs');