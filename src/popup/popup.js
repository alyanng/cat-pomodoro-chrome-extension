console.log("This is a popup!")
document.getElementById("start").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "pomodoroStart" });
});