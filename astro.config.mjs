import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'League1 Canada',
			customCss: ['./src/tailwind.css'],
			favicon: 'favicon.ico',
			sidebar: [
				{
					label: 'Getting started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Logging into COMET', link: '/getting-started/logging-in' },
					],
				},
				{
					label: 'Registrations',
					autogenerate: { directory: 'registrations' }
				},
				{
					label: "Match Operations",
					autogenerate: { directory: 'match-operations' }
				},

				{
					label: 'Roles',
					autogenerate: { directory: 'roles' },
				},
			],
		}),
		tailwind({ applyBaseStyles: false })
	],
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks, {
					target: '_blank',
					rel: 'noopener noreferrer'
				}
			]
		]
	}
});
