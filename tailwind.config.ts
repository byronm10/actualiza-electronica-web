
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				serif: ['"Instrument Serif"', '"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			backgroundImage: {
				'mesh-hero': "radial-gradient(60rem 40rem at 12% 18%, hsl(191 100% 48% / 0.28), transparent 60%), radial-gradient(50rem 40rem at 88% 30%, hsl(275 92% 60% / 0.28), transparent 60%), radial-gradient(45rem 35rem at 50% 90%, hsl(38 100% 55% / 0.22), transparent 60%), linear-gradient(180deg, #050810 0%, #080B1A 100%)",
				'mesh-soft': "radial-gradient(40rem 30rem at 20% 10%, hsl(191 100% 48% / 0.14), transparent 60%), radial-gradient(35rem 30rem at 90% 60%, hsl(275 92% 60% / 0.14), transparent 60%), linear-gradient(180deg, #080B1A 0%, #101529 100%)",
				'circuit-grid': "linear-gradient(hsl(191 100% 48% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(191 100% 48% / 0.06) 1px, transparent 1px)",
				'noise': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				brand: {
					50: "#EBF5FF",
					100: "#E1EFFE",
					200: "#C3DDFD",
					300: "#A4CAFE",
					400: "#76A9FA",
					500: "#3F83F8",
					600: "#1C64F2",
					700: "#1A56DB",
					800: "#1E429F",
					900: "#233876",
				},
				carbon: {
					50: '#F4F6FB',
					100: '#E5E9F2',
					200: '#C3CBDD',
					300: '#96A2BF',
					400: '#66739A',
					500: '#404D75',
					600: '#2B3457',
					700: '#1B2138',
					800: '#101529',
					900: '#080B1A',
					950: '#03050F',
				},
				electric: {
					50: '#E4FBFF',
					100: '#B8F3FF',
					200: '#8AE9FF',
					300: '#5CDEFF',
					400: '#2ED0FA',
					500: '#0AB6E4',
					600: '#008DBA',
					700: '#006890',
					800: '#004566',
					900: '#00263D',
				},
				signal: {
					50: '#FFF6E5',
					100: '#FFE5B0',
					200: '#FFD37A',
					300: '#FFC245',
					400: '#FFB010',
					500: '#E29200',
					600: '#B57200',
					700: '#805100',
					800: '#513200',
					900: '#241700',
				},
				plasma: {
					50: '#F4E8FF',
					100: '#DFC1FF',
					200: '#C892FF',
					300: '#B060FF',
					400: '#9530FF',
					500: '#7B00F0',
					600: '#5F00BF',
					700: '#45008B',
					800: '#2C0058',
					900: '#150029',
				},
				paper: {
					50: '#FDFCFA',
					100: '#F8F5F0',
					200: '#EFEBE4',
					300: '#E1DBD1',
					400: '#B8B0A3',
					500: '#8E8577',
					600: '#6A6154',
					700: '#4A4239',
					800: '#2D2823',
					900: '#171410',
				},
				ocean: {
					50: '#EDF4FE',
					100: '#D6E5FC',
					200: '#B0CDF9',
					300: '#85B0F4',
					400: '#5A8EEC',
					500: '#3A6EDF',
					600: '#2757C7',
					700: '#1F449E',
					800: '#173379',
					900: '#0F2454',
				},
				coral: {
					50: '#FFF3EF',
					100: '#FFE0D5',
					200: '#FFC1AB',
					300: '#FF9C7C',
					400: '#FF7A59',
					500: '#EE5A3A',
					600: '#C74620',
					700: '#9E3418',
					800: '#7A2612',
					900: '#4A170C',
				},
				sun: {
					50: '#FFF8E6',
					100: '#FFEBB0',
					200: '#FFDA75',
					300: '#FFC846',
					400: '#FFB61B',
					500: '#E39A00',
					600: '#B57900',
					700: '#805500',
					800: '#513400',
					900: '#231700',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0) translateX(0)' },
					'50%': { transform: 'translateY(-24px) translateX(6px)' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 0 0 hsl(191 100% 48% / 0.55)' },
					'50%': { boxShadow: '0 0 0 18px hsl(191 100% 48% / 0)' },
				},
				'gradient-x': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'marquee': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				'shimmer': {
					'0%': { transform: 'translateX(-120%)' },
					'100%': { transform: 'translateX(120%)' },
				},
				'circuit-dash': {
					'to': { strokeDashoffset: '-1000' },
				},
				'blob': {
					'0%, 100%': { transform: 'translate(0,0) scale(1)' },
					'33%': { transform: 'translate(3rem,-2rem) scale(1.08)' },
					'66%': { transform: 'translate(-2rem,2rem) scale(0.94)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-right': 'fade-in-right 0.5s ease-out',
				'fade-in-left': 'fade-in-left 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float-slow 12s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2.4s ease-out infinite',
				'gradient-x': 'gradient-x 8s ease infinite',
				'marquee': 'marquee 32s linear infinite',
				'shimmer': 'shimmer 2.8s ease-in-out infinite',
				'circuit-dash': 'circuit-dash 18s linear infinite',
				'blob': 'blob 18s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
