const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription("Affiche la Section d'aide"),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */    
    async execute(interaction) {
        const row = new MessageActionRow()

        const embed = new MessageEmbed()
            .setTitle("__Menu d'aide__")
            .setDescription("• `help` - Affiche ce menu d'aide\n• `ping` - Donne votre délai de réponse\n• `google` - Affiche un bouton qui vous permet d'accéder au service Google®\n• `youtube` - Affiche un bouton qui vous permet d'accéder au service Youtube®\n• `online` - Commande de test d'activité du bot\n• `trad-[langue]` - Donne un menu déroulants d'expressions pour choisir l'expression a traduire - Source Google Translate®\n• `info` - Diverses infos sur le bot\n")
            .setFooter("❗ Attention ce bot est en version Beta 1.1 ❗");

        await interaction.reply({ embeds: [embed]});
    }    
}