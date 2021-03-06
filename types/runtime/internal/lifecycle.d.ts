export declare let current_component: any;
export declare function set_current_component(component: any): void;
export declare function get_current_component(): any;
export declare function beforeUpdate(fn: any): void;
export declare function onMount(fn: any): void;
export declare function afterUpdate(fn: any): void;
export declare function onDestroy(fn: any): void;
export declare function createEventDispatcher(): (type: string, detail?: any) => void;
export declare function setContext(key: any, context: any): void;
export declare function getContext(key: any): any;
export declare function bubble(component: any, event: any): void;
