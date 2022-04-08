const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Show information about this server.'),
	async execute(interaction) {
		const serverEmbed = new MessageEmbed()
		.setTitle(`Server name: ${interaction.guild.name}`)
		.setAuthor({name: `${interaction.user.username}`, iconURL: `${interaction.member.displayAvatarURL({dynamic: true})}`})
		.setFields({name: 'Total members:', value: `${interaction.guild.memberCount}`})
		.setColor('RANDOM')
		.setThumbnail(`${interaction.guild.iconURL()}`)
		return interaction.reply({ embeds: [serverEmbed] });
	},
};