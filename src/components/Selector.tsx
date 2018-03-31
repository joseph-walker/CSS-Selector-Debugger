import * as React from 'react';

import { CssSelector } from './../data/appModel';
import { colorIndexToString, generateColorIndex } from './../data/util/generateColorIndex';

interface SelectorProps {
    whoAmI: number,
    selector: CssSelector,
    onChange: (value: string) => void,
    onDelete: () => void
}

function SelectorEditor(props: SelectorProps) {
    const colorStyle = {
        backgroundColor: colorIndexToString(generateColorIndex(props.whoAmI))
    };

    return (
        <section className="selector-card">
            <i className="color-bar" style={colorStyle}></i>
            <input
                type="text"
                value={props.selector.selectorString}
                onChange={event => props.onChange(event.target.value)} />
            <ul className="actions">
                <li>
                    <a>
                        <img className="icon" src="./icons/eye-open.svg" />
                    </a>
                </li>
                <li>
                    <a onClick={props.onDelete}>
                        <img className="icon" src="./icons/trash.svg" />
                    </a>
                </li>
            </ul>
       </section>
    );
}

export default SelectorEditor;