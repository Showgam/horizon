const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('trad-por')
        .setDescription('Choisis une expression pour la traduire en Portugais'),
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
                        description: "Traduire cete expression en Portugais",
                        value: 'Bom Dia como você está ?'
                    },
                    {
                        label : 'Quel âge avez vous ?',
                        description: "Traduire cete expression en Portugais",
                        value: 'Quantos anos você tem ?'
                    },
                    {
                        label : 'Où habitez vous ?',
                        description: "Traduire cete expression en Portugais",
                        value: 'Onde você mora ?'
                    },
                    {
                        label : 'Enchanté de faire votre connaissance !',
                        description: "Traduire cete expression en Portugais",
                        value: 'Prazer em conhecê-lo !'
                    },
                    {
                        label : 'Au revoir !',
                        description: "Traduire cete expression en Portugais",
                        value: 'Tchau !' 
                    },
                    {
                        label : 'A demain !',
                        description: "Traduire cete expression en Portugais",
                        value: 'Vejo você amanhã !' 
                    },
                    {
                        label : 'Merci',
                        description: "Traduire cete expression en Portugais",
                        value: 'Obrigado' 
                    },
                    {
                        label : 'Je vais bien',
                        description: "Traduire cete expression en Portugais",
                        value: "Estou bem" 
                    },
                    {
                        label : 'oui',
                        description: "Traduire cete expression en Portugais",
                        value: "sim" 
                    },
                    {
                        label : 'non',
                        description: "Traduire cete expression en Portugais",
                        value: "não" 
                    }
                ])
            ); 
        return interaction.reply({ content: 'Choisi une expression pour la traduire en Portugais', components: [row] })      
    }    
}