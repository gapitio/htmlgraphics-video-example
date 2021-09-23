import { writable } from "svelte/store";

export const metricValues = writable<{ name: string; value: string }[]>([]);
