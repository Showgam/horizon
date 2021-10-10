const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Renvoie le nombre de ping'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */    
    async execute(interaction) {
        await interaction.reply('__**Pong !**__');

        const message = await interaction.fetchReply();

        const embed = new MessageEmbed()
            .setDescription(`Temps de réponse : ${message.createdTimestamp - interaction.createdTimestamp} ms\nPing : ${interaction.client.ws.ping} ms`);

        return interaction.editReply({ embeds: [embed]});
    }    
}