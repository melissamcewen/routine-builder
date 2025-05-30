import { describe, it, expect } from 'vitest';
import { load } from '../+page';

describe('Scheduler Results Load Function', () => {
	it('should handle empty products parameter', async () => {
		const url = new URL('http://localhost/ordinary/scheduler/results');
		const result = await load({ url } as any);
		expect(result.selectedProducts).toEqual([]);
	});

	it('should handle invalid product IDs', async () => {
		const url = new URL('http://localhost/ordinary/scheduler/results?products=invalid-id');
		const result = await load({ url } as any);
		expect(result.selectedProducts).toEqual([]);
	});

	it('should handle valid product IDs', async () => {
		const url = new URL(
			'http://localhost/ordinary/scheduler/results?products=glycolic-acid-7-exfoliating-toner,niacinamide-10-zinc-1'
		);
		const result = await load({ url } as any);
		expect(result.selectedProducts).toEqual([
			'glycolic-acid-7-exfoliating-toner',
			'niacinamide-10-zinc-1'
		]);
	});

	it('should generate proper meta tags', async () => {
		const url = new URL(
			'http://localhost/ordinary/scheduler/results?products=glycolic-acid-7-exfoliating-toner'
		);
		const result = await load({ url } as any);
		expect(result.pageMetaTags).toBeDefined();
		expect(result.pageMetaTags.title).toBe('Generated Routines - The Ordinary Routine Scheduler');
		expect(result.pageMetaTags.description).toContain('Generated skincare routines incorporating');
	});
});
