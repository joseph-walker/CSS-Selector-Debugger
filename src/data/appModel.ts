const VERSION: string = '1.1';

export interface CssSelector {
    selectorString: string,
    visible: boolean
};

export interface AppConfiguration {
    version: string,
    enabled: boolean
};

export interface Model {
    selectors: CssSelector[],
    appConfiguration: AppConfiguration
};

export const emptySelector: CssSelector = {
    selectorString: '',
    visible: true
};

export const emptyModel: Model = {
    selectors: [],
    appConfiguration: {
        version: VERSION,
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
        && config.version === VERSION
        && typeof config.enabled === 'boolean';
}