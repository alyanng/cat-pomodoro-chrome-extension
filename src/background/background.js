chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.acction == "pomodoroStart") {
        (async () => {
            // const [tab] = await chrome.tabs.query({
            //    active: true,
            //    lastFocusedWindow: true, 
            // });
            await chrome.tabs.sendMessage(tab.id, {
                action: "pomodoroStart",
            });
        })();
    }
});