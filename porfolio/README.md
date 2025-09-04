# Guadalupe Cervera - Portfolio

A modern, responsive portfolio website showcasing my work as a frontend developer. Built with React and Vite, featuring a beautiful dark/light theme toggle, interactive project carousel, and smooth animations.

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Project Carousel**: 
  - Navigate with arrow buttons
  - Drag/swipe support for touch and mouse
  - Smooth animations and transitions
- **Animated Background**: Starry sky with twinkling stars
- **Modern UI**: Clean, professional design with hover effects
- **Accessibility**: ARIA labels and keyboard navigation support
- **Performance**: Fast loading with Vite's optimized build

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icons
- **CSS3** - Modern styling with animations
- **ESLint** - Code quality and consistency

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutSection.jsx      # About me section
│   ├── ContactSection.jsx    # Contact form and info
│   ├── HeroSection.jsx       # Landing hero section
│   ├── Navbar.jsx           # Navigation bar
│   ├── ProjectSection.jsx   # Interactive project carousel
│   ├── SkillsSection.jsx    # Skills showcase
│   ├── SkyBackground.jsx    # Animated sky background
│   ├── StarBackground.jsx   # Twinkling stars
│   └── ThemeToggle.jsx      # Dark/light theme switcher
├── hooks/
│   └── use-toast.js         # Toast notification hook
├── lib/
│   └── utils.js             # Utility functions
├── pages/
│   ├── Home.jsx             # Main home page
│   └── NotFound.jsx         # 404 page
├── assets/
│   └── guadalupe-cervera.pdf # Resume download
├── App.jsx                  # Main app component
├── main.jsx                 # App entry point
└── index.css                # Global styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio/porfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Projects

Edit the `projects` array in `src/components/ProjectSection.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    tags: ["React", "TypeScript", "Node.js"],
  },
  // Add more projects...
];
```

### Styling

The project uses CSS custom properties for theming. Main color variables are defined in `src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more variables */
}
```

### Theme Customization

Modify the theme colors in `src/index.css` and update the `ThemeToggle.jsx` component if needed.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 768px
- Desktop: > 768px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email**: [your-email@example.com]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

Built with ❤️ by Guadalupe Cervera