import * as React from 'react';

import { CssSelector } from './../data/Model';
import { addSelector$ } from './../data/actions/addSelector';
import { editSelector$ } from './../data/actions/editSelector';
import { deleteSelector$ } from './../data/actions/deleteSelector';

import SelectorEditor from './../components/Selector';

// The interface that defines what properties are passed on the JSX component
interface AppProps {
    selectors: CssSelector[]
}

const handleAddSelector = () => {
    addSelector$.next();
}

const handleEditSelector = (index: number) => (value: string) => {
    editSelector$.next({
        whoAmI: index,
        value
    });
}

const handleDeleteSelector = (index: number) => () => {
    deleteSelector$.next({
        whoAmI: index
    });
}

function App(props: AppProps) {
    const selectors = props.selectors.map((selector, index) => (
        <SelectorEditor
            whoAmI={index}
            selector={selector}
            onDelete={handleDeleteSelector(index)}
            onChange={handleEditSelector(index)} />
    ));

    return (
        <div>
            <header>
                <h1 className="app-title">CSS Selector Helper</h1>
                <button className="button">Enabled</button>
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