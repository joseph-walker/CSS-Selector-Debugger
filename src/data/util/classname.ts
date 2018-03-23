import { compose, join, keys, reject, equals } from 'ramda';

/**
 * Given some object { className: boolean, ... }, convert it to a string 'className ...'
 * provided each className is true
 *
 * @param dict Object The class definition object
 * @return string The CSS-style class name
 */
export const classname = compose(
    join(' '),
    keys,
    reject(equals(false))
);