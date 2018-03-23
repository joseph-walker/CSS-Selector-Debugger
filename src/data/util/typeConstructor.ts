/**
 * Given some value T and some payload P, return a new object that contains
 * all the properties of P and a `type` property T
 *
 * @param type any The `type` parameter to add to the payload
 * @return object A new object with all properties of P and type T
 */
export function typeConstructor<T, P extends object>(type: T) {
    return function(payload: P): P & { type: T } {
        return Object.assign({}, payload, { type });
    }
}