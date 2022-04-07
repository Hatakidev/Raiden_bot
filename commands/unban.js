const {SlashCommandBuilder} = require('@discordjs/builders');
const { Permissions, MessageEmbed} = require('discord.js');
const permissions = new Permissions(268550160n);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription(`To unban members. Please use user's id for this and it will work`)
        .addStringOption(option => option.setName('user').setDescription('Idiot to ban').setRequired(true)),
    async execute(interaction) {
        const member = interaction.options.get('user')?.value;
        if (!member) {
            return interaction.reply({content: 'You need to mention the member you want to unban him'});
        }
        else if (!interaction.member.permissions.has('BAN_MEMBERS')) {
            return interaction.reply({ content: `I can't unban this user.`});
        }else {
            const unbanEmbed = new MessageEmbed()
                .setColor('GREEN')
                .setAuthor({name: `${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL({dynamic: true})}`})
                .setThumbnail(`${member.displayAvatarURL({dynamic: true})}`)
                .setTitle(`${member.username} has been unbanned`)
                .setTimestamp()

            return interaction.guild.members
                .unban(member)
                .then(() => {
                    interaction.reply({embeds: [unbanEmbed]});
                });
        }
    },
};