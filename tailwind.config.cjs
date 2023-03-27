/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            display: ['Ubuntu', 'monospace'],
        },
        extend: {
            backgroundImage: {
                sidebarDesktop:
                    "url('./src/multi-step-form/assets/images/bg-sidebar-desktop.svg')",
                sidebarMobile:
                    "url('./src/multi-step-form/assets/images/bg-sidebar-mobile.svg')",
            },
        },
    },
    plugins: [],
}
