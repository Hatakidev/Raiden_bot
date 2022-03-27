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
        .setColor('#99ff99')
        .setTitle('User information')
        .setAuthor({name: 'Raiden', iconURL: 'https://media.discordapp.net/attachments/789775097136807976/957603365498536017/0fc8a7b349e7da5b4566bf6967b3a9d6.jpg'})
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