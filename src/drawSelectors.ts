import { CssSelector, store } from './data/store';

declare const chrome: any;

export default function drawSelectors() {
    const { selectors } = store.getState();

    let styles = ``;

    styles += selectors.reduce(function(script: string, { selectorString }: CssSelector) {
        if (selectorString == '') return script;

        return script + `
            ${selectorString} {
                position: relative;
            }

            ${selectorString}:after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(255, 0, 0, 0.4);
                border: 1px dashed rgba(32, 32, 32, 0.25);
                pointer-events: none;
                padding: 4px;
                margin-left: -4px;
                margin-top: -4px;
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

    chrome.tabs.executeScript({
      code: script
    });
}