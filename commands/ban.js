const {SlashCommandBuilder} = require('@discordjs/builders');
const { Permissions, MessageEmbed} = require('discord.js');
const permissions = new Permissions(268550160n);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('To ban idiots')
        .addUserOption(option => option.setName('user').setDescription('Idiot to ban').setRequired(true)),
    async execute(interaction) {
        const member = interaction.options.getUser('user');
      if (!member) {
        return interaction.reply({content: 'You need to mention the member you want to ban him'});
      }

      if (!interaction.member.permissions.has('BAN_MEMBERS')) {
        return interaction.reply({ content: `I can't ban this user.`});
      }
      const banembed = new MessageEmbed()
          .setColor('FF0000')
          .setAuthor({name: `${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL({dynamic: true})}`})
          .setThumbnail(`${member.displayAvatarURL({dynamic: true})}`)
          .setTitle(`${member.username} has been banned`)
          .setTimestamp()
   

      return interaction.guild.members
        .ban(member)
        .then(() => {
          interaction.reply({embeds: [banembed]});
        });
    },
};