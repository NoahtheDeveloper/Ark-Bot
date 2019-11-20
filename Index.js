const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
const config = require("./config.json");



client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });


client.on('message', msg => {
 if (msg.content === '.Hello') {
 msg.reply('Hows it going mate?');
 }
 });

 let prefix = ".";
client.on("message", (message) => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "pong")) {
    message.channel.send("Ping!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("Bar!");
  } else
   if (message.content.startsWith(prefix + "beer")) {
     message.channel.send("Coming Right Up!");
   } else
     if (message.content.startsWith(prefix + "Invite")) {
       message.channel.send("https://discord.gg/qcczWE9");
     }
  });




//Info.js-------------------------------------------------------------------------------------------------------------------------------------


	


client.on('message', message => {
  if (message.content === '.About') {
    const embed = new RichEmbed()
  .setTitle("XSS Bot By ASH Enterprises")
  .setColor(0xFF0000)
  .setDescription("Welcome to XSS Menu!")
  .addField('Main Hub', 'XSS is a bot created for Moderation, Games, greetings, and More!. This bot was made by ASH Enterprises. For more info try .Invite')
  .setTimestamp()



  
  message.channel.send({embed});
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
  .setColor(0xFF0000)
  .setDescription("This bot is mad by XSS INC. This bot is used for gambiling, music, servers stats, and more!")
  .addField('User Commands', '.Hello-Gives a detailed response to the user\n .rip-Sends the detailed picture RIP\n .WhoA-Sends the who asked picture.\n .Ping-Gets the current servers ms.\n .pong-replies with the response Ping!\n .foo-Responded with Bar\n .F-Gives the person a proper Fin the chat.\n .beer-Responds coming right up!')
  .addField('Admin Commands', '.Kick-Removes the user from the server!\n .Ban-Bans the user completely from the server\n .Purge-Removes a number of messages from chat. Must be more than 2 Mesages. ')
  .setTimestamp()

  
  
  message.channel.send({embed});
}
});




  
// Mod.js part-------------------------------------------------------------------------------------------------------------------------------




client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Admin", "Staff"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Staff"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});


 //activity------------------------------------------------------------------------------------------------------------------------












 
client.login('NjM0NDY3MDExODk5OTQ5MDU2.XbeTFA.FsI7q8ARVQPjtpzfngMdYSHMALs');
