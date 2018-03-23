import * as React from 'react';

import { CssSelector, AppConfiguration } from './../data/appModel';
import { classname } from './../data/util/className';
import { addSelector$ } from './../data/actions/addSelector';
import { editSelector$ } from './../data/actions/editSelector';
import { deleteSelector$ } from './../data/actions/deleteSelector';
import { toggleExtensionEnabled$ } from './../data/actions/toggleExtensionEnabled';

import SelectorEditor from './../components/Selector';

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

function App(props: AppProps) {
    const selectors = props.selectors.map((selector, index) => (
        <SelectorEditor
            whoAmI={index}
            selector={selector}
            onDelete={handleDeleteSelector(index)}
            onChange={handleEditSelector(index)} />
    ));

    const buttonClass = classname({
        'button': true,
        'disabled': !props.configuration.enabled
    });

    return (
        <div>
            <header>
                <h1 className="app-title">CSS Selector Helper</h1>
                <button
                    className={buttonClass}
                    onClick={handleToggleExtensionEnabled}>
                    { props.configuration.enabled ? 'Enabled' : 'Disabled' }
                </button>
            </header>
            <main>
                <ol className="selectors">{selectors}</ol>
                <nav className="controls">
                    <button className="button" onClick={handleAddSelector}>+ Add Selector</button>
                </nav>
            </main>
        </div>
    );
}

export default App;