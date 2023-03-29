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
                stars: 'url(./src/launch-countdown-timer/images/bg-stars.svg)',
                patternHills:
                    'url(./src/launch-countdown-timer/images/pattern-hills.svg)',
            },

            colors: {
                primary: '#042958',
                secondary: '#bee1ff',
                muted: '#adaeb1',
                third: '#483eff',
                accent: '#7574e8',
                accent2: '#eae8ff',
                lct: {
                    sky: '#1e1e28',
                    hills: '#30243a',
                    counter: {
                        light: '#343650',
                        dark: '#2c2c44',
                        number: '#fa6085',
                    },
                },
                pg: {
                    light: '#24232b',
                    dark: '#18171f',
                    muted: '#4d4c54',
                    primary: '#a4ffaf',
                },
                p: {
                    text: '#2f304',
                    gray: {
                        light: '#eef1fa',
                        dark: '#151a30',
                        muted: '#abaaaf',
                    },
                    color: {
                        red: '#f4726c',
                        blue: '#6ef3f7',
                        purple: '#d981f9',
                    },
                },
            },
            animation: {
                flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            },
            keyframes: {
                flip: {
                    from: {
                        transform: 'rotateX(0deg)',
                        transformOrigin: '50% bottom ',
                    },
                    to: {
                        transform: 'rotateX(180deg)',
                        transformOrigin: '50% bottom ',
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
