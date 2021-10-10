const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('trad-rus')
        .setDescription('Choisis une expression pour la traduire en Russe'),
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
                        description: "Traduire cete expression en Russe",
                        value: 'Доброе утро, как дела ?\n*Dobroye utro, kak dela ?*'
                    },
                    {
                        label : 'Quel âge avez vous ?',
                        description: "Traduire cete expression en Russe",
                        value: "Сколько тебе лет ?\n*Skol'ko tebe let ?*"
                    },
                    {
                        label : 'Où habitez vous ?',
                        description: "Traduire cete expression en Russe",
                        value: 'Где вы живете ?\n*Gde vy zhivete ?*'
                    },
                    {
                        label : 'Enchanté de faire votre connaissance !',
                        description: "Traduire cete expression en Russe",
                        value: 'Рад встрече !\n*Rad vstreche !*'
                    },
                    {
                        label : 'Au revoir !',
                        description: "Traduire cete expression en Russe",
                        value: 'До свидания !\n*Do svidaniya !*' 
                    },
                    {
                        label : 'A demain !',
                        description: "Traduire cete expression en Russe",
                        value: 'Увидимся завтра !\n*Uvidimsya zavtra !*' 
                    },
                    {
                        label : 'Merci',
                        description: "Traduire cete expression en Russe",
                        value: 'Спасибо\n*Spasibo*' 
                    },
                    {
                        label : 'Je vais bien',
                        description: "Traduire cete expression en Russe",
                        value: "Я в порядке\n*YA v poryadke*" 
                    },
                    {
                        label : 'oui',
                        description: "Traduire cete expression en Russe",
                        value: "да\n*da*" 
                    },
                    {
                        label : 'non',
                        description: "Traduire cete expression en Russe",
                        value: "нет\n*net*" 
                    }
                ])
            ); 
        return interaction.reply({ content: 'Choisi une expression pour la traduire en Russe', components: [row] })      
    }    
}