<script lang="ts">
	import { TestTubeDiagonal, Sparkles, Share2 } from 'lucide-svelte';
</script>

<div class="hero min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-3xl">
			<h1 class="text-5xl font-bold mb-8">Skincare Routine Builder</h1>
			<div class="flex flex-col gap-8">
				<div class="glass rounded-box p-8">
					<div class="flex items-center justify-center gap-4 mb-4">
						<TestTubeDiagonal size={32} />
						<h2 class="text-3xl font-semibold">Routine Builder</h2>
					</div>
					<p class="mb-6">
						This is a site for random skincare/haircare routine builder tools that I built on a whim while procrastinating about building another site.
						We just have one now, for The Ordinary.
					</p>
					<div class="flex flex-wrap gap-4 justify-center">
						<a href="/ordinary" class="btn btn-primary gap-2">
							<Sparkles size={20} />
							Build Your Routine
						</a>
						<a href="/ordinary/routine" class="btn btn-ghost gap-2">
							<Share2 size={20} />
							View Example
						</a>
					</div>
				</div>

				<div class="glass rounded-box p-8">
					<h2 class="text-2xl font-semibold mb-4">This is just so the home page doesn't look empty</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div class="text-left">
							<h3 class="font-semibold mb-2">Stuff</h3>
							<p>
								Hi! This is a box!
							</p>

						</div>
						<div class="text-left">
							<h3 class="font-semibold mb-2">I love icons!</h3>
							<p>
								Put icons everywhere!
							</p>
						</div>
						<div class="text-left">
							<h3 class="font-semibold mb-2">Day/Night Routines</h3>
							<p>Create separate routines for morning and evening skincare.</p>
						</div>
						<div class="text-left">
							<h3 class="font-semibold mb-2">Easy Sharing</h3>
							<p>Share your routine with others using a simple link.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
