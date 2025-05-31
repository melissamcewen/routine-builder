<script lang="ts">
	import { Bot, Calendar, FlaskConical, Sparkles, ArrowRight, Zap, Search } from 'lucide-svelte';
</script>

<div class="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
	<!-- Hero Section -->
	<div class="hero min-h-[60vh]">
		<div class="hero-content text-center">
			<div class="max-w-2xl">
				<div class="flex items-center justify-center gap-3 mb-6">
					<FlaskConical class="w-12 h-12 text-primary" />
					<h1 class="text-5xl font-bold">The Ordinary Routine Builder</h1>
				</div>
				<p class="text-xl mb-8 text-base-content/80">
					Create perfect skincare routines with The Ordinary products. Choose your preferred method
					below.
				</p>
			</div>
		</div>
	</div>

	<!-- Options Section -->
	<div class="container mx-auto px-4 pb-16">
		<div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
			<!-- AI Chat Option -->
			<div
				class="card bg-base-100 shadow-xl border border-primary/20 hover:shadow-2xl transition-all duration-300"
			>
				<div class="card-body text-center">
					<div class="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
						<Bot class="w-8 h-8 text-primary" />
					</div>
					<h2 class="card-title justify-center text-2xl mb-3">Chat with AI</h2>
					<div class="badge badge-primary badge-outline mb-4">Recommended</div>
					<p class="text-base-content/70 mb-6 leading-relaxed">
						Talk to our AI assistant about your skin concerns and products. Get personalized routine
						recommendations through natural conversation.
					</p>

					<div class="space-y-2 mb-6 text-sm">
						<div class="flex items-center gap-2 text-base-content/60">
							<Sparkles class="w-4 h-4" />
							<span>Natural language interaction</span>
						</div>
						<div class="flex items-center gap-2 text-base-content/60">
							<Zap class="w-4 h-4" />
							<span>Personalized recommendations</span>
						</div>
						<div class="flex items-center gap-2 text-base-content/60">
							<ArrowRight class="w-4 h-4" />
							<span>Instant routine generation</span>
						</div>
					</div>

					<div class="card-actions justify-center">
						<a
							href="https://chatgpt.com/g/g-683b0fec1d4881919040ad52907e97e4-my-routine-builder"
							class="btn btn-primary btn-wide gap-2"
							target="_blank"
							rel="noopener"
						>
							<Bot class="w-5 h-5" />
							Start Chat
						</a>
					</div>
				</div>
			</div>

			<!-- Scheduler Option -->
			<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
				<div class="card-body text-center">
					<div class="mx-auto mb-4 p-4 bg-secondary/10 rounded-full w-fit">
						<Calendar class="w-8 h-8 text-secondary" />
					</div>
					<h2 class="card-title justify-center text-2xl mb-3">Product List Scheduler</h2>
					<div class="badge badge-secondary badge-outline mb-4">Quick & Easy</div>
					<p class="text-base-content/70 mb-6 leading-relaxed">
						Have a list of products you own? Input them visually and get organized routines with
						automatic conflict resolution.
					</p>

					<div class="space-y-2 mb-6 text-sm">
						<div class="flex items-center gap-2 text-base-content/60">
							<Calendar class="w-4 h-4" />
							<span>Visual product selection</span>
						</div>
						<div class="flex items-center gap-2 text-base-content/60">
							<Zap class="w-4 h-4" />
							<span>Automatic conflict detection</span>
						</div>
						<div class="flex items-center gap-2 text-base-content/60">
							<ArrowRight class="w-4 h-4" />
							<span>Multiple routine options</span>
						</div>
					</div>

					<div class="card-actions justify-center">
						<a href="/ordinary/scheduler" class="btn btn-secondary btn-wide gap-2">
							<Calendar class="w-5 h-5" />
							Use Scheduler
						</a>
					</div>
				</div>
			</div>

			<!-- Manual Builder Option -->
			<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
				<div class="card-body text-center">
					<div class="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
						<FlaskConical class="w-8 h-8 text-accent" />
					</div>
					<h2 class="card-title justify-center text-2xl mb-3">Manual Builder</h2>
					<div class="badge badge-accent badge-outline mb-4">Full Control</div>
					<p class="text-base-content/70 mb-6 leading-relaxed">
						Build routines step-by-step from scratch. Search products, understand compatibility, and
						create custom routines manually.
					</p>

					<div class="space-y-2 mb-6 text-sm">
						<div class="flex items-center gap-2 text-base-content/60">
							<Search class="w-4 h-4" />
							<span>Product search & discovery</span>
						</div>
						<div class="flex items-center gap-2 text-base-content/60">
							<FlaskConical class="w-4 h-4" />
							<span>Step-by-step building</span>
						</div>
						<div class="flex items-center gap-2 text-base-content/60">
							<ArrowRight class="w-4 h-4" />
							<span>Full customization control</span>
						</div>
					</div>

					<div class="card-actions justify-center">
						<a href="/ordinary" class="btn btn-accent btn-wide gap-2">
							<FlaskConical class="w-5 h-5" />
							Start Building
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Help Section -->
		<div class="text-center mt-16">
			<div class="max-w-2xl mx-auto">
				<h3 class="text-2xl font-bold mb-4">Not sure which to choose?</h3>
				<div class="grid md:grid-cols-3 gap-4 text-sm">
					<div class="p-4 bg-base-200 rounded-lg">
						<div class="font-semibold text-primary mb-2">New to skincare?</div>
						<p class="text-base-content/70">Start with the <strong>AI Chat</strong> for guidance</p>
					</div>
					<div class="p-4 bg-base-200 rounded-lg">
						<div class="font-semibold text-secondary mb-2">Have products already?</div>
						<p class="text-base-content/70">Use the <strong>Scheduler</strong> to organize them</p>
					</div>
					<div class="p-4 bg-base-200 rounded-lg">
						<div class="font-semibold text-accent mb-2">Want full control?</div>
						<p class="text-base-content/70">Try the <strong>Manual Builder</strong></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
