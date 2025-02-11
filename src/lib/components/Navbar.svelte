<script lang="ts">
	import { TestTubeDiagonal, FlaskConical, Book, Sun, Moon, Menu, Clock} from 'lucide-svelte';
	import { browser } from '$app/environment';

	export let theme: 'shimmer' | 'synthwave';

	const menuItems = [
		{
			href: '/ordinary',
			icon: FlaskConical,
			text: 'Ordinary Routine Builder'
		},
		{
			href: '/ordinary/scheduler',
			icon: Clock,
			text: 'Ordinary Routine Generator'
		},
		{
			href: '/blog',
			icon: Book,
			text: 'Blog'
		}
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
			<button class="btn btn-ghost">
				<Menu class="h-5 w-5" />
			</button>
			<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
