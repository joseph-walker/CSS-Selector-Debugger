import * as React from 'react';

import { CssSelector } from './../data/appModel';
import { colorIndexToString, generateColorIndex } from './../data/util/generateColorIndex';

import { Trash as TrashIcon } from './icons/Trash';
import { EyeOpen as EyeOpenIcon } from './icons/EyeOpen';

interface SelectorProps {
    whoAmI: number,
    selector: CssSelector,
    onChange: (value: string) => void,
    onDelete: () => void
}

export function SelectorEditor(props: SelectorProps) {
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
                    <a><EyeOpenIcon /></a>
                </li>
                <li>
                    <a onClick={props.onDelete}><TrashIcon /></a>
                </li>
            </ul>
       </section>
    );
}