const CronJob = require('cron').CronJob;
const famousQuotes = require('./famousQuotes.js');
const { postTweet } = require('./bot.js');

function getQuotes(){
    return famousQuotes.QUOTES[Math.floor(Math.random()*famousQuotes.QUOTES.length)];
}

new CronJob(
    '* * * * *',
    function () {
        postTweet(getQuotes());
    },
    null,
    true,
    'America/Sao_Paulo'
);
