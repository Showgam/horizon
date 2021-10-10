const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('trad-jap')
        .setDescription('Choisis une expression pour la traduire en Japonnais'),
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
                        description: "Traduire cete expression en Japonnais",
                        value: 'おはようございます。元気ですか ？\n*Ohayōgozaimasu. Genkidesu ka?*'
                    },
                    {
                        label : 'Quel âge avez vous ?',
                        description: "Traduire cete expression en Japonnais",
                        value: '何歳ですか ？\n*Nan-saidesu ka?*'
                    },
                    {
                        label : 'Où habitez vous ?',
                        description: "Traduire cete expression en Japonnais",
                        value: 'どこに住んでいますか ？\n*Doko ni sunde imasu ka?*'
                    },
                    {
                        label : 'Enchanté de faire votre connaissance !',
                        description: "Traduire cete expression en Japonnais",
                        value: 'お会いできて嬉しいです ！\n*Oaidekiteureshīdesu!*'
                    },
                    {
                        label : 'Au revoir !',
                        description: "Traduire cete expression en Japonnais",
                        value: 'さよなら ！\n*Sayonara!*' 
                    },
                    {
                        label : 'A demain !',
                        description: "Traduire cete expression en Japonnais",
                        value: 'また明日ね ！\n*Mata ashita ne!*' 
                    },
                    {
                        label : 'Merci',
                        description: "Traduire cete expression en Japonnais",
                        value: 'ありがとうございました\n*Arigatōgozaimashita*' 
                    },
                    {
                        label : 'Je vais bien',
                        description: "Traduire cete expression en Japonnais",
                        value: "私は元気\n*Watashi wa genki*" 
                    },
                    {
                        label : 'oui',
                        description: "Traduire cete expression en Japonnais",
                        value: "はい\n*Hai*" 
                    },
                    {
                        label : 'non',
                        description: "Traduire cete expression en Japonnais",
                        value: "番号\n*Bangō*" 
                    }
                ])
            ); 
        return interaction.reply({ content: 'Choisi une expression pour la traduire en Japonnais', components: [row] })      
    }    
}