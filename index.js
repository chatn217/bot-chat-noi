const Discord = require("discord.js");
const Bot = new Discord.Client();
const fs = require("fs");
var prefix = "/";
const bdd = require("./bdd.json")
const token = require('./config.json')



Bot.on("ready", async () =>{
    console.log("Le Bot est allumé")
    console.log("Toutes Les Commandes Sont Fonctionnel")
       const statuses = [
        () => `${Bot.guilds.cache.size} On va tout detruire `,
        () => `${Bot.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} Membres`
    ]
       let i = 0
       setInterval(() => {
           Bot.user.setActivity(statuses[i](), {type: 'WATCHING'})
           i = ++i % statuses.length
       }, 1e4)  
});

function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4),(err) => {
        if (err) message.channel.send("**Une erreur est survenue. **");
    });
}



Bot.login(token.token);

Bot.on('message', message => {
    if (message.content.startsWith( prefix + 'help')) {
     message.delete()
     
 
        const monembed = new Discord.MessageEmbed()
	   .setDescription("_**・𝐃𝐞𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫𝐬 𝐑𝐎𝐁𝐋𝐎𝐗𝟒𝟎𝟒・**_")
	   .setColor("RANDOM")
	   .addField("__𝐹𝑢𝑛__", "▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅")
	   .addField("__𝑀𝑜𝑑𝑒́𝑟𝑎𝑡𝑖𝑜𝑛 __", "▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅")
       .setImage('https://images-ext-2.discordapp.net/external/uNlBiIo34HSqlFv5iXri2reHsGhkNSrz-6vXeBh61cI/%3Fq%3Dtbn%253AANd9GcRzxukSNnCFooXQw3SddZ5hJ65D6_b4Mk-pRw%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images')
	   .setFooter('𝐃𝐞𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫𝐬 𝐑𝐎𝐁𝐋𝐎𝐗𝟒𝟎𝟒 ', 'https://images-ext-2.discordapp.net/external/WAx55_okCev4qTqqQozWqBT9gPA8xoy21N4-KQ512Ao/https/media.tenor.com/images/00e83ff5a523055faed12d8b0c46cf02/tenor.gif');
	   message.channel.send(monembed);
    }






    if (message.content.startsWith(prefix + 'fun')){
        message.delete()
        const monembed = new Discord.MessageEmbed()
       .setDescription("_**・𝐌𝐞𝐧𝐮 𝐅𝐮𝐧 ・**_")
       .setColor("RANDOM")
       .addField("__**𝑃𝑖𝑛𝑔**__", "**ton ping .**")
       .addField("__**𝑃𝑟𝑜𝑏𝑎**__ [__𝑚𝑠𝑔__]", "**Posé la proba que vous voulez.** ")
       .addField("__**𝐼𝑠𝑠𝑜𝑢**__", "**tema il est genant .**")
       .addField("__**𝐹𝑏𝑖 **__" , "**Open up .**")
       .addField("__**8𝑏𝑎𝑙𝑙**__ [__𝑚𝑠𝑔__]", "**Posé Une question au Bot.  **")
       .addField("__**𝑛𝑢𝑚**__" , "**Générer Un nombre random.**")
       .addField("__**𝐸𝑚𝑏𝑒𝑑**__ [__𝑚𝑠𝑔 __]", "**Envoie un embed .**")
       .setImage('https://images-ext-1.discordapp.net/external/am--acPfF_MFjnWay8yR6A8Q1FnnjD87VG88EO9lCjk/https/i.pinimg.com/originals/c4/62/51/c462515c3e7bd42b3f2385995856e975.gif')
       .setFooter('𝐃𝐞𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫𝐬 𝐑𝐎𝐁𝐋𝐎𝐗𝟒𝟎𝟒', 'https://images-ext-2.discordapp.net/external/WAx55_okCev4qTqqQozWqBT9gPA8xoy21N4-KQ512Ao/https/media.tenor.com/images/00e83ff5a523055faed12d8b0c46cf02/tenor.gif');

       
       
       
       message.channel.send(monembed);
   }
   

   if (message.content.startsWith(prefix + 'moderation')){
    message.delete()
    
    const monembed = new Discord.MessageEmbed()
    .setDescription("_**・𝐌𝐞𝐧𝐮 𝐌𝐨𝐝𝐞́𝐫𝐚𝐭𝐢𝐨𝐧 ・**_")
    .setColor("RANDOM")
    .addField("__**𝐾𝑖𝑐𝑘**__ [__𝑀𝑒𝑛𝑡𝑖𝑜𝑛__]", "**Kick un utilisateur.**")
    .addField("__**𝐵𝑎𝑛**__ [__𝑀𝑒𝑛𝑡𝑖𝑜𝑛__]", "**Ban un utilisateur.**")
    .addField("__**𝑃𝑢𝑟𝑔𝑒**__  [__𝑁𝑜𝑚𝑏𝑟𝑒__]", "**Supprime un certain nombre de message.**")
    .addField("__**𝑢𝑠𝑒𝑟-𝑖𝑛𝑓𝑜**__ [__𝑀𝑒𝑛𝑡𝑖𝑜𝑛__]", "**Info de l'utilisateur.**")
    .addField('__**𝑠-𝑖𝑛𝑓𝑜**__', "**Info Du Serveur.**")
    .addField('__**𝑠𝑡𝑎𝑡**__', "**La derniere personne a utilisé le Bot .**")
    .setImage('https://images-ext-1.discordapp.net/external/iwDjxcFz99AL-dwmXLn1jl0oi_mlwh2sA1NMWuceA0A/https/steamuserimages-a.akamaihd.net/ugc/861730486531078077/73FEB92E0B4BA34E7E30F4DF8313ED6D2C2CD774/?width=400&height=225')
    .setFooter('𝐃𝐞𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫𝐬 𝐑𝐎𝐁𝐋𝐎𝐗𝟒𝟎𝟒', 'https://images-ext-2.discordapp.net/external/WAx55_okCev4qTqqQozWqBT9gPA8xoy21N4-KQ512Ao/https/media.tenor.com/images/00e83ff5a523055faed12d8b0c46cf02/tenor.gif');

    

    
    
    message.channel.send(monembed);
}
  

if(message.content.startsWith(prefix + 'stat')){
    message.channel.send("**" + message.author.username + "** qui a pour identifiant : __" + message.author.id + "__ a posté un message ")
}

if (message.content.startsWith(prefix + 'user-info')) {
    message.delete();
    var _0x566a6e = message.mentions.members.first();
    const monembed = new Discord.MessageEmbed()
        .setTitle('__Informations utilisateur.__')
        .setThumbnail(message.author.avatarURL)
        .setColor("RANDOM")
        .addField('**Pseudo de la personne:**', '' + message.mentions.users.first()['username'])
        .addField('**Date de création du compte :**', _0x566a6e.user.createdAt)
        .addField('**ID du compte :**', _0x566a6e.user.id)
        .addField('**Pseudo + tag :**', _0x566a6e.user.tag)
        message.channel.send(monembed);
  }
  


  
  if (message.content.startsWith(prefix + "8ball")){
    message.delete();
    let args = message.content.split(" ").slice(1);
    if (!args[0]) return message.reply("_**Tu n'as pas posé de question !**_");
    let replies = ["**Oui**", "**Non**", "**Peux être**", "**Je ne sais pas zebi**", "**C'est impossible **", "**Probablement..**", "**Hors de question !**", "**Pourquoi pas**"]
    let question = args.slice(0).join(" ");
    let res = Math.floor((Math.random() * replies.length));

    let bembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('𝐃𝐞𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫𝐬')
        .setFooter('𝐃𝐞𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫𝐬', 'https://cdn.discordapp.com/avatars/691667520071008327/a_98b0fc0728f1c5b68cd90fc3198cedee.gif')
        .addField(`Question de ${message.author.tag}`, question)
        .addField("Réponse : ", replies[res])
        message.channel.send(bembed);
    }


  if (message.content.startsWith(prefix + 's-info')) {
    message.delete();
    const monembed = new Discord.MessageEmbed()
        .setTitle('__**Informations du Serveur.**__')
        .setColor('RANDOM')
        .addField('**Nom** : ', message.guild.name)
        .addField('**ID** : ', message.guild.id)
        .addField('**Localisation** : ', message.guild.region)
        .addField('**Date de création** : ', message.guild.createdAt)
        .addField('**Créateur** : ', message.guild.owner.user.tag)
        .addField('**Niveau de sécurité** : ', message.guild.verificationLevel)
        .addField('**Nombre de membres** : ', message.guild.memberCount)
        message.channel.send(monembed);
}


   if (message.content.startsWith(prefix + 'ping')) {
    const monembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('**Pong !! **');
    message.channel.send(monembed);
  }


  
Bot.on('message', message => {
  if (message.content.startsWith(prefix + 'fbi')){
    message.delete() , answertime = new Date().getTime() 

    const monembed = new Discord.MessageEmbed()
  .setColor('#0a0a0a')
  .setImage('https://media.tenor.com/images/7aec1c8df8b5653666483320ed50fdd8/tenor.gif')
  message.channel.send(monembed);

  }
  if (message.content.startsWith(prefix + 'issou')){
    message.delete() , answertime = new Date().getTime() 

    const monembed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setImage('https://cdn.discordapp.com/attachments/360828747269537795/561661491485343747/17900-full.gif')
  .setFooter('𝑇𝑒𝑚𝑎 𝑖𝑙 𝑒𝑠𝑡 𝑔𝑒𝑛𝑎𝑛𝑡')
  message.channel.send(monembed);


}

  if (message.content.startsWith(prefix + 'proba')) {
    var _0x110dbb = message.content.split(' ')['join'](' ').slice(0x7);
    var _0x56d10c = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
    const monembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('La Question est : ')['setDescription']('' + _0x110dbb + '')
        .addField('Réponse', '' + _0x56d10c[Math.floor(Math.random() * 0x8)] + '');
    return message.channel.send(monembed);['catch'](_0x1eaa75 => {});
}





   if(message.content.startsWith( prefix + "num")){
    if (message.deletable) message.delete();
    random = Math.floor(Math.random() * 10000) + 1;
    const monembed = new Discord.MessageEmbed()
    .setDescription(`Votre nombre : **${random}**`)
    .setColor('RANDOM')
    return message.channel.send(monembed).catch(e => {});
}

let args = message.content.trim().split(" ").slice(1);



     if (message.content.startsWith( prefix + 'purge')) {
   
            message.delete();
                if(message.member.hasPermission("SPEAK")){
        
                    let args = message.content.trim().split(/ +/g);
        
                    if(args[1]){
                        if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){
        
                            message.channel.bulkDelete(args[1])
                           
                            
                        }
                        else{
                            message.channel.send(`**Vous devez indiquer une valeur entre 1 et 99 !**`)
                        }
                        
                    }
                    else{
                        message.channel.send(`**Veuillez indiquer une valeur au dessus de 0 !**`)
                    }
        
                
        
                
                }    
        
            }
   
    

		
 
 Bot.on('message', message => {
    if(message.content.startsWith(prefix +"embed")) {
        message.delete()
        let args = message.content.split(" ").slice(1).join(" ") 
        let embed = new Discord.MessageEmbed() 
        .setDescription(args) 
        .setColor("RANDOM")
        message.channel.send(embed) 
 }})



  Bot.on('message', message => {
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + 'ban')){
            message.delete()
            let mention = message.mentions.members.first();

            if(mention == undefined){
                let embed = new Discord.MessageEmbed() 
                .setDescription("_**Membre Introuvable ou Mal Metionné .**_")
                .setColor('RANDOM')
                message.channel.send(embed)
            }
            else {
                if(mention.bannable){
                    mention.ban();  
                    let embed = new Discord.MessageEmbed() 
                    .setDescription(mention.displayName + '_**A été banni avec succès**_')
                    .setColor('RANDOM')
                    message.channel.send(embed)

                }
                else {     
                let embed = new Discord.MessageEmbed()                
                .setDescription('_**Impossible de bannir se Membre**_')
                .setColor('RANDOM')
                message.channel.send(embed)
                }
            }

        }
        else if(message.content.startsWith(prefix + 'kick')){
            message.delete()
            let mention = message.mentions.members.first();

            if(mention == undefined){
                let embed = new Discord.MessageEmbed() 
                .setDescription("_**Membre Introuvable ou Mal Metionné .**_")
                .setColor('RANDOM')
                message.channel.send(embed)
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    let embed = new Discord.MessageEmbed() 
                    .setDescription(mention.displayName + "_**A eté kick avec succès**_")
                    .setColor('RANDOM')
                    message.channel.send(embed)
    
                    
                }
                else {
                    let embed = new Discord.MessageEmbed() 
                    .setDescription("_**Impossible de kick ce membre.**_")
                    .setColor('RANDOM')
                    message.channel.send(embed)
    
                
                }
            }

        }

}})











})













})