const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('youtube')
        .setDescription('Donne un bouton qui vous redirige vers le service Youtube'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */    
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(new MessageButton()
                .setLabel('Youtube')
                .setStyle('LINK')
                .setURL('https://youtube.com')
            );
        
        const embed = new MessageEmbed()
        .setDescription("Appuyez sur ce bouton pour accéder au service Youtube®");

        await interaction.reply({ embeds: [embed], components: [row]});

    }    
}