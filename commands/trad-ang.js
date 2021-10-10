const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('trad-ang')
        .setDescription('Choisis une expression pour la traduire en Anglais'),
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
                        description: "Traduire cete expression en Anglais",
                        value: 'Hello, How are you ?'
                    },
                    {
                        label : 'Quel âge avez vous ?',
                        description: "Traduire cete expression en Anglais",
                        value: 'How old are you ?'
                    },
                    {
                        label : 'Où habitez vous ?',
                        description: "Traduire cete expression en Anglais",
                        value: 'Where do you live ?'
                    },
                    {
                        label : 'Enchanté de faire votre connaissance !',
                        description: "Traduire cete expression en Anglais",
                        value: 'Nice to meet you !'
                    },
                    {
                        label : 'Au revoir !',
                        description: "Traduire cete expression en Anglais",
                        value: 'Goodbye !' 
                    },
                    {
                        label : 'A demain !',
                        description: "Traduire cete expression en Anglais",
                        value: 'See you tommorow !' 
                    },
                    {
                        label : 'Merci',
                        description: "Traduire cete expression en Anglais",
                        value: 'Thanks ' 
                    },
                    {
                        label : 'Je vais bien',
                        description: "Traduire cete expression en Anglais",
                        value: "I'm fine" 
                    },
                    {
                        label : 'oui',
                        description: "Traduire cete expression en Anglais",
                        value: "yes" 
                    },
                    {
                        label : 'non',
                        description: "Traduire cete expression en Anglais",
                        value: "no" 
                    }
                ])
            ); 
        return interaction.reply({ content: 'Choisi une expression pour la traduire en Anglais', components: [row] })      
    }    
}