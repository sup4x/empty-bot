const VkBot = require('node-vk-bot-api');
const { Notifier } = require('./meat/notifier.js')
const {CHAT_ID} = require('./meat/const')

const notifier = new Notifier()

const {
    GROUP_TOKEN,
    BUGTRACE_ID
} = require('./meat/const')
const {Director} = require('./meat/director')
const {rnd} = require('./meat/utils')

const bot = new VkBot({
    token: GROUP_TOKEN,
});

const director = new Director(bot);

function isEvent(ctx) {
    return !!ctx.message.action
}

function isCommand(ctx) {
    return !!ctx.message.text
}

async function panic(e) {
    await bot.execute('messages.send', {
        peer_id: '',
        message: `Произошла ошибка! - ` + e.message,
        random_id: rnd(),
    })
    if(e.message === 'ApiError') {
        await bot.execute('messages.send', {
            peer_id: BUGTRACE_ID,
            message: `Ошибка вк! - ` + e.response.error_msg,
            random_id: rnd(),
        })
    }
}

bot.on(async (ctx) => {
    try {
        if (ctx.message && typeof ctx.message.text === 'string') {
            if (isEvent(ctx)) {
                await director.processEvent(ctx)
            }
            if(isCommand(ctx)) {
                await director.processCommand(ctx)
            }
        }
    } catch (e) {
        console.log(e);
        return panic(e)
    }
})

/*

*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

*/
notifier.addNotificationJob({
    name: 'Citate',
    interval: '10 10 10 * * *',
    // Каждый день в 10 часов 10 минут, но время на сервере хероку может быть другое, поэтому хуй знает
    func: () =>
       // тут любая логика, также может быть отправка сообщений ботом
        bot.execute('messages.send', {
            peer_id: CHAT_ID,
            random_id: rnd(),
            message: 'Example',
        })

})


bot.startPolling((err) => {
    console.log(err)
})



