
chrome.runtime.onInstalled.addListener(() => {

    chrome.alarms.create("dailyQuote", {
        delayInMinutes: 1,
        periodInMinutes: 1440
    });

});

chrome.alarms.onAlarm.addListener(async (alarm) => {

    if(alarm.name === "dailyQuote"){

        const res = await fetch("https://zenquotes.io/api/random");
        const data = await res.json();

        const quote = data[0].q;
        const author = data[0].a;

        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "🌞 Daily Good Thought",
            message: `${quote} - ${author}`
        });

    }

});