const { SelectMenuInteraction } = require(`discord.js`);

/**
 * 
 * @param {SelectMenuInteraction} interaction 
 */
const handleSelectMenu = async interaction => {
    switch (interaction.customId) {
        case 'select-option':
            await interaction.update({ content: `${interaction.values[0]}`, components: []});
            break;
    
        default:
            break;
    }
};

module.exports = handleSelectMenu;