import * as React from 'react';

import { CssSelector, AppConfiguration } from './../data/appModel';
import { classname } from './../data/util/className';
import { addSelector$ } from './../data/actions/addSelector';
import { editSelector$ } from './../data/actions/editSelector';
import { deleteSelector$ } from './../data/actions/deleteSelector';
import { toggleExtensionEnabled$ } from './../data/actions/toggleExtensionEnabled';

import { SelectorEditor } from './../components/Selector';

// The interface that defines what properties are passed on the JSX component
interface AppProps {
    selectors: CssSelector[],
    configuration: AppConfiguration
}

const handleAddSelector = () => {
    addSelector$.next();
};

const handleEditSelector = (index: number) => (value: string) => {
    editSelector$.next({
        whoAmI: index,
        value
    });
};

const handleDeleteSelector = (index: number) => () => {
    deleteSelector$.next({
        whoAmI: index
    });
};

const handleToggleExtensionEnabled = () => {
    toggleExtensionEnabled$.next();
};

export function App(props: AppProps) {
    const selectors = props.selectors.map((selector, index) => (
        <SelectorEditor
            whoAmI={index}
            selector={selector}
            onDelete={handleDeleteSelector(index)}
            onChange={handleEditSelector(index)} />
    ));

    const noSelectorsError = (
        <p className="error">Click below to add a selector</p>
    );

    const toggleClass = classname({
        'toggle-switch': true,
        'on': props.configuration.enabled
    });

    return (
        <div className="react-container">
            <header>
                <h1>Selector Helper</h1>
                <div
                    className={toggleClass}
                    onClick={handleToggleExtensionEnabled}>
                    <a className="toggle-slider"></a>
                </div>
            </header>
            <hr />
            <main className="cards">
                { selectors.length
                    ? selectors
                    : noSelectorsError
                }
            </main>
            <footer>
                <ul className="footer-actions">
                    <li><a>Copy Selectors</a></li>
                    <li><a onClick={handleAddSelector}>Add Selector</a></li>
                </ul>
            </footer>
        </div>
    );
}