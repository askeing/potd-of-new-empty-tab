/**
 * Created by Askeing on 2016/5/4.
 */

function update_logo(tab) {
    if (tab.id && tab.url == "chrome://newtab/") {
        chrome.tabs.executeScript(tab.id, { file: "jquery-1.12.2.min.js" });
        chrome.tabs.insertCSS(tab.id, { file: "load_potd.css" });
        chrome.tabs.executeScript(tab.id, { file: "load_potd.js" });
    }
}

chrome.tabs.onCreated.addListener(update_logo);
