module.exports = {
  name: "pulsator",
  description: "Toggles the pulsator filter.",
  category: "filters",
  async execute(bot, interaction) {
    const queue = bot.player.getQueue(interaction.guild.id);

    if (!queue || !queue.playing)
      return bot.say.errorMessage(interaction, "I’m currently not playing in this guild.");

    if (!bot.utils.canModifyQueue(interaction)) return;

    await queue.setFilters({
      pulsator: !queue.getFiltersEnabled().includes("pulsator")
    });

    return bot.say.infoMessage(interaction, `${queue.getFiltersEnabled().includes("pulsator") ? "Applied" : "Removed"} the pulsator filter.`);
  }
};