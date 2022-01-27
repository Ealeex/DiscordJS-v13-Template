// Discord Bot Template - Switch Statement v13
// Made by: Ethan Lee | Made on: 8.28.2021
// Github: https://github.com/Ealeex/DiscordBotTemplate-SwitchStatement

const { Client, Intents } = require('discord.js');
const client = new Client({disableEveryone: true, autoReconnect: true, intents:[Intents.FLAGS.GUILDS]});
client.config = require('./config.json');
client.startTime = Date.now();

// Ready Event: Emitted when the bot is online.
console.clear();
client.on('ready', async () => {
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers. | Made by L33`);
    console.log(`[INVITE] - https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
    const servers = client.guilds.cache.map(guild => `\n\t> '${guild.name}' with with ${guild.memberCount}`);
    console.log(`[INFO] - ${client.user.username} is online in ${client.guilds.cache.size} servers: ${servers}.`);
    console.log(`[CREATION] - ${client.user.username} was made on '${client.user.createdAt}'`);
    console.log(`[STATUS] - ${client.user.username} loaded in ${Date.now() - client.startTime}ms.`);
});

// Interaction Event: Emitted when someone uses a slash command.
client.on('interactionCreate', async interaction => {

    if(interaction.isCommand()) {
        switch(interaction.commandName) {

            // Sends a message and then edits it. (Useful for telling if the bot is online and working.)
            case 'ping':
                await interaction.reply(":question:  **Ping?**");
                return interaction.editReply(`:ping_pong:  **Pong!**`);

        }
    }

});

client.login(client.config.token);