// This event worker will listen for state changes from the extension panel,
// as well as load the application state and render it on DOM load of tab change.

import { Model } from './data/appModel';
import { stateFromStorage$ } from './data/storage';
import { drawSelectors } from "./drawSelectors";

function drawSelectorsIfExtensionEnabled(state: Model) {
    if (state.appConfiguration.enabled) {
        drawSelectors(state.selectors);
    }
}

function loadStateAndDrawSelectors() {
    return stateFromStorage$.subscribe(drawSelectorsIfExtensionEnabled);
}

chrome.webNavigation.onDOMContentLoaded.addListener(loadStateAndDrawSelectors);
chrome.tabs.onActivated.addListener(loadStateAndDrawSelectors);
chrome.runtime.onMessage.addListener(drawSelectorsIfExtensionEnabled);