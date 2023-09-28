module.exports = {
    name: "guildMemberAdd",
    nick: "memberJoin",
    /**
     * 
     * @param {import("discord.js").GuildMember} member 
     * @param {import("../../index")} client
     */
    run: async (member, client) => {
        if (!member.user.bot) {
            client.database.addPlayer(member.user)
                .then(console.log)
                .catch(console.error);
        }
    },
};