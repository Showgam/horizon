const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('trad-all')
        .setDescription('Choisis une expression pour la traduire en Allemand'),
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
                        description: "Traduire cete expression en Allemand",
                        value: 'Guten Morgen, wie geht es dir ?'
                    },
                    {
                        label : 'Quel âge avez vous ?',
                        description: "Traduire cete expression en Allemand",
                        value: 'Wie alt sind Sie ?'
                    },
                    {
                        label : 'Où habitez vous ?',
                        description: "Traduire cete expression en Allemand",
                        value: 'Wo wohnst du ?'
                    },
                    {
                        label : 'Enchanté de faire votre connaissance !',
                        description: "Traduire cete expression en Allemand",
                        value: 'Schön, dich kennenzulernen !'
                    },
                    {
                        label : 'Au revoir !',
                        description: "Traduire cete expression en Allemand",
                        value: 'Wiedersehen !' 
                    },
                    {
                        label : 'A demain !',
                        description: "Traduire cete expression en Allemand",
                        value: 'Bis morgen !' 
                    },
                    {
                        label : 'Merci',
                        description: "Traduire cete expression en Allemand",
                        value: 'Dankeschön' 
                    },
                    {
                        label : 'Je vais bien',
                        description: "Traduire cete expression en Allemand",
                        value: "es geht mir gut" 
                    },
                    {
                        label : 'oui',
                        description: "Traduire cete expression en Allemand",
                        value: "ja" 
                    },
                    {
                        label : 'non',
                        description: "Traduire cete expression en Allemand",
                        value: "nein" 
                    }
                ])
            ); 
        return interaction.reply({ content: 'Choisi une expression pour la traduire en Allemand', components: [row] })      
    }    
}