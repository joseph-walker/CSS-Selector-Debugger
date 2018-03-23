export interface CssSelector {
    selectorString: string
};

export interface AppConfiguration {
    version: 1,
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
        version: 1,
        enabled: false
    }
};

export function isValidModel(maybeModel: {}): maybeModel is Model {
    const model = <Model>maybeModel;

    return model !== undefined
        && model.selectors !== undefined
        && isValidAppConfiguration(model.appConfiguration);
}

export function isValidAppConfiguration(maybeAppConfiguration: {}): maybeAppConfiguration is AppConfiguration {
    const config = <AppConfiguration>maybeAppConfiguration;

    return config !== undefined
        && config.version === 1
        && typeof config.enabled === 'boolean';
}