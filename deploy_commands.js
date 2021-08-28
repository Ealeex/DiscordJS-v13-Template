// Discord Application Command Deployment Script
// Made by: L33#7732 | Adopted from the DiscordJS Upgrade Guide
// Made on: 8.28.2021

// Step 1: Run 'npm install @discordjs/builders @discordjs/rest discord-api-types'
// Step 2: Fill out the configuration variables below.
// Step 3: Make commands in the commands object.
// Step 4: Ensure that your bot has the 'applications.commands' scope authorized.
// Step 5: Run the script with 'node ./deploy-commands.js'
// Step 6: ???
// Step 7: Now your server(s) have commands!

const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');
const { SlashCommandBuilder } = require('@discordjs/builders');

// Configuration
const deployLocal = true;  // When true, commands will only deploy to guild specified below. (This is instant, as compared to global which takes up to an hour.)
const token = '';          // Bot Token
const clientID = '';       // Client ID
const guildID = '';        // Guild ID (Only needed for local deployment)

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
