export interface CssSelector {
    selectorString: string
};

export interface AppConfiguration {
    enabled: boolean
};

export interface Model {
    selectors: CssSelector[],
    appConfiguration: AppConfiguration
};

export const emptySelector: CssSelector = {
    selectorString: ''
};

export const emptyModel: Model = {
    selectors: [],
    appConfiguration: {
        enabled: false
    }
};

export function isValidModel(maybeModel: {}): maybeModel is Model {
    const model = <Model>maybeModel;

    return model.selectors !== undefined
        && model.appConfiguration !== undefined
        && isValidAppConfiguration(model.appConfiguration);
}

export function isValidAppConfiguration(maybeAppConfiguration: {}): maybeAppConfiguration is AppConfiguration {
    const config = <AppConfiguration>maybeAppConfiguration;

    return typeof config.enabled === 'boolean';
}