module.exports = {
  content: [
    './index.html',  // HTML file to scan for Tailwind CSS classes
    './app.js',      // JavaScript file
    './styles/*.css' // CSS files in the styles folder
  ],
  theme: {
    extend: {
      colors: {
        'anime-red': '#FF4C4C',   // Custom red
        'anime-blue': '#1F75FE',  // Custom blue
        'anime-yellow': '#FFD700' // Custom yellow
      },
    },
  },
  plugins: [],
};

