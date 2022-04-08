const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Display user information')
    .addUserOption((option) => option.setName('user').setDescription(`User's information to show`).setRequired(true)),
    async execute(interaction){
        const user = interaction.options.getUser('user');
        const userEmbed = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('User information')
        .setAuthor({name: `${interaction.user.username}`, iconURL: `${interaction.member.displayAvatarURL({dynamic: true})}`})
        .addFields(
            {name: 'Name', value: `${user.username}`},
            {name: 'ID', value: `${user.id}`},
        )
        .setThumbnail(`${user.displayAvatarURL({dynamic: true})}`)
        .setTimestamp()
        if(user){
            return interaction.reply({embeds: [userEmbed]});
        }
        
    },
};