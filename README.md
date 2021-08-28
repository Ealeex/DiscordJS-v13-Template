# DiscordJS v13 Bot Template - Switch Statement

This is a template bot for the DiscordJS v13 library.\
This specific template is based off switch statements.\
These templates are meant to be beginner friendly.

## Template Navigation
The [If]() template uses if statements to select commands.\
The [Switch](https://github.com/Ealeex/DiscordJSv13-BotTemplate_SwitchFormat) template uses switch statements to select commands.\
The [Object]() template uses an object to store commands and meta data.\
The [FileSystem]() template uses files to store commands and meta data.

## Setup

Download the files into a folder and open bash from the folder's directory.\
Use the package manager [npm](https://www.npmjs.com/get-npm) to setup the project and install [discord.js](https://discord.js.org/#/).

```bash
npm install
```

# Command Deployment

Once the libraries are installed, you will need to deploy the commands that will be utilized in the bot.



#
Open the config.json file and add a token for a bot from the [Discord Developer Portal](https://discordapp.com/developers/applications/) and a prefix.

```json
{
    "token"  : "exampletoken-7813041nfwh0f12",
    "prefix" : ">"
}
```

## Starting

To run the bot, open bash and run the code.

```
node .\index.js
[INVITE] - https://discordapp.com/api/oauth2/authorize?client_id=examplebotid&permissions=8&scope=bot
[INFO] - ExampleBot is online in 1 servers:
        > 'Example Server' with Owner 'ExampleUser#1234' with 12 users,
[CREATION] - 'ExampleBot' was made on 'Mon Sep 09 2019 20:00:00 GMT-0500 (Central Daylight Time)'
[STATUS] - ExampleBot loaded in 300ms
```

Click the supplied link to invite the bot to your server.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)