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
    const baseID = interaction.options.getRole('base').id;
    const upgradeID = interaction.options.getRole('upgrade').id;

    // Fetch all members from a guild
    await guild.members.fetch()
        .then(members => console.log(`Fetched ${members.size} members`))
        .catch(console.error);

    const baseRole = guild.roles.cache.get(baseID);
    const upgradeRole = guild.roles.cache.get(upgradeID);

    // Get all members with the base role
    const members = baseRole.members;

    await interaction.editReply(`Upgrading ${members.size} members...`);

    //debug log all members
    console.log('Members with base role:');
    members.forEach(member => {
        member.roles.add(upgradeRole);
        member.roles.remove(baseRole);
        console.log(member.user.username + " has been upgraded");
    });

    await interaction.editReply('Operation complete => ' + members.size + ' members upgraded');
}