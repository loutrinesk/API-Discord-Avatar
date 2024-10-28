const {Client} = require('discord.js')

module.exports = class extends Client {
    constructor(options = {
        intents: 53608447
    }) {
        super(options);
    }
}
