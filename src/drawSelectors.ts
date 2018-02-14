import { store } from './data/store';

declare const chrome: any;

export default function drawSelectors() {
    const { selectors } = store.getState();

    const styles = selectors.reduce(function(script, selector) {
        return script + `
            ${selector} {
                background-color: red;
            }
        `;
    }, '');

    const script = `
        var injectedStyleElement = document.getElementById('__selector-debugger-injected-styles');

        if (injectedStyleElement === null) {
            injectedStyleElement = document.createElement('style');
            injectedStyleElement.id = '__selector-debugger-injected-styles';
        }
        else {
            injectedStyleElement.parentNode.removeChild(injectedStyleElement);
        }

        while (injectedStyleElement.firstChild) {
            injectedStyleElement.removeChild(injectedStyleElement.firstChild);
        }

        injectedStyleElement.appendChild(document.createTextNode(\`${styles}\`));

        document.head.appendChild(injectedStyleElement);
    `;

    console.log(selectors);
    console.log(script);

    chrome.tabs.executeScript({
      code: script
    });
}