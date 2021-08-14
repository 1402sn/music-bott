module.exports = {
  name: "nightcore",
  description: "Toggles the nightcore filter.",
  category: "filters",
  async execute(bot, interaction) {
    const queue = bot.player.getQueue(interaction.guild.id);

    if (!queue || !queue.playing)
      return bot.say.errorMessage(interaction, "I’m currently not playing in this guild.");

    if (!bot.utils.canModifyQueue(interaction)) return;

    await queue.setFilters({
      nightcore: !queue.getFiltersEnabled().includes("nightcore")
    });

    return bot.say.infoMessage(interaction, `${queue.getFiltersEnabled().includes("nightcore") ? "Applied" : "Removed"} the nightcore filter.`);
  }
};