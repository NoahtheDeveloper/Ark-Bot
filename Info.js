
const { Client, RichEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

client.on('ready', () => {
  console.log('Trojan-55 Ready');
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '.About') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Welcome to XSS Menu!')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('XSS is a bot created for Moderation, Games, greetings, and More!. This bot was made by ASH Inc. For more info try .Invite');


	
	
	
	
	  // Send the embed to the same channel as the message
	


    message.channel.send(embed);
  }
});






client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '.Help') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
  .setTitle("Welcome to XSS Help")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xFF0000)
  .setDescription("This bot is mad by XSS INC. This bot is used for gambiling, music, servers stats, and more!")
  /*
   * Takes a Date object, defaults to current date.
   */
  .addField('User Commands', '.Hello-Gives a detailed response to the user\n .rip-Sends the detailed picture RIP\n .WhoA-Sends the who asked picture.\n .Ping-Gets the current servers ms.\n .pong-replies with the response Ping!\n .foo-Responded with Bar\n .F-Gives the person a proper Fin the chat.\n .beer-Responds coming right up!')
  .addField('Admin Commands', '.Kick-Removes the user from the server!\n .Ban-Bans the user completely from the server\n .Purge-Removes a number of messages from chat. Must be more than 2 Mesages. ')
  .addField('For Economy Commands Try', '.Economy')
  .setTimestamp()
  .setFooter('Made By Noah XSS', 'https://media.discordapp.net/attachments/638764343902732307/638770159049244672/image1.jpg?width=579&height=671');
  
  
  message.channel.send({embed});
}
});



client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '.Economy') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
  .setTitle("Welcome to Economy Interface")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xFF0000)
  .setDescription("More Commands On Gambling Are Listed Below")
  /*
   * Takes a Date object, defaults to current date.
   */
  .addField('User Commands', '.Hello-Gives a detailed response to the user\n .rip-Sends the detailed picture RIP\n .WhoA-Sends the who asked picture.\n .Ping-Gets the current servers ms.\n .pong-replies with the response Ping!\n .foo-Responded with Bar\n .F-Gives the person a proper Fin the chat.\n .beer-Responds coming right up!')
  .addField('Admin Commands', '.Kick-Removes the user from the server!\n .Ban-Bans the user completely from the server\n .Purge-Removes a number of messages from chat. Must be more than 2 Mesages. ')
  .setTimestamp()
  .setFooter('Made By Noah XSS', 'https://media.discordapp.net/attachments/638764343902732307/638770159049244672/image1.jpg?width=579&height=671');
  
  
  message.channel.send({embed});
}
});






client.login('NjM0NDY3MDExODk5OTQ5MDU2.XbeTFA.FsI7q8ARVQPjtpzfngMdYSHMALs');