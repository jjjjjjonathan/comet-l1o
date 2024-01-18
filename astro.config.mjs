import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'League1 Canada',
			customCss: ['./src/tailwind.css'],
			favicon: 'favicon.ico',
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Logging in', link: '/guides/logging-in' },
						{ label: 'Getting Started', link: '/guides/getting-started' },
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
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
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		tailwind({ applyBaseStyles: false })
	],
});
