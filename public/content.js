console.log("Content Loaded")
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "read_clipboard") {
            navigator.clipboard.readText()
                .then(text => {
                    console.log(text);
                    sendResponse(text);
                })
                .catch(err => {
                    console.error("Failed to read from clipboard: ", err);
                });
        }
    });