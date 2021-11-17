const Discord = require("discord.js-selfbot");
const client = new Discord.Client();
const {data, token} = require("./config.json")

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    for(let ch of Object.keys(data)){
        if(msg.channel.id === ch){
            if(msg.embeds.length > 0){
                const embed = msg.embeds[0]
                msg.channel.client.channels.fetch(data[ch]).then(channel=>{
                    if(embed.description){
                      channel.send(embed.description)
                    }
                    if(embed.image){
                        channel.send(embed.image.url)
                    }
                })
            }
        }
    }
});

client.login(token);