function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function redirectToHttps(url) {
    const updatedURL = url.replace(/^http:\/\//i, 'https://');
    chrome.tabs.update({url: updatedURL});
    window.close();
}

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    if( url.indexOf("https") == 0 ) {
        removeElementsByClass('notExists');
    } else {
        removeElementsByClass('exists');
        document.getElementById('redirect').addEventListener("click", function() {
            redirectToHttps(url);
        });
    }
});

