import * as React from 'react';

import { CssSelector } from './../data/Model';
import { colorIndexToString, generateColorIndex } from './../data/util/generateColorIndex';

interface SelectorProps {
    whoAmI: number,
    selector: CssSelector,
    onChange: (value: string) => void,
    onDelete: () => void
}

function SelectorEditor(props: SelectorProps) {
    const colorStyle = {
        color: colorIndexToString(generateColorIndex(props.whoAmI))
    };

    return (
        <li className="selector-ux-size-enhancer" key={props.whoAmI}>
            <div className="selector">
                <em>Selector {props.whoAmI + 1}</em>
                <a className="delete" onClick={props.onDelete}><span>&times;</span></a>
                <div className="inputs">
                    <input
                        type="text"
                        value={props.selector.selectorString}
                        onChange={event => props.onChange(event.target.value)} />
                    <div className="color" style={colorStyle}></div>
                </div>
            </div>
        </li>
    );
}

export default SelectorEditor;