<script lang="ts">
	export let data;

	import "@fontsource/inter";
	import "@fontsource/inter/600.css";
	import "@fontsource/fira-mono";
	import "../css/style.css";
	import "../css/markdown.css";
	import "../css/github-code-highlight.css";

	import { browser } from "$app/environment";
	import { beforeNavigate } from "$app/navigation";
	import { isScrolled } from "$lib/store";

	import Header from "../components/header.svelte";
	import Footer from "../components/footer.svelte";
	import Drawer from "../components/drawer.svelte";

	let direction = 1;
	const duration = 0;

	const order = [
		"/",
		"/about",
		"/projects",
		"/projects/[slug]",
		"/posts",
		"/posts/[slug]",
		"/contact",
	];

	beforeNavigate(({ to, from }) => {
		if (!to || !to.route.id) return;
		if (!from || !from.route.id) return;
		if (to.route.id === from.route.id) return;
		const tidx = order.indexOf(to.route.id);
		const fidx = order.indexOf(from.route.id);
		direction = tidx < fidx ? -1 : 1;
	});

	function onPageScroll() {
		if (!browser) return;
		const page = document.getElementById("page");
		if (page) {
			isScrolled.update((value) => page.scrollTop > 0);
		}
	}
</script>

<div id="app" class="fixed top-0 left-0 bottom-0 right-0 bg-zinc-800">
	{#key data.pathname}
		<main id="main" class="fixed z-10 top-0 left-0 bottom-0 right-0">
			<div
				id="page"
				on:scroll={onPageScroll}
				class="w-full h-full overflow-y-scroll bg-white flex flex-col"
			>
				<Header />
				<Drawer />
				<div id="slot" class="flex-1">
					<slot />
				</div>
				{#if data.pathname !== "/"}
					<Footer />
				{/if}
			</div>
		</main>
	{/key}
</div>

<style>
	#app {
		perspective: 960px; /* Tailwind doesn't support perspective inline */
	}
</style>
