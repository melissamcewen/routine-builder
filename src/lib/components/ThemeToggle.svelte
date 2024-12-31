<script lang="ts">
  import { onMount } from 'svelte';

  let theme: 'fantasy' | 'night' = 'fantasy';

  onMount(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night' || savedTheme === 'fantasy') {
      theme = savedTheme;
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      theme = prefersDark ? 'night' : 'fantasy';
      document.documentElement.setAttribute('data-theme', theme);
    }
  });

  function toggleTheme() {
    theme = theme === 'fantasy' ? 'night' : 'fantasy';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
</script>

<button
  class="btn btn-circle btn-ghost"
  on:click={toggleTheme}
  aria-label="Toggle theme"
>
  {#if theme === 'fantasy'}
    🌙
  {:else}
    ☀️
  {/if}
</button>
