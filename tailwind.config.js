/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: [ "selector" ],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      screens: {
        "2xl+": "1500px",
        "2xl": "1400px",
        "xl": "1200px",
        "lg": "1024px",
        "sm": "575px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "#f2f6fc",
          dark: "#252525"
        },
        foreground: {
          DEFAULT: "#ffffff",
          dark: "#1a202c"
        },
        text: {
          DEFAULT: "#1a202c",
          dark: "#f2f6fc"
        },
        primary: {
          DEFAULT: "#5607dc",
          lighter: "#6f08e6",
          transparent: "rgba(86, 7, 220, 0.1)",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#7f08c5",
          lighter: "#a10ab2",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        funnyRingColor: {
          DEFAULT: "#bfd7fc",
          dark: "#1d2f4f",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "scroll": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(-100%)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll": "scroll 220s linear infinite",
      },
    },
  },
  plugins: [ require( "tailwindcss-animate" ) ],
  corePlugins: {
    overflowWrap: true,
  }
};