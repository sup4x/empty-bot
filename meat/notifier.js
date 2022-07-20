const schedule = require('node-schedule');

class Notifier {
    jobs = []

    addNotificationJob({name, interval, func}) {
        this.jobs.push({
            name,
            job: schedule.scheduleJob(interval, func)
        })
    }
}

module.exports = {
    Notifier
}
