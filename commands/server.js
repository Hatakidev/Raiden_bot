const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Show information about this server.'),
	async execute(interaction) {
		const serverEmbed = new MessageEmbed()
		.setTitle(`Server name: ${interaction.guild.name}`)
		.setAuthor({name: 'Raiden', iconURL: 'https://media.discordapp.net/attachments/789775097136807976/957603365498536017/0fc8a7b349e7da5b4566bf6967b3a9d6.jpg'})
		.setFields({name: 'Total members:', value: `${interaction.guild.memberCount}`})
		.setColor('RANDOM')
		.setThumbnail(`${interaction.guild.iconURL()}`)
		return interaction.reply({ embeds: [serverEmbed] });
	},
};