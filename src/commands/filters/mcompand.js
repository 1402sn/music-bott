module.exports = {
  name: "mcompand",
  description: "Toggles the mcompand filter.",
  category: "filters",
  async execute(bot, interaction) {
    const queue = bot.player.getQueue(interaction.guild.id);

    if (!queue || !queue.playing)
      return bot.say.errorMessage(interaction, "I’m currently not playing in this guild.");

    if (!bot.utils.canModifyQueue(interaction)) return;

    await queue.setFilters({
      mcompand: !queue.getFiltersEnabled().includes("mcompand")
    });

    return bot.say.infoMessage(interaction, `${queue.getFiltersEnabled().includes("mcompand") ? "Applied" : "Removed"} the mcompand filter.`);
  }
};