<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { Shield, Mail, Clock, Database, Users, Lock } from 'lucide-svelte';

	const pageMetaTags = {
		title: 'Privacy Policy - The Ordinary Advanced Routine Builder',
		description:
			'Privacy policy for The Ordinary Advanced Routine Builder. Learn how we protect your data and privacy when using our skincare routine generator.',
		canonical: 'https://www.myroutinebuilder.com/privacy-policy',
		openGraph: {
			title: 'Privacy Policy - The Ordinary Advanced Routine Builder',
			description:
				'Privacy policy for The Ordinary Advanced Routine Builder. Learn how we protect your data and privacy when using our skincare routine generator.',
			url: 'https://www.myroutinebuilder.com/privacy-policy',
			type: 'website'
		}
	};

	const lastUpdated = '2025-02-02';
</script>

<MetaTags {...pageMetaTags} />

<div class="min-h-screen bg-base-100">
	<div class="container mx-auto px-4 py-8 max-w-4xl">
		<div class="prose prose-lg max-w-none">
			<div class="text-center mb-12">
				<div class="flex items-center justify-center gap-3 mb-4">
					<Shield class="w-8 h-8 text-primary" />
					<h1 class="text-4xl font-bold mb-0">Privacy Policy</h1>
				</div>
				<p class="text-lg text-base-content/70">
					How we protect your privacy when using The Ordinary Advanced Routine Builder
				</p>
				<div class="flex items-center justify-center gap-2 text-sm text-base-content/60 mt-4">
					<Clock class="w-4 h-4" />
					<span>Last updated: {lastUpdated}</span>
				</div>
			</div>

			<div class="card bg-base-200 mb-8">
				<div class="card-body">
					<h2 class="card-title text-xl">
						<Database class="w-5 h-5" />
						Quick Summary
					</h2>
					<ul class="list-disc list-inside space-y-2 text-base-content/80">
						<li>
							<strong>No personal data collection:</strong> We don't require accounts or store personal
							information
						</li>
						<li>
							<strong>Product selection only:</strong> We only process your skincare product choices
							to generate routines
						</li>
						<li>
							<strong>No tracking:</strong> We don't use invasive analytics or tracking cookies
						</li>
						<li>
							<strong>API usage:</strong> Our API may be used by AI assistants to help users build routines
						</li>
						<li><strong>Open source:</strong> Our code is transparent and available for review</li>
					</ul>
				</div>
			</div>

			<section class="mb-8">
				<h2 class="text-2xl font-semibold flex items-center gap-2 mb-4">
					<Users class="w-6 h-6" />
					Information We Collect
				</h2>

				<h3 class="text-xl font-medium mb-3">Product Selection Data</h3>
				<p class="mb-4">When you use our routine builder, we temporarily process:</p>
				<ul class="list-disc list-inside mb-6 space-y-1">
					<li>The Ordinary products you select for routine generation</li>
					<li>Your routine preferences (day/night, skin concerns)</li>
					<li>Generated routine results during your session</li>
				</ul>

				<h3 class="text-xl font-medium mb-3">Technical Information</h3>
				<p class="mb-4">Our servers automatically collect standard technical information:</p>
				<ul class="list-disc list-inside mb-6 space-y-1">
					<li>IP addresses for security and performance monitoring</li>
					<li>Browser type and version for compatibility</li>
					<li>Page visit timestamps for analytics</li>
					<li>Referring websites (how you found us)</li>
				</ul>

				<h3 class="text-xl font-medium mb-3">What We Don't Collect</h3>
				<ul class="list-disc list-inside mb-6 space-y-1">
					<li>Names, email addresses, or contact information</li>
					<li>Account credentials or passwords</li>
					<li>Payment information (our service is free)</li>
					<li>Personal skincare photos or images</li>
					<li>Specific skin conditions or medical information</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-semibold flex items-center gap-2 mb-4">
					<Lock class="w-6 h-6" />
					How We Use Information
				</h2>

				<h3 class="text-xl font-medium mb-3">Routine Generation</h3>
				<p class="mb-4">We use your product selections solely to:</p>
				<ul class="list-disc list-inside mb-6 space-y-1">
					<li>Generate personalized skincare routines</li>
					<li>Apply ingredient compatibility rules</li>
					<li>Provide product usage instructions</li>
					<li>Display routine results in your browser</li>
				</ul>

				<h3 class="text-xl font-medium mb-3">API Services</h3>
				<p class="mb-4">Our API may be used by:</p>
				<ul class="list-disc list-inside mb-6 space-y-1">
					<li>AI assistants (like ChatGPT) to help users build routines</li>
					<li>Third-party applications with user consent</li>
					<li>Developers building skincare-related tools</li>
				</ul>

				<h3 class="text-xl font-medium mb-3">Service Improvement</h3>
				<p class="mb-4">We use aggregated, anonymous data to:</p>
				<ul class="list-disc list-inside mb-6 space-y-1">
					<li>Improve routine generation algorithms</li>
					<li>Monitor website performance and reliability</li>
					<li>Understand popular product combinations</li>
					<li>Fix bugs and technical issues</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-semibold mb-4">Data Storage and Security</h2>

				<h3 class="text-xl font-medium mb-3">Local Storage</h3>
				<p class="mb-4">
					Your routine data is primarily stored locally in your browser and is not transmitted to
					our servers unless you explicitly generate a routine.
				</p>

				<h3 class="text-xl font-medium mb-3">Temporary Processing</h3>
				<p class="mb-4">
					When generating routines, we temporarily process your product selections on our servers
					but do not permanently store this information.
				</p>

				<h3 class="text-xl font-medium mb-3">Security Measures</h3>
				<ul class="list-disc list-inside mb-6 space-y-1">
					<li>HTTPS encryption for all data transmission</li>
					<li>Regular security updates and monitoring</li>
					<li>No permanent storage of personal routine data</li>
					<li>Limited access to server logs and analytics</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-semibold mb-4">Third-Party Services</h2>

				<h3 class="text-xl font-medium mb-3">AI Assistants</h3>
				<p class="mb-4">
					Our API may be accessed by AI assistants (such as ChatGPT) when users request skincare
					routine help. These services operate under their own privacy policies.
				</p>

				<h3 class="text-xl font-medium mb-3">Hosting and Infrastructure</h3>
				<p class="mb-4">
					Our website is hosted on secure cloud infrastructure that complies with industry security
					standards.
				</p>

				<h3 class="text-xl font-medium mb-3">Analytics</h3>
				<p class="mb-4">
					We may use privacy-focused analytics tools to understand website usage patterns without
					tracking individual users.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-semibold mb-4">Your Rights and Choices</h2>

				<h3 class="text-xl font-medium mb-3">Data Control</h3>
				<ul class="list-disc list-inside mb-6 space-y-1">
					<li>Clear your browser data to remove locally stored routine information</li>
					<li>Use private/incognito browsing for additional privacy</li>
					<li>
						Disable JavaScript to prevent routine generation (though this breaks functionality)
					</li>
				</ul>

				<h3 class="text-xl font-medium mb-3">Cookie Management</h3>
				<p class="mb-4">
					We use minimal, essential cookies for website functionality. You can disable cookies in
					your browser settings, though this may affect site performance.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-semibold mb-4">Contact Information</h2>

				<div class="card bg-base-200">
					<div class="card-body">
						<div class="flex items-center gap-2 mb-3">
							<Mail class="w-5 h-5" />
							<h3 class="card-title text-lg">Questions About Privacy?</h3>
						</div>
						<p class="mb-4">
							If you have questions about this privacy policy or our data practices, please contact
							us:
						</p>
						<ul class="space-y-2">
							<li>
								<strong>Website:</strong>
								<a href="https://www.myroutinebuilder.com" class="link link-primary"
									>www.myroutinebuilder.com</a
								>
							</li>
							<li>
								<strong>GitHub:</strong>
								<a href="https://github.com/your-username/routinebuilder" class="link link-primary"
									>View our open source code</a
								>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-semibold mb-4">Changes to This Policy</h2>
				<p class="mb-4">
					We may update this privacy policy occasionally to reflect changes in our practices or
					applicable laws. We will post the updated policy on this page with a new "last updated"
					date.
				</p>
				<p class="mb-4">
					For significant changes that affect how we handle your information, we may provide
					additional notice on our website.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-semibold mb-4">Legal Basis and Compliance</h2>
				<p class="mb-4">Our processing of information is based on:</p>
				<ul class="list-disc list-inside mb-6 space-y-1">
					<li>
						<strong>Legitimate interest:</strong> Providing and improving our skincare routine service
					</li>
					<li><strong>Consent:</strong> When you actively use our routine generator</li>
					<li><strong>Legal compliance:</strong> Meeting security and operational requirements</li>
				</ul>
				<p class="mb-4">
					This service is designed to comply with privacy regulations including GDPR, CCPA, and
					other applicable data protection laws.
				</p>
			</section>

			<div class="alert alert-info">
				<Shield class="w-6 h-6" />
				<div>
					<h3 class="font-bold">Commitment to Privacy</h3>
					<div class="text-sm">
						We built this tool to help you create better skincare routines, not to collect your
						personal data. Our approach prioritizes your privacy while providing useful routine
						recommendations.
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
