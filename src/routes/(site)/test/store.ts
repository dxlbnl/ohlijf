import { writable } from 'svelte/store';

const resultsStore = writable<string[]>([]);
export const results = {
	subscribe: resultsStore.subscribe,
	set(index: number, result: string) {
		resultsStore.update((results) => {
			results[index - 1] = result;
			return results;
		});
	}
};
