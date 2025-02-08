## Dev plan
Turn the base page (copied from /ordinary/+page.svelte) into the new scheduler tool. In this tool, users can add products to the list of products they want to use. And then click a button and see routines generated that use ALL products.

Like Day 1
Day 2
Night 1

How many routines there are depends on number of products and incompatibilities

- remove day/night toggle and filtering
- remove incompatibility check, and "show incompatibilities"
- the schedule section is now just a list of products selected that they want to use, so you can remove the grouping into prep/treat/seal and ordering stuff
- get rid of save and share button, name your routine that area should instead have a button like "generate routines" that takes you to a new page with the results displayed
- get rid of "Only showing products safe for daytime use" and such

## Scheduler Algorithm

for each product

Fill day first because it's most limited

Iterate over items until you have a routine filled and can't add any more items without conflicts or adding more than 3 serums

Then start a new routine

Keep iterating until you've used ALL products at least once



If all routines are day, you can copy the day routine to the night routine because day routines can be night routine
