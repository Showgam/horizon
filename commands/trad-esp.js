const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('trad-esp')
        .setDescription('Choisis une expression pour la traduire en Espagnol'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */    
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(new MessageSelectMenu()
                .setCustomId('select-option')
                .setPlaceholder('Selectionne une option')
                .addOptions([
                    {
                        label : 'Bonjour, Comment allez-vous ?',
                        description: "Traduire cete expression en Espagnol",
                        value: '¿ Buenos días, Cómo está ?'
                    },
                    {
                        label : 'Quel âge avez vous ?',
                        description: "Traduire cete expression en Espagnol",
                        value: '¿ Cual es tu edad ?'
                    },
                    {
                        label : 'Où habitez vous ?',
                        description: "Traduire cete expression en Espagnol",
                        value: '¿ Donde vives ?'
                    },
                    {
                        label : 'Enchanté de faire votre connaissance !',
                        description: "Traduire cete expression en Espagnol",
                        value: '¡ Encantado de conocerte !'
                    },
                    {
                        label : 'Au revoir !',
                        description: "Traduire cete expression en Espagnol",
                        value: '¡ Adiós !' 
                    },
                    {
                        label : 'A demain !',
                        description: "Traduire cete expression en Espagnol",
                        value: '¡ Hasta mañana !' 
                    },
                    {
                        label : 'Merci',
                        description: "Traduire cete expression en Espagnol",
                        value: 'Gracias' 
                    },
                    {
                        label : 'Je vais bien',
                        description: "Traduire cete expression en Espagnol",
                        value: "Estoy bien" 
                    },
                    {
                        label : 'oui',
                        description: "Traduire cete expression en Espagnol",
                        value: "sí" 
                    },
                    {
                        label : 'non',
                        description: "Traduire cete expression en Espagnol",
                        value: "no" 
                    }
                ])
            ); 
        return interaction.reply({ content: 'Choisi une expression pour la traduire en Espagnol', components: [row] })      
    }    
}