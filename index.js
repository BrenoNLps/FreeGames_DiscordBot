const {Client, GatewayIntentBits} = require('discord.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent      
] });


const TOKEN = 'TOKEN_HERE';
client.login(TOKEN);

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


