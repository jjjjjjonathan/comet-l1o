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
            {
              label: 'Logging into COMET',
              link: '/getting-started/logging-in',
            },
            {
              label: 'Editing your account info',
              link: '/getting-started/editing-account-info',
            },
          ],
        },
        {
          label: 'Registrations',
          items: [
            { label: 'Registering players', link: '/registrations/players' },
            {
              label: 'Registering team officials',
              link: '/registrations/team-officials',
            },
            {
              label: 'Adding players and officials to a competition roster',
              link: '/registrations/add-people-to-competition',
            },
            {
              label: 'Terminating registrations',
              link: '/registrations/terminating-registrations',
            },
          ],
        },
        {
          label: 'Club Operations',
          autogenerate: { directory: 'club-operations' },
        },
        {
          label: 'Match Officials',
          items: [
            {
              label: 'Editing your personal info',
              link: '/match-officials/edit-personal-info',
            },
            {
              label: 'Setting unavailability periods',
              link: '/match-officials/set-unavailability',
            },
          ],
        },
        {
          label: 'Match Operations',
          items: [
            {
              label: 'Setting a match lineup',
              link: '/match-operations/setting-match-lineup',
            },
            {
              label: 'Using the match timer',
              link: '/match-operations/match-timer',
            },
            {
              label: 'Adding goals or own goals',
              link: '/match-operations/adding-goals',
            },
            {
              label: 'Adding yellow or red cards',
              link: '/match-operations/adding-cards',
            },
            {
              label: 'Adding substitutions (without re-entry)',
              link: '/match-operations/adding-subs-no-reentry',
            },
            {
              label: 'Adding substitutions (re-entry allowed)',
              link: '/match-operations/adding-subs-with-reentry',
            },
          ],
        },

        {
          label: 'Roles',
          autogenerate: { directory: 'roles' },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      ],
    ],
  },
});
