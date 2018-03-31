import * as React from 'react';

import { CssSelector } from './../data/appModel';
import { colorIndexToString, generateColorIndex } from './../data/util/generateColorIndex';
import { classname } from './../data/util/className';

import { Trash as TrashIcon } from './icons/Trash';
import { EyeOpen as EyeOpenIcon } from './icons/EyeOpen';
import { EyeClosed as EyeClosedIcon } from './icons/EyeClosed';

interface SelectorProps {
    whoAmI: number,
    selector: CssSelector,
    onChange: (value: string) => void,
    onToggleVisibility: () => void,
    onDelete: () => void
}

export function SelectorEditor(props: SelectorProps) {
    const colorStyle = {
        backgroundColor: colorIndexToString(generateColorIndex(props.whoAmI))
    };

    const inputClass = classname({
        strike: !props.selector.visible
    });

    return (
        <section className="selector-card">
            <i className="color-bar" style={colorStyle}></i>
            <input
                className={inputClass}
                disabled={!props.selector.visible}
                type="text"
                value={props.selector.selectorString}
                onChange={event => props.onChange(event.target.value)} />
            <ul className="actions">
                <li>
                    <a onClick={props.onToggleVisibility}>
                        { props.selector.visible
                            ? <EyeOpenIcon />
                            : <EyeClosedIcon />
                        }
                    </a>
                </li>
                <li>
                    <a onClick={props.onDelete}><TrashIcon /></a>
                </li>
            </ul>
       </section>
    );
}