import type { App } from 'vue';
export interface pluginOptions {
    type?: 'view' | 'hover' | 'none';
    name?: string;
    forcedPull?: boolean;
    timeout?: number;
}
declare const _default: {
    install: (app: App, options?: pluginOptions) => void;
};
export default _default;
