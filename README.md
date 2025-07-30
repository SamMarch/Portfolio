# Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## Features

- Modern and responsive design
- Smooth scrolling navigation
- Project showcase with live demos and GitHub links
- Skills section
- Contact form
- Dark theme with accent colors

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Customization

1. **Personal Information**: Update the following files with your information:
   - `src/components/Header.tsx` - Update your name
   - `src/components/Hero.tsx` - Update your name, title, and description
   - `src/components/About.tsx` - Update your bio and skills
   - `src/components/Contact.tsx` - Update your email and social links
   - `src/components/Footer.tsx` - Update your name and social links

2. **Projects**: Edit `src/data/projects.ts` to add your own projects with:
   - Title and description
   - Technologies used
   - GitHub repository URL
   - Live demo URL (optional)
   - Project image (optional)

3. **Styling**: Customize colors and themes in:
   - `src/index.css` - CSS variables for colors and themes
   - `src/App.css` - Component-specific styles

4. **Repository Name**: Update the base path in `vite.config.ts` to match your GitHub repository name:
   ```ts
   base: '/your-repo-name/',
   ```

## Deployment to GitHub Pages

1. Update the `base` in `vite.config.ts` to match your repository name
2. Push your code to GitHub
3. Go to your repository settings
4. Navigate to Pages section
5. Under "Build and deployment", select "GitHub Actions" as the source
6. The workflow will automatically run when you push to the main branch

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Technologies Used

- React 19
- TypeScript
- Vite
- CSS3 with CSS Variables
- GitHub Actions for CI/CD

## License

This project is open source and available under the MIT License.