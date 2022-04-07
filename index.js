const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const { token, clientId } = require('./config.json');
const { REST } = require('@discordjs/rest');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const rest = new REST({ version: '9' }).setToken(token);


client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', (client) => {
	client.guilds.cache.get("the guild id");
	client.user.setActivity('To the monkey that programs me', {type: 'WATCHING'})
	console.log('Bot Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on("guildCreate", (guild) => {
	guild.invites.fetch().then(guildInvites => {
		rest.put(Routes.applicationCommands(clientId), { body: commands })
			.then(() => console.log('Successfully registered application commands.'))
			.catch(console.error);
	})

});

client.login(token);