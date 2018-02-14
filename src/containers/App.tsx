import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SelectorEditor from './../components/Selector';

import { Model, CssSelector } from './../data/store';
import { AddSelectorActionCreator, addSelector } from './../data/actions/addSelector';
import { EditSelectorActionCreator, editSelector } from './../data/actions/editSelector';

// The interface that defines what properties are connected from the Redux store
interface ConnectedState {
    selectors: CssSelector[]
}

// The interface that defines the action creators bound by the connect HOC
interface ConnectedDispatch {
    addSelector: AddSelectorActionCreator,
    editSelector: EditSelectorActionCreator
}

// The interface that defines what properties are passed on the JSX component
interface AppProps {
    //
}

class App extends React.Component<ConnectedState & ConnectedDispatch & AppProps, {}> {
    private handleAddSelector = () => {
        this.props.addSelector();
    }

    private handleEditSelector = (index: number) => (value: string) => {
        this.props.editSelector(index, value);
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

function mapStateToProps(state: Model): ConnectedState {
    return {
        selectors: state.selectors
    };
}

const mapDispatchToProps = {
    addSelector,
    editSelector
};

export default connect(mapStateToProps, mapDispatchToProps)(App);