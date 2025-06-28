// @ts-nocheck
import type { PageLoad } from './$types';

export const load = async ({ url, fetch }: Parameters<PageLoad>[0]) => {
	const name = url.searchParams.get('name');

	if (!name || name.trim() === '') {
		return {
			name: null,
			age: null,
			error: null
		};
	}

	try {
		const response = await fetch(`https://api.agify.io/?name=${encodeURIComponent(name.trim())}`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		return {
			name: data.name,
			age: data.age,
			error: null
		};
	} catch (error) {
		console.error('Error fetching age data:', error);
		return {
			name: name.trim(),
			age: null,
			error: 'Failed to fetch age prediction. Please try again.'
		};
	}
};