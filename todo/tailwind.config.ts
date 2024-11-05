import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {}
    },

    plugins: [
        typography,
        forms,
        containerQueries,
        aspectRatio,
        function({ addBase, theme }) {
            addBase({
                'h1': { fontSize: theme('fontSize.2xl') },
                'h2': { fontSize: theme('fontSize.xl') },
                'h3': { fontSize: theme('fontSize.lg') },
                'h4': { fontSize: theme('fontSize.base') },
                'h5': { fontSize: theme('fontSize.sm') },
                'h6': { fontSize: theme('fontSize.xs') },
            });
        },
		function({ addVariant }) {
			addVariant('optional', '&:optional')
			addVariant('hocus', ['&:hover', '&:focus'])
			addVariant('inverted-colors', '@media (inverted-colors: inverted)')
		  }
    ]
} satisfies Config;