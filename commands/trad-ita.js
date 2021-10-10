const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('trad-ita')
        .setDescription('Choisis une expression pour la traduire en Italien'),
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
                        description: "Traduire cete expression en Italien",
                        value: 'Buongiorno come stai ?'
                    },
                    {
                        label : 'Quel âge avez vous ?',
                        description: "Traduire cete expression en Italien",
                        value: 'Quanti anni hai ?'
                    },
                    {
                        label : 'Où habitez vous ?',
                        description: "Traduire cete expression en Italien",
                        value: 'Dove vivi ?'
                    },
                    {
                        label : 'Enchanté de faire votre connaissance !',
                        description: "Traduire cete expression en Italien",
                        value: 'Piacere di conoscerti !'
                    },
                    {
                        label : 'Au revoir !',
                        description: "Traduire cete expression en Italien",
                        value: 'Arrivederci !' 
                    },
                    {
                        label : 'A demain !',
                        description: "Traduire cete expression en Italien",
                        value: 'Ci vediamo domani !' 
                    },
                    {
                        label : 'Merci',
                        description: "Traduire cete expression en Italien",
                        value: 'Grazie' 
                    },
                    {
                        label : 'Je vais bien',
                        description: "Traduire cete expression en Italien",
                        value: "Sto bene" 
                    },
                    {
                        label : 'oui',
                        description: "Traduire cete expression en Italien",
                        value: "sì" 
                    },
                    {
                        label : 'non',
                        description: "Traduire cete expression en Italien",
                        value: "no" 
                    }
                ])
            ); 
        return interaction.reply({ content: 'Choisi une expression pour la traduire en Italien', components: [row] })      
    }    
}