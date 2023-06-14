import type { InjectionKey } from 'vue';
import type { RouteComponent } from 'vue-router';
import type { pluginOptions } from './lib';
export type Lazy<T> = () => Promise<T>;
export type RawRouteComponent = RouteComponent | Lazy<RouteComponent>;
export declare function isRouteComponent(component: RawRouteComponent): component is RouteComponent;
export declare const linkProvideKey: InjectionKey<pluginOptions>;
