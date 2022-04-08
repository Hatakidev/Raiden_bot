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
		.setAuthor({name: `${interaction.member.username}`, iconURL: `${interaction.member.displayAvatarURL({dynamic: true})}`})
		.setImage(`${user.displayAvatarURL({ dynamic: true })}`)
		if (user) return interaction.reply({ embeds: [userEmbed]});
	},
};