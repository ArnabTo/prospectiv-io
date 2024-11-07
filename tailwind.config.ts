import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			background: '#13111a',
    			foreground: '#ffff',
    			secondary: '#ff4895',
    			textColorOne: '#000000',
    			textColorTwo: '#b7b4c7',
    			buttonColor: '#302c3f',
    			buttonHoverColor: '#1d1a27',
    			card: '#1d1a2746',
    			smallCard: '#302C3F',
    			borderColor: '#ffffff1c',
    			textShadow: {
    				'subtle-glow': '0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)'
    			},
    			gradientColorOne: '#6f86ff',
    			gradientColorTwo: '#fe316f',
    			gradientColorThree: '#d220ff',
    			gradientColorFour: '#6923ff',
    			gradientColorFive: '#1766ff',
    			border: 'hsl(var(--border))'
    		},
    		animation: {
    			'spin-slow': 'spin 15s linear infinite',
    			float: 'floating 3s ease-in-out infinite',
    			floatReverse: 'floatingReverse 3s ease-in-out infinite',
    			'white-glow': 'white-glow 1.5s ease-in-out infinite alternate',
    			marquee: 'marquee var(--duration) infinite linear',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		},
    		keyframes: {
    			floating: {
    				'0%, 100%': {
    					transform: 'translateY(0)'
    				},
    				'50%': {
    					transform: 'translateY(-10px)'
    				}
    			},
    			floatingReverse: {
    				'0%, 100%': {
    					transform: 'translateY(-10px)'
    				},
    				'50%': {
    					transform: 'translateY(0)'
    				}
    			},
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;
