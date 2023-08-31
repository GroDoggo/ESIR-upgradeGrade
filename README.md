# ESIR-upgradeGrade
This Discord bot allows you to change the roles of all members with a specified role to another designated role.
## Author

This bot was developed by Léo-Paul HUAR for the ESIR Discord server.
## Installation

Before you begin, ensure you have a Discord application token. If you're unsure about how to acquire it, refer to this [guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

1. Clone this repository to your local machine.
2. Create a `config.json` file in the root directory with the following information:
```json
{
    "token": "yourBotToken",
    "clientId": "yourAppID",
    "guildId": "yourServerID"
}
```
3. Run the following command to deploy the slash commands to your Discord server:
```bash
node deploy-commands.js
```
4. Finally, start the bot using:
```bash
node index.js
```
You can verify the bot's connection by using the `/ping` slash command.
## Usage

**Important Note**: Exercise caution while using this command, as it can grant powerful roles. By default, the command is restricted to administrators.

To utilize the bot, follow these steps:

1. On Discord, run the `/upgrade_role base:role upgrade:role` slash command:
    - `base` represents the base role; all members with this role will be selected for processing.
    - `upgrade` is the role to be assigned to the selected members.
2. The bot will identify all members with the `base` role, assign them the `upgrade` role, and remove the `base` role from them.

**Warning**: The bot will indeed remove the `base` role from anyone who possesses it.
## Reference

This bot utilizes the `discord.js` library. For more information, visit the [official documentation](https://discord.js.org/#/).
