const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs');
let XP = JSON.parse(fs.readFileSync('./XP.json', 'utf8'));

bot.on("message", msg => {
	let prefix = ";";

  bot.on('ready',() => {
    console.log("I am online.")
  });

	console.log(0)
	if(!msg.content.startsWith(prefix)) return;

	//console.log(0.1)
	//if(msg.author.id != "Your ID") return;
	//Only use the above for testing as only the person with that ID can use the bot.
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

	let userData = XP[msg.author.id];
	if (!userData) userData = {XP: 0};

  let args = msg.content.split(" ").slice(1);

	let userXP = XP[msg.author.id] ? XP[msg.author.id].XP : 0;

	console.log("level")
	if (msg.content.startsWith(prefix + "level")) {
		msg.reply(`Tu ai asa de multa experienta: ${userData.XP} ! Sexi, musculosule.`);
	}

  console.log("SSH")
	if (msg.content.startsWith(prefix + "ssh")) {
    if (userData.XP > 10000){
		msg.channel.sendMessage(`TE AI TRANSFORMAT INTR-O SUPER SERINGA HUMANA!!!!!!                                                                                                               https://cdn.discordapp.com/attachments/445680450875424778/561716211306463232/SSH.png`);
  } else {
    msg.channel.sendMessage(`Ai nevoie de 10.000 XP ca sa devi o "Super Seringa Humana"!`)
         }
	}


	if (msg.content.startsWith(prefix + "sal")) {
    if (userData.XP > 100000000000){
		msg.channel.sendMessage(`Esti Sal, cel mai sexy si puternic barbat in viata!`);
  } else {
    msg.channel.sendMessage(`Ai nevoie de 100.000.000.000 XP ca sa fi "Sal"!`)
         }
	}


	if (!XP[msg.author.id]) XP[msg.author.id] = {XP: 0, level: 0}

if (msg.content.startsWith(prefix + ""))

	console.log("fute")
	if (msg.content.startsWith(prefix + "fute")) {
		userData.XP += 10
		msg.channel.sendMessage(`${msg.author} ma futut so o primit 10 experienta!`)
	}

	console.log(XP)
	fs.writeFile('./XP.json', JSON.stringify(XP), console.error);

});
bot.login("NTYxNzExNDUwNTQ5MTI1MTIx.XKAONg.Y53YHCrN-HcIZK5_kyL5QWfZM4A")
