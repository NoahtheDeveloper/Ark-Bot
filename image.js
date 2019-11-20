// Extract the required classes from the discord.js module
const { Client, Attachment } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('Harder');
});

client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '.rip') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});




client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '.WhoA') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://assets.blubrry.com/coverart/300/12601.jpg');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
















client.login('NjM0NDY3MDExODk5OTQ5MDU2.XbeTFA.FsI7q8ARVQPjtpzfngMdYSHMALs');