// Discord Application Command Deployment Script
// Made by: L33#7732 | Adopted from the DiscordJS Upgrade Guide
// Made on: 8.28.2021

const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { token, clientID, guildID, deploymentMode } = require('./config.json');

// Commands
const commands = [

	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'), // Ping Command Example
	// Make new commands here!

].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);
(async () => {
	try {
		console.log(`[Deployment] - Starting deployment in ${deployLocal?'Local':'Global'} mode.`);
		if(deployLocal) await rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commands });
		else await rest.put(Routes.applicationCommands(clientID), { body: commands });
		console.log('[Deployment] - Successfully registered application commands.');
	} catch (error) { console.error(`[Deployment] - There was an error when trying to deploy: ${error}`); }
})();
