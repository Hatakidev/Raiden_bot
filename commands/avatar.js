const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('user').setDescription('The user\'s avatar to show').setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		const userEmbed = new MessageEmbed()
		.setTitle(`${user.username}'s avatar`)
		.setColor('BLUE')
		.setAuthor({name: 'Raiden', iconURL: 'https://media.discordapp.net/attachments/789775097136807976/957603365498536017/0fc8a7b349e7da5b4566bf6967b3a9d6.jpg'})
		.setImage(`${user.displayAvatarURL({ dynamic: true })}`)
		if (user) return interaction.reply({ embeds: [userEmbed]});
	},
};