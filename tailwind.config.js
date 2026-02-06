/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                dark: {
                    900: '#020617', // Slate 950
                    800: '#0f172a', // Slate 900
                    700: '#1e293b', // Slate 800
                },
                primary: {
                    400: '#818cf8', // Indigo 400
                    500: '#6366f1', // Indigo 500
                    600: '#4f46e5', // Indigo 600
                },
                accent: {
                    400: '#38bdf8', // Sky 400
                    500: '#0ea5e9', // Sky 500
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'glass-gradient': 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
            }
        },
    },
    plugins: [],
}
