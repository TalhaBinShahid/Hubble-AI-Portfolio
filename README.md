# RyzenAI - Professional AI & Product Development Agency Website

A premium, modern, and fully responsive website for RyzenAI, an AI and product development company. Built with React, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Premium Dark Theme**: Modern dark design with animated gradients and neon accents
- **Smooth Animations**: Powered by Framer Motion for professional transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Hover effects, animated counters, and smooth scrolling
- **Contact Form**: Working contact form with backend API integration
- **SEO Optimized**: Semantic HTML and meta tags

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for blazing fast development
- **TailwindCSS** for utility-first styling
- **Framer Motion** for animations
- **Lucide React** for icons

### Backend
- **Express.js** for API server
- **CORS** enabled for cross-origin requests
- **Body Parser** for handling form data

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend will run on `http://localhost:3001`

## 📂 Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation bar
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── About.tsx           # About section with values
│   │   ├── Services.tsx        # Services cards
│   │   ├── Portfolio.tsx       # Portfolio with project modals
│   │   ├── Process.tsx         # How we work section
│   │   ├── Team.tsx            # Team members
│   │   ├── Testimonials.tsx    # Client testimonials carousel
│   │   ├── Stats.tsx           # Animated statistics
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer with links
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── style.css               # Global styles & Tailwind
├── backend/
│   ├── server.js               # Express API server
│   └── package.json            # Backend dependencies
├── index.html
├── package.json
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
└── README.md
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: { ... },
    },
  },
}
```

### Content
Update component content in `src/components/` files. All text, images, and data are easily customizable.

### Animations
Modify animation timings in `tailwind.config.js` under the `keyframes` and `animation` sections.

## 🌐 Deployment

### Frontend Deployment

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Upload the dist/ folder to Netlify
```

### Backend Deployment

#### Railway/Render
1. Push your code to GitHub
2. Connect your repository to Railway or Render
3. Set the root directory to `/backend`
4. Deploy

#### Environment Variables
Update the contact form API endpoint in `src/components/Contact.tsx` to point to your production backend URL.

## 📧 Contact Form Setup

The contact form currently logs submissions to the console. For production use:

1. **Email Integration**: Add nodemailer or SendGrid
2. **Database**: Store submissions in MongoDB or PostgreSQL
3. **CRM Integration**: Connect to HubSpot, Salesforce, etc.

Example with nodemailer:
```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// In the contact endpoint
await transporter.sendMail({
  from: email,
  to: 'hello@ryzenai.com',
  subject: `New Contact Form: ${name}`,
  text: message,
});
```

## 🎯 Features Breakdown

### Sections
1. **Hero**: Eye-catching landing with animated background and CTAs
2. **About**: Company overview with core values
3. **Services**: Detailed service offerings with icons
4. **Portfolio**: Past projects with modal details
5. **Process**: 6-step workflow visualization
6. **Team**: Team members with social links
7. **Testimonials**: Auto-rotating client testimonials
8. **Stats**: Animated counters for key metrics
9. **Contact**: Working contact form with validation
10. **Footer**: Company info and navigation links

### Key Interactions
- Smooth scroll navigation
- Hover effects on cards and buttons
- Animated counters that trigger on scroll
- Portfolio modal with project details
- Testimonial carousel with manual/auto navigation
- Form validation and submission feedback

## 🐛 Known Issues

None currently. Report issues via GitHub.

## 📄 License

MIT License - feel free to use this for your own projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or support, contact us at hello@ryzenai.com

---

Built with ❤️ by RyzenAI Team

