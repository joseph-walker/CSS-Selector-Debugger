import * as React from 'react';

import { CssSelector } from './../data/Model';
import { addSelector$ } from './../data/actions/addSelector';
import { editSelector$ } from './../data/actions/editSelector';

import SelectorEditor from './../components/Selector';

// The interface that defines what properties are passed on the JSX component
interface AppProps {
    selectors: CssSelector[]
}

class App extends React.Component<AppProps, {}> {
    private handleAddSelector = () => {
        addSelector$.next();
    }

    private handleEditSelector = (index: number) => (value: string) => {
        editSelector$.next({
            whoAmI: index,
            value
        });
    }

    public render() {
        const selectors = this.props.selectors.map((selector, index) => (
            <SelectorEditor
                whoAmI={index}
                selector={selector}
                onChange={this.handleEditSelector(index)} />
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
                        <button className="button" onClick={this.handleAddSelector}>+ Add Selector</button>
                    </nav>
                </main>
            </div>
        );
    }
}

export default App;