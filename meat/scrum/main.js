const {Scrum} = require('./base')
const {
    JOKE_R, JOKE_RR,
} = require('../regex')

const COMMANDS = {
    joke: {
        test: JOKE_R,
        retrieve: JOKE_RR
    },
};

const EVENTS = {
    'eventExample': [
        'nameOfMethod'
    ]
}

class Main extends Scrum {
    commands;

    constructor(props) {
        super(props);
        this.prepareCommands(COMMANDS)
        this.prepareEvents(EVENTS)
    }

    async nameOfMethod(ctx) {
    }

    async joke(ctx, {tst}) {
        await ctx.reply(`... ${tst}`)
    }
}

module.exports = {
    Main
}