import { get, writable } from "svelte/store";


export const dataStore = writable(null);
export const getStore =  get;