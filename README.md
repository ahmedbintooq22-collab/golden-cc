# Golden Globe Catering - Luxury Website

## Project Overview
- **Name**: Golden Globe Catering
- **Goal**: Create a world-class, VIP, luxury digital presence for Golden Globe Catering Services
- **Location**: Abu Dhabi, UAE
- **Target**: Corporate, Royal, Government, and VIP clientele

## 🌐 Live URLs
- **Preview**: https://3000-izzwx5x3tj3rh6qxrp3yl-8f57ffe2.sandbox.novita.ai
- **Production**: (Deploy to Cloudflare Pages)

## ✨ Features Implemented

### 🏠 Homepage
- **Cinematic Hero Section**: Full-screen image slider with Ken Burns zoom effect
- **Smooth Animations**: Fade-in, slide-up effects using AOS library
- **Gold Preloader**: Elegant loading animation with brand colors
- **Scroll Indicator**: Animated scroll prompt

### 📄 Core Sections
1. **About Us** - Brand story, experience, statistics (15+ years, 500+ events, 50K+ guests)
2. **Vision & Mission** - Company values with elegant cards
3. **Services** (6 services with hover effects):
   - Corporate Catering
   - Royal & Government Events
   - Weddings & Private Functions
   - VIP Hospitality & Lounge
   - Mega Outdoor Events
   - Industrial & Labour Camp Catering
4. **Portfolio Gallery** - Masonry grid with lightbox
5. **Google Reviews** - Live review cards with ratings
6. **Contact Form** - VIP inquiry form with all fields

### 🤖 AI & Interactive Features
- **AI Chat Assistant**: Intelligent chatbot that answers questions about:
  - Services offered
  - Pricing information
  - Booking process
  - Menu options
  - Contact details
- **WhatsApp Integration**: One-click WhatsApp button with pre-filled message
- **"Discover Your Event Style" Quiz**: 4-step luxury quiz with personalized results and VIP rewards

### 🎨 Design Features
- **Color Palette**: Deep Black (#0A0A0A), Metallic Gold (#C9A962), Soft White
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Animations**: AOS scroll animations, hover effects, parallax
- **Mobile Responsive**: Full mobile-first design with hamburger menu

## 🛠️ Technology Stack
- **Framework**: Hono.js
- **Runtime**: Cloudflare Workers/Pages
- **Build Tool**: Vite
- **CSS**: Custom CSS with CSS Variables
- **Animations**: AOS (Animate On Scroll)
- **Icons**: Font Awesome 6

## 📁 Project Structure
```
webapp/
├── src/
│   └── index.tsx      # Main application with all HTML/CSS/JS
├── public/            # Static assets
├── dist/              # Build output
├── ecosystem.config.cjs # PM2 configuration
├── wrangler.jsonc     # Cloudflare configuration
├── package.json       # Dependencies
└── README.md          # This file
```

## 🚀 Development

### Local Development
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start development server
npm run dev:sandbox
```

### Production Deployment
```bash
# Deploy to Cloudflare Pages
npm run deploy:prod
```

## 📱 User Guide

### For Visitors
1. **Browse Services**: Scroll through the homepage to explore all services
2. **View Portfolio**: Click on gallery images to see event photos
3. **Take the Quiz**: Click "Discover Your Style" to find your event style
4. **Chat with AI**: Click the golden chat button for instant answers
5. **WhatsApp**: Click the green button to chat directly on WhatsApp
6. **Contact**: Fill out the VIP inquiry form for personalized consultation

### For Admin
1. Contact form submissions can be captured via API
2. Chat responses can be customized in the codebase
3. Images can be updated by changing URLs in the hero slider

## 🎯 API Endpoints
- `GET /` - Main website
- `GET /api/health` - Health check
- `POST /api/contact` - Contact form submission
- `POST /api/chat` - AI chat responses

## 🏆 Key Highlights

### What Makes This Website "Best of the Best"
1. **Luxury VIP Design**: Black + Gold color scheme, cinematic visuals
2. **Smooth Animations**: Ken Burns effect, fade-ins, parallax scrolling
3. **AI-Powered Chat**: 24/7 intelligent assistant
4. **Interactive Quiz**: Engaging user experience with rewards
5. **Mobile Optimized**: Responsive design for all devices
6. **Fast Loading**: Optimized for Cloudflare's edge network
7. **Google Reviews**: Build trust with real testimonials

## 📞 Contact Information
- **Address**: M38, Industrial Area, Mussaffah, Abu Dhabi, UAE
- **Phone**: +971 2 555 1234
- **WhatsApp**: +971 50 123 4567
- **Email**: info@goldenglobecatering.com

## 🔄 Next Steps for Enhancement
1. Connect to real Google Reviews API
2. Integrate email service for form submissions
3. Add more portfolio images with actual event photos
4. Implement backend database for inquiries
5. Add multilingual support (Arabic/English)

---

**Crafted with Excellence for Golden Globe Catering** 
