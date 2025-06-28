<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	let name = data.name || '';
	let debounceTimer: ReturnType<typeof setTimeout>;
	let hasLoaded = false;
	let isLoading = false;

	onMount(() => {
		hasLoaded = true;
		// Initialize name from URL on client side
		name = $page.url.searchParams.get('name') || '';
	});

	function updateURL(newName: string) {
		if (!hasLoaded) return;
		
		clearTimeout(debounceTimer);
		
		if (newName.trim()) {
			isLoading = true;
		}
		
		debounceTimer = setTimeout(() => {
			const url = new URL(window.location.href);
			if (newName.trim()) {
				url.searchParams.set('name', newName.trim());
			} else {
				url.searchParams.delete('name');
			}
			
			goto(url.toString(), {
				replaceState: true,
				invalidateAll: true,
				noScroll: true
			}).then(() => {
				isLoading = false;
			});
		}, 800);
	}

	$: if (hasLoaded) updateURL(name);
</script>

<svelte:head>
	<title>Age Predictor - Discover Your Name's Age</title>
	<meta name="description" content="Enter your name and discover the predicted age using advanced AI algorithms." />
</svelte:head>

<div class="container">
	<h1>Age Predictor</h1>
	
	<p class="subtitle">
		Discover the predicted age for any name using AI. 
		<a href="https://agify.io" target="_blank" rel="noopener noreferrer">Powered by Agify</a>
	</p>

	<div class="input-section">
		<div class="input-group">
			<label for="name-input" class="input-label">Enter a name to predict age</label>
			<input 
				id="name-input"
				class="name-input"
				type="text" 
				bind:value={name} 
				placeholder="Type a name here..."
				autocomplete="given-name"
				spellcheck="false"
			/>
		</div>
	</div>

	{#if isLoading && name.trim()}
		<div class="loading-indicator">
			<div class="spinner"></div>
			<span>Predicting age...</span>
		</div>
	{:else if name && !isLoading}
		<div class="results">
			<p class="greeting">Hello, {name}!</p>
			
			{#if data.error}
				<div class="error-message">
					{data.error}
				</div>
			{:else if data.age !== null}
				<div class="age-result">
					The predicted age for <strong>{data.name}</strong> is <strong>{data.age}</strong> years old.
				</div>
			{:else if data.name}
				<div class="age-result">
					No age prediction available for <strong>{data.name}</strong>.
				</div>
			{/if}
		</div>
	{/if}
</div>