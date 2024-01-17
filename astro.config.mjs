import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'League1 Ontario',
			customCss: ['./src/tailwind.css'],
			sidebar: [
				{
					label: 'Team Officials',
					autogenerate: { directory: 'team-officials' }
				},
				{
					label: "Referees",
					autogenerate: { directory: 'referees' }
				},
				{
					label: "MDOCs",
					autogenerate: { directory: 'mdocs' }
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		tailwind({ applyBaseStyles: false })
	],
});
