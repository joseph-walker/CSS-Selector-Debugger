import * as React from 'react';

import { CssSelector } from './../data/Model';

interface SelectorProps {
    whoAmI: number,
    selector: CssSelector,
    onChange: (value: string) => void,
    onDelete: () => void
}

class SelectorEditor extends React.Component<SelectorProps, {}> {
    public render() {
        return (
            <li className="selector-ux-size-enhancer">
                <div className="selector">
                    <em>Selector {this.props.whoAmI + 1}</em>
                    <a className="delete" onClick={this.props.onDelete}><span>&times;</span></a>
                    <div className="inputs">
                        <input
                            type="text"
                            value={this.props.selector.selectorString}
                            onChange={event => this.props.onChange(event.target.value)} />
                        <div className="color"></div>
                    </div>
                </div>
            </li>
        );
    }
}

export default SelectorEditor;