import { CssSelector } from './data/appModel';
import { colorIndexToString, generateColorIndexAlpha } from './data/util/generateColorIndex';

export function drawSelectors(selectors: CssSelector[], enabled: boolean) {
    if (enabled) {
        updatePageStyles(selectors);
    }
    else {
        removeExistingPageStyles();
    }
}

function removeExistingPageStyles(): void {
    const script = `
        var injectedStyleElement = document.getElementById('__selector-debugger-injected-styles');

        if (injectedStyleElement) {
            while (injectedStyleElement.firstChild) {
                injectedStyleElement.removeChild(injectedStyleElement.firstChild);
            }
        }
    `;

    chrome.tabs.executeScript({
      code: script
    });
}

function updatePageStyles(selectors: CssSelector[]): void {
    let styles = ``;

    styles += selectors
        .filter(function(selector) {
            return selector.visible === true;
        })
        .map(function({ selectorString } : CssSelector) {
            return selectorString.replace(/^[ \t]+|[ ,\t]+$/, '');
        })
        .filter(function(selectorString: string) {
            return selectorString !== '';
        })
        .reduce(function(script: string, selectorString: string, index: number) {
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
                    background-color: ${colorIndexToString(generateColorIndexAlpha(index, 0.25))};
                    border: 1px dashed ${colorIndexToString(generateColorIndexAlpha(index, 0.4))};
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