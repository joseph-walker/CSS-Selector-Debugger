export interface CssSelector {
    selectorString: string
};

export interface Model {
    selectors: CssSelector[]
};

export const emptySelector: CssSelector = {
    selectorString: ''
};

export const emptyModel: Model = {
    selectors: []
};