const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('infos sur le bot')
        .addStringOption(option =>
            option.setName('choice')
            .setDescription('infos sur le bot')
            .setRequired(true)
            .addChoice('Développeur', "Developpeur : shaw'#0001")
            .addChoice('Language', "Language : Français")
            .addChoice('Language de Programation', "Language de programmation : javascript")
            .addChoice('Editeur', "Editeur utilisé : Visual Studio Code")
            .addChoice('Système', "Système de la machine utilisée : Windows 11")
            .addChoice('Hebergeur', "Hebergeur : Heroku")
            .addChoice('Discord Version', "Version du Discord : Discord.js v13")
            .addChoice('Bot Version', "Version du Bot : 1.1.0")
            .addChoice('Crédits', "Crédits :\n> *Google®*\n> *GoogleTranslate®*\n> *Youtube®*\n> *Discord®*\n> *Heroku®*\n> *Microsoft®*")),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */    
    async execute(interaction) {
        const choice = interaction.options.getString('choice');

        await interaction.reply(choice);
    }    
}