<script lang="ts">
	import { TestTubeDiagonal, FlaskConical, Book, Sun, Moon, Menu, Clock } from 'lucide-svelte';
	import { browser } from '$app/environment';

	export let theme: 'shimmer' | 'synthwave';

	const menuItems = [
		{
			href: '/blog',
			icon: Book,
			text: 'Blog'
		}
	];

	const dropdownItems = [
		{
			href: '/ordinary/scheduler',
			text: 'Get routine from a list of products',
			icon: Clock
		},
		{ href: '/ordinary', text: 'Build a routine from scratch', icon: TestTubeDiagonal },
		{ href: '/ingredients', text: 'Ingredients Dictionary', icon: FlaskConical }
	];
</script>

<nav class="navbar bg-base-100/50 backdrop-blur-sm fixed top-0 z-50">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost normal-case md:text-xl text-l gap-2">
			<TestTubeDiagonal size={24} />
			My Routine Builder
		</a>
	</div>

	<div class="navbar-end">
		<div class="dropdown dropdown-end lg:hidden">
			<label tabindex="0" class="btn btn-ghost">
				<Menu class="h-5 w-5" />
			</label>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<span class="gap-2">
						<FlaskConical size={20} />
						The Ordinary
					</span>
					<ul class="p-2">
						{#each dropdownItems as item}
							<li>
								<a href={item.href} class="gap-2">
									<svelte:component this={item.icon} size={20} />
									{item.text}
								</a>
							</li>
						{/each}
					</ul>
				</li>
				{#each menuItems as item}
					<li>
						<a href={item.href} class="gap-2">
							<svelte:component this={item.icon} size={20} />
							{item.text}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<ul class="menu menu-horizontal px-1 hidden lg:flex">
			<li>
				<details>
					<summary class="gap-2">
						<FlaskConical size={20} />
						The Ordinary
					</summary>
					<ul class="p-2 bg-base-100 rounded-t-none w-72">
						{#each dropdownItems as item}
							<li>
								<a href={item.href} class="gap-2">
									<svelte:component this={item.icon} size={20} />
									{item.text}
								</a>
							</li>
						{/each}
					</ul>
				</details>
			</li>
			{#each menuItems as item}
				<li>
					<a href={item.href} class="gap-2">
						<svelte:component this={item.icon} size={20} />
						{item.text}
					</a>
				</li>
			{/each}
		</ul>

		<button class="btn btn-ghost btn-circle" on:click>
			{#if theme === 'shimmer'}
				<Moon size={24} />
			{:else}
				<Sun size={24} />
			{/if}
		</button>
	</div>
</nav>
