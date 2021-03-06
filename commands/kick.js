const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Allows the admin or owner to kick the member.")
    .addUserOption((option) => option.setName('user').setDescription('The person who you want to kick').setRequired(true)),
    async execute (interaction) {
        const member = interaction.options.getMember('user');

        if (!member) {
          return interaction.reply('You need to mention the member you want to kick him');
        }
        else if (!interaction.member.permissions.has('KICK_MEMBERS')) {
          return interaction.reply("I can't ban this user.");
        }else {
            const kickembed = new MessageEmbed()
                .setColor('RED')
                .setAuthor({name: `${interaction.member.username}`, iconURL: `${interaction.member.displayAvatarURL({dynamic: true})}`})
                .setThumbnail(`${member.displayAvatarURL({dynamic: true})}`)
                .setTitle(`${member.user.username} has been kicked`)
                .setTimestamp()

            return member.kick().then(() => {
                interaction.reply({embeds: [kickembed]});
            });
        }
    },
    
};