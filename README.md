# 🚀 Futuristic Developer Portfolio

A stunning, modern portfolio website built with React, featuring smooth animations, glassmorphism effects, and a neon-themed futuristic design.

![Portfolio Preview](./preview.png)

## ✨ Features

- 🎨 **Modern Futuristic Design** - Dark theme with neon accents and glassmorphism effects
- ⚡ **Smooth Animations** - Powered by Framer Motion for premium interactions
- 🎯 **Interactive Components** - 3D tilt effects, magnetic buttons, hover animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🌟 **Creative Sections** - Hero, About, Skills, Projects, Certificates, Achievements, Resume, Contact
- 🎭 **Dynamic Effects** - Particle background, cursor glow, scroll animations
- 🔥 **Project Filtering** - Interactive project showcase with category filters
- 📧 **Contact Form** - Functional contact form with validation
- 🎓 **Certificates Modal** - Beautiful modal for certificate viewing
- ⏱️ **Timeline Components** - Animated education and achievements timelines

## 🛠️ Tech Stack

- **React 18** - Modern React with Hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Icons** - Popular icon library
- **React Tilt** - 3D tilt hover effects
- **Lenis** - Smooth scrolling library

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone or download this repository**

```bash
git clone <your-repo-url>
cd portfolio-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 🎨 Customization

### Personal Information

Update the following in the component files:

1. **Hero Section** (`src/components/Hero.jsx`)
   - Replace "Your Name" with your actual name
   - Update the typing animation titles
   - Customize the introduction text
   - Add your social media links

2. **About Section** (`src/components/About.jsx`)
   - Update your biography
   - Modify education timeline
   - Change stats and metrics
   - Replace profile image

3. **Skills Section** (`src/components/Skills.jsx`)
   - Add/remove your skills
   - Adjust skill levels
   - Update skill categories

4. **Projects Section** (`src/components/Projects.jsx`)
   - Add your actual projects
   - Replace placeholder images
   - Update GitHub and live demo links
   - Modify project descriptions

5. **Certificates Section** (`src/components/Certificates.jsx`)
   - Add your certificates
   - Update certificate images
   - Add credential URLs

6. **Achievements Section** (`src/components/Achievements.jsx`)
   - List your achievements
   - Update years and descriptions

7. **Contact Section** (`src/components/Contact.jsx`)
   - Update email address
   - Add your LinkedIn, GitHub links
   - Update location
   - Configure form submission endpoint

8. **Footer** (`src/components/Footer.jsx`)
   - Update copyright name
   - Add social links

### Colors & Theme

The color scheme is defined in `tailwind.config.js`:

```js
colors: {
  primary: {
    bg: '#050505',        // Main background
    secondary: '#0d0d0d', // Secondary background
  },
  neon: {
    cyan: '#00f5ff',      // Primary neon
    purple: '#9d00ff',    // Secondary neon
    glow: '#00ffd0',      // Accent glow
  },
  text: {
    primary: '#f5f5f5',   // Main text
    muted: '#a1a1a1',     // Muted text
  }
}
```

### Images

Replace placeholder images in the `public` folder:

- Add project screenshots
- Add certificate images
- Add profile/avatar image
- Add resume PDF

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Deploy**

```bash
vercel
```

3. **Or use Vercel Dashboard**
   - Push your code to GitHub
   - Import project on [vercel.com](https://vercel.com)
   - Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. **Build the project**

```bash
npm run build
```

2. **Install Netlify CLI**

```bash
npm install -g netlify-cli
```

3. **Deploy**

```bash
netlify deploy --prod
```

4. **Or use Netlify Dashboard**
   - Drag and drop the `dist` folder to [netlify.com](https://netlify.com)
   - Or connect your GitHub repository

### Build Settings

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** 16 or higher

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── Achievements.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── CursorGlow.jsx
│   │   └── ParticlesBackground.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md
```

## 🎯 Components Overview

- **Navbar** - Sticky navigation with glassmorphism and smooth scroll
- **Hero** - Impressive hero section with typing animation and floating elements
- **About** - Personal info with education timeline and stats
- **Skills** - Animated skill bars organized by categories
- **Projects** - Filterable project showcase with 3D tilt effects
- **Certificates** - Certificate gallery with modal popup
- **Achievements** - Timeline-based achievements display
- **Resume** - Resume preview with download functionality
- **Contact** - Contact form with social links
- **Footer** - Footer with social icons and back-to-top button

## 🎨 Features to Customize

- [ ] Replace "Your Name" with your actual name
- [ ] Update all social media links
- [ ] Add your email address
- [ ] Replace project placeholders with real projects
- [ ] Add actual project images
- [ ] Update skills and proficiency levels
- [ ] Add your certificates
- [ ] Update achievements
- [ ] Add your resume PDF
- [ ] Customize colors in Tailwind config
- [ ] Add Google Analytics (optional)
- [ ] Set up contact form backend

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

## 💡 Tips

1. **Optimize Images** - Compress images before uploading (use TinyPNG or similar)
2. **Update Regularly** - Keep your portfolio updated with latest projects
3. **Test Responsiveness** - Check on different devices and screen sizes
4. **SEO** - Update meta tags in `index.html` for better SEO
5. **Analytics** - Add Google Analytics to track visitors
6. **Performance** - Run Lighthouse audit and optimize based on suggestions

## 📧 Contact

If you have questions or need help, feel free to reach out!

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
