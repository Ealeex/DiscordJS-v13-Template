# DiscordJS v13 Bot Template - Switch Statement

This is a template bot for the DiscordJS v13 library.\
This specific template is based off switch statements.\
These templates are meant to be beginner friendly.

## Setup

Download the files into a folder and open bash from the folder's directory.\
Use the package manager [npm](https://www.npmjs.com/get-npm) to setup the project and run the install command.

```bash
npm install
```

#Configuration

Open the config.json file and add a token for a bot from the [Discord Developer Portal](https://discordapp.com/developers/applications/).

```json
{
    "token"           : "exampletoken-jagnbikhjegbaikhj13513",
    "prefix"          : ">",
    "clientID"        : "exampleCID-bhikb3akh13513ounikjh",
    "guildID"         : "exampleGID-jn3tkjn13ioujniojndak",
    "deployLocalMode" : true
}
```

# Command Deployment

Once the libraries are installed, you will need to deploy the commands that will be utilized in the bot.\
Commands to be deployed need to be added to the deploy-commands.js file. There is an example in the file.\
Once all of the commands are ready to be deployed. You need to make sure that your bot has the 'applications.commands' scope authorized.\
Fill in the clientID and go to this link here: 'https://discord.com/api/oauth2/authorize?client_id=[YOUR BOT ID]&scope=applications.commands'\
Finally, run the deployment script.\

```bash
node ./deploy_commands.js
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
