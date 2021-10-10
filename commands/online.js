const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('online')
        .setDescription('Verifie que le bot est bien en ligne et actif'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */    
    async execute(interaction) {
        const row = new MessageActionRow()

        const embed = new MessageEmbed()
            .setDescription("Bonjour ! Je suis bien en ligne et actif !\nSi vous avez besoin d'aide, essayez `help`")

        await interaction.reply({ embeds: [embed]});
    }    
}