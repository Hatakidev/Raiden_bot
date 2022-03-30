const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('warn')
    .setDescription('You can do a warnings for users')
    .addUserOption((option) => option.setName('user').setDescription('The person who you want to warn').setRequired(true)),
    async execute(interaction) {
        const member = interaction.options.getMember('user');
        const warnembed = new MessageEmbed()
        .setColor('FF0000')
        .setAuthor({name: `${interaction.member.username}`, iconURL: `${interaction.member.displayAvatarURL({dynamic: true})}`})
        .setThumbnail(`${member.displayAvatarURL({dynamic: true})}`)
        .setTitle(`${member.user.tag} has been warned`)
        .setTimestamp()
        return interaction.reply({ embeds: [warnembed] });
	
    },
}