const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

// Upgrade all members with the base role to the upgrade role

module.exports = {
    data: new SlashCommandBuilder()
        .setName('upgrade_role')
        .setDescription('Upgrade all members with the base role to the upgrade role')
        .addRoleOption(option =>
            option.setName('base')
                .setDescription('The role to upgrade')
                .setRequired(true))
        .addRoleOption(option =>
            option.setName('upgrade')
                .setDescription('The role to upgrade to')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        await upgradeRole(interaction);
    },
};

async function upgradeRole(interaction) {
    await interaction.deferReply();
    const guild = interaction.guild;
    const roleManagerCache = guild.roles.cache;

    console.log('upgradeRole: base role id: ' + interaction.options.getRole('base').id);
    console.log('upgradeRole: upgrade role id: ' + interaction.options.getRole('upgrade').id);

    await interaction.editReply('Debug was sucessful');
}