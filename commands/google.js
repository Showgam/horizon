const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('google')
        .setDescription('Donne un bouton qui vous redirige vers le service Google'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */    
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(new MessageButton()
                .setLabel('Google')
                .setStyle('LINK')
                .setURL('https://google.com')
            );

        const embed = new MessageEmbed()
        .setDescription("Appuyez sur ce bouton pour accéder au service Google®");

        await interaction.reply({ embeds: [embed], components: [row]});

    }    
}