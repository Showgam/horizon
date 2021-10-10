const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton, Client, Interaction, MessageEmbed, Message } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */    
    async execute(interaction) {
        const row = new MessageActionRow()

        const embed = new MessageEmbed()
            .setTitle("Test")
            .setDescription("test")
            .setFooter("test");

        await interaction.reply({ embeds: [embed]});
    }    
}