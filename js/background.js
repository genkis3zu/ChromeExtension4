chrome.runtime.onMessage.addListener((msg, sender, sendRes) => {
    if (msg.message == 'search_button_clicked') {
        searchOnGoogle(msg.value);
    }
    return true;
});

function searchOnGoogle(value) {
    chrome.search.query({text:value});
}