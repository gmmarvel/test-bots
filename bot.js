const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Bot Online!!!`);
});
var prefix = 't'
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});





const adminprefix = "t";
const devs = ["474940799226871808","670364324522360833"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

  
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done `)
  return message.reply("**Name Changed :white_check_mark:**");
  } else
  
     if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : Done`);
        }  
  
 
  });







client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on("ready", () => {
    client.user.setStatus("online");
});
client.on("ready", () => {
    client.user.setActivity(`discord.gg/Ln`, {
        type: "Playing"
    });
});














client.login("NjgwODk2MjI5MzUzMzI0NjQx.XuuWTQ.jlrPu9S9emHSzqzAhGZwURdQ7fk")