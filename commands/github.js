const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('github')
		.setDescription('look at my insides!!!'),
        async execute(interaction){
            return interaction.reply(`My repository: https://github.com/Hatakidev/Raiden_bot`);
        },
};