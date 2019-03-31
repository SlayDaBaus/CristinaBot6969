const Discord = require('discord.js');
const PREFIX = ";"
const fs = require('fs');
let XP = JSON.parse(fs.readFileSync('./XP.json', 'utf8'));

var bot = new Discord.Client();

var cristina = [
  "Cristina nu primeste bani ca sa o suga, ea da bani ca sa o suga.",
  "Cristina nu primeste bani ca sa o suga, ea da bani ca sa o suga.",
  "Pentru Cristina, suptu e viata si supti e iubirea.",
  "Cristina nu stie decat sa suga, se observa ca e mama lu iRevoLL."
]

var rexp = [
  "10",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19"
]

bot.on("ready", () => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
  bot.user.setGame(`with ${bot.guilds.size} pule!!!`);
});

bot.on('message', function(message) {
  if (message.author.equals(bot.user)) return;

bot.on('ready',() => {
  console.log("I am online.")
});

if (!message.content.startsWith(PREFIX)) return;

const config = require("./config.json");

let staff = message.guild.roles.find("name", "StaffTeam");

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

var argresult = args.join(' ');

switch (args[0].toLowerCase()) {

  case "ping":
        message.channel.sendMessage("Am mingi mari de ping-pong cu sfoara in cur!");
        break;
  case "say":
        if (args[1]){
        if(message.member.roles.has(staff)){
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{});
          message.channel.send(sayMessage);
        }
      }
        break;
  case "prefix":
        message.channel.sendMessage("Prefixul meu este `;`! Vorbitul asta ma face sa vreau sa sug ;-;!");
        break;
  case "owner":
        message.channel.sendMessage("This bot's owner is Slay (Also called Sal)");
        break;
  case "cristina":
        if (args[0]) message.channel.sendMessage(cristina[Math.floor(Math.random() * cristina.length)]);
        else message.channel.sendMessage("Can't read that");
        break;
  case "train":
        return;
  case"createchannel":
       if (args[1]) guild.createChannel('argresult');
       else message.channel.sendMessage('You have to call it something WIP')
        break;
  case"level":
        return;
        break;
        case"ssj":
              return;
              break;
  case "ajutor":
       var embed = new Discord.RichEmbed()
       .addField("ping", "Incep sa sug un ping.")
       .addField("prefix", "Arata prefixul comenzilor mele din cur.")
       .addField("train", "Iti da 10 experienta, aia am eu multa. Numai ca doar experienta de supt pule.")
       .addField("level", "Iti arata experianta da! Wow, acuma vreau sa iti sug pula ;D!")
       .addField("owner", "Arata owner-ul meu majestic!")
       .addField("cristina", "Arata niste povesti si facturi despre versiunea mea biologica!")
       .setColor("#bb1111")
       .setFooter("Cristina mereu o sa suga pule ca hobby, si ca munca **#THEMOREYOUKNOW**")
       .setThumbnail(message.author.avatarURL)
        message.channel.sendEmbed(embed)
        break;
   case"noticeme":
   message.channel.sendMessage(message.author.toString() + " HEYA");
   break;
      }
});



bot.login('NTYxNzExNDUwNTQ5MTI1MTIx.XKAONg.Y53YHCrN-HcIZK5_kyL5QWfZM4A');
