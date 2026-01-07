import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS
app.use('/api/*', cors())

// Main HTML Page - Golden Globe Catering Luxury Website
const luxuryHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Golden Globe Catering | Luxury Catering for Elite Events</title>
    <meta name="description" content="Premium catering services for corporate, royal, government, and VIP events. Crafting unforgettable culinary experiences in Abu Dhabi and UAE.">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- AOS Animation Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <style>
        :root {
            --gold: #C9A962;
            --gold-light: #E8D5A3;
            --gold-dark: #A68B3D;
            --black: #0A0A0A;
            --black-light: #1A1A1A;
            --charcoal: #2A2A2A;
            --white: #FFFFFF;
            --white-soft: #F5F5F5;
            --gray: #888888;
            --font-serif: 'Playfair Display', 'Cormorant Garamond', serif;
            --font-sans: 'Inter', sans-serif;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        body {
            font-family: var(--font-sans);
            background-color: var(--black);
            color: var(--white);
            overflow-x: hidden;
            line-height: 1.6;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: var(--black);
        }
        ::-webkit-scrollbar-thumb {
            background: var(--gold);
            border-radius: 4px;
        }
        
        /* Preloader */
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--black);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.8s ease, visibility 0.8s ease;
        }
        .preloader.hidden {
            opacity: 0;
            visibility: hidden;
        }
        .preloader-content {
            text-align: center;
        }
        .preloader-logo {
            font-family: var(--font-serif);
            font-size: 2.5rem;
            color: var(--gold);
            margin-bottom: 30px;
            animation: pulse 1.5s ease-in-out infinite;
        }
        .preloader-bar {
            width: 200px;
            height: 2px;
            background: var(--charcoal);
            border-radius: 2px;
            overflow: hidden;
        }
        .preloader-progress {
            height: 100%;
            background: linear-gradient(90deg, var(--gold), var(--gold-light));
            animation: loading 2s ease-out forwards;
        }
        @keyframes loading {
            from { width: 0; }
            to { width: 100%; }
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        
        /* Navigation */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 20px 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            transition: all 0.4s ease;
            background: transparent;
        }
        .navbar.scrolled {
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(10px);
            padding: 15px 60px;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }
        .logo {
            font-family: var(--font-serif);
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--gold);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .logo-icon {
            width: 45px;
            height: 45px;
            border: 2px solid var(--gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }
        .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
        }
        .nav-links a {
            color: var(--white);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 400;
            letter-spacing: 1px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0;
            transition: color 0.3s ease;
        }
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background: var(--gold);
            transition: width 0.3s ease;
        }
        .nav-links a:hover {
            color: var(--gold);
        }
        .nav-links a:hover::after {
            width: 100%;
        }
        .nav-cta {
            background: transparent;
            border: 1px solid var(--gold);
            color: var(--gold);
            padding: 12px 28px;
            font-size: 0.85rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .nav-cta:hover {
            background: var(--gold);
            color: var(--black);
        }
        
        /* Mobile Menu */
        .menu-toggle {
            display: none;
            flex-direction: column;
            gap: 6px;
            cursor: pointer;
            z-index: 1001;
        }
        .menu-toggle span {
            width: 30px;
            height: 2px;
            background: var(--gold);
            transition: all 0.3s ease;
        }
        .mobile-menu {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: var(--black);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
        }
        .mobile-menu.active {
            opacity: 1;
            visibility: visible;
        }
        .mobile-menu-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }
        .mobile-menu a {
            font-family: var(--font-serif);
            font-size: 2rem;
            color: var(--white);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .mobile-menu a:hover {
            color: var(--gold);
        }
        
        /* Hero Section */
        .hero {
            position: relative;
            height: 100vh;
            min-height: 700px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }
        .hero-slider {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .hero-slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 1.5s ease;
            background-size: cover;
            background-position: center;
            transform: scale(1);
            animation: kenBurns 8s ease-in-out infinite;
        }
        .hero-slide.active {
            opacity: 1;
        }
        @keyframes kenBurns {
            0% { transform: scale(1); }
            100% { transform: scale(1.08); }
        }
        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to bottom,
                rgba(10, 10, 10, 0.6) 0%,
                rgba(10, 10, 10, 0.4) 50%,
                rgba(10, 10, 10, 0.8) 100%
            );
            z-index: 1;
        }
        .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            max-width: 900px;
            padding: 0 20px;
        }
        .hero-subtitle {
            font-size: 0.9rem;
            letter-spacing: 6px;
            text-transform: uppercase;
            color: var(--gold);
            margin-bottom: 25px;
            opacity: 0;
            animation: fadeInUp 1s ease 0.5s forwards;
        }
        .hero-title {
            font-family: var(--font-serif);
            font-size: 4.5rem;
            font-weight: 500;
            line-height: 1.1;
            margin-bottom: 25px;
            opacity: 0;
            animation: fadeInUp 1s ease 0.7s forwards;
        }
        .hero-title span {
            color: var(--gold);
        }
        .hero-desc {
            font-size: 1.1rem;
            color: var(--gray);
            margin-bottom: 20px;
            opacity: 0;
            animation: fadeInUp 1s ease 0.9s forwards;
        }
        .hero-categories {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 45px;
            flex-wrap: wrap;
            opacity: 0;
            animation: fadeInUp 1s ease 1s forwards;
        }
        .hero-categories span {
            font-size: 0.85rem;
            letter-spacing: 2px;
            color: var(--white-soft);
            position: relative;
        }
        .hero-categories span:not(:last-child)::after {
            content: '•';
            position: absolute;
            right: -18px;
            color: var(--gold);
        }
        .hero-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            opacity: 0;
            animation: fadeInUp 1s ease 1.2s forwards;
        }
        .btn-primary {
            background: var(--gold);
            color: var(--black);
            padding: 18px 45px;
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
        }
        .btn-primary:hover::before {
            left: 100%;
        }
        .btn-primary:hover {
            background: var(--gold-light);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(201, 169, 98, 0.3);
        }
        .btn-secondary {
            background: transparent;
            color: var(--white);
            padding: 18px 45px;
            font-size: 0.85rem;
            font-weight: 500;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            border: 1px solid var(--white);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .btn-secondary:hover {
            background: var(--white);
            color: var(--black);
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            opacity: 0;
            animation: fadeInUp 1s ease 1.5s forwards;
        }
        .scroll-indicator span {
            font-size: 0.75rem;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: var(--gray);
        }
        .scroll-line {
            width: 1px;
            height: 60px;
            background: linear-gradient(to bottom, var(--gold), transparent);
            animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
            0%, 100% { opacity: 1; height: 60px; }
            50% { opacity: 0.5; height: 40px; }
        }
        
        /* Gold Divider */
        .gold-divider {
            width: 80px;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
            margin: 0 auto;
        }
        
        /* Section Styles */
        section {
            padding: 120px 60px;
        }
        .section-header {
            text-align: center;
            margin-bottom: 80px;
        }
        .section-subtitle {
            font-size: 0.85rem;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: var(--gold);
            margin-bottom: 15px;
        }
        .section-title {
            font-family: var(--font-serif);
            font-size: 3rem;
            font-weight: 500;
            margin-bottom: 25px;
        }
        .section-desc {
            max-width: 600px;
            margin: 0 auto;
            color: var(--gray);
            font-size: 1rem;
        }
        
        /* About Section */
        .about {
            background: var(--black-light);
            position: relative;
            overflow: hidden;
        }
        .about::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 40%;
            height: 100%;
            background: linear-gradient(45deg, transparent, rgba(201, 169, 98, 0.03));
        }
        .about-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 100px;
            align-items: center;
        }
        .about-image {
            position: relative;
        }
        .about-image img {
            width: 100%;
            height: 600px;
            object-fit: cover;
        }
        .about-image-frame {
            position: absolute;
            top: 30px;
            left: 30px;
            right: -30px;
            bottom: -30px;
            border: 1px solid var(--gold);
            z-index: -1;
        }
        .about-content {
            padding-right: 40px;
        }
        .about-content .section-subtitle {
            text-align: left;
        }
        .about-content .section-title {
            text-align: left;
            margin-bottom: 30px;
        }
        .about-content p {
            color: var(--gray);
            margin-bottom: 25px;
            font-size: 1rem;
            line-height: 1.8;
        }
        .about-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 50px;
            padding-top: 50px;
            border-top: 1px solid var(--charcoal);
        }
        .stat-item {
            text-align: center;
        }
        .stat-number {
            font-family: var(--font-serif);
            font-size: 3rem;
            color: var(--gold);
            margin-bottom: 10px;
        }
        .stat-label {
            font-size: 0.85rem;
            color: var(--gray);
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        
        /* Vision & Mission */
        .vision-mission {
            background: var(--black);
            position: relative;
        }
        .vm-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
        }
        .vm-card {
            background: var(--black-light);
            padding: 60px;
            position: relative;
            overflow: hidden;
            border: 1px solid var(--charcoal);
            transition: all 0.4s ease;
        }
        .vm-card:hover {
            border-color: var(--gold);
            transform: translateY(-5px);
        }
        .vm-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, var(--gold), var(--gold-dark));
        }
        .vm-icon {
            width: 70px;
            height: 70px;
            border: 1px solid var(--gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: var(--gold);
            margin-bottom: 30px;
        }
        .vm-card h3 {
            font-family: var(--font-serif);
            font-size: 2rem;
            margin-bottom: 25px;
        }
        .vm-card p {
            color: var(--gray);
            line-height: 1.8;
        }
        
        /* Services Section */
        .services {
            background: var(--black-light);
        }
        .services-grid {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
        .service-card {
            position: relative;
            height: 450px;
            overflow: hidden;
            cursor: pointer;
            group: service;
        }
        .service-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .service-card:hover img {
            transform: scale(1.1);
        }
        .service-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to top,
                rgba(10, 10, 10, 0.95) 0%,
                rgba(10, 10, 10, 0.3) 50%,
                rgba(10, 10, 10, 0.1) 100%
            );
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 40px;
            transition: all 0.4s ease;
        }
        .service-card:hover .service-overlay {
            background: linear-gradient(
                to top,
                rgba(201, 169, 98, 0.9) 0%,
                rgba(10, 10, 10, 0.6) 60%,
                rgba(10, 10, 10, 0.3) 100%
            );
        }
        .service-icon {
            font-size: 2rem;
            color: var(--gold);
            margin-bottom: 20px;
            transition: color 0.4s ease;
        }
        .service-card:hover .service-icon {
            color: var(--black);
        }
        .service-card h3 {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            margin-bottom: 15px;
            transition: color 0.4s ease;
        }
        .service-card:hover h3 {
            color: var(--black);
        }
        .service-card p {
            color: var(--gray);
            font-size: 0.9rem;
            line-height: 1.6;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s ease;
        }
        .service-card:hover p {
            opacity: 1;
            transform: translateY(0);
            color: var(--black);
        }
        
        /* Portfolio / Gallery */
        .portfolio {
            background: var(--black);
        }
        .portfolio-grid {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }
        .portfolio-item {
            position: relative;
            height: 300px;
            overflow: hidden;
            cursor: pointer;
        }
        .portfolio-item.large {
            grid-column: span 2;
            grid-row: span 2;
            height: auto;
        }
        .portfolio-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }
        .portfolio-item:hover img {
            transform: scale(1.1);
        }
        .portfolio-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 10, 10, 0.8);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.4s ease;
        }
        .portfolio-item:hover .portfolio-overlay {
            opacity: 1;
        }
        .portfolio-overlay i {
            font-size: 2rem;
            color: var(--gold);
            margin-bottom: 15px;
        }
        .portfolio-overlay span {
            font-size: 0.85rem;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
        
        /* Experience Quiz */
        .quiz-section {
            background: linear-gradient(135deg, var(--black-light) 0%, var(--black) 100%);
            position: relative;
            overflow: hidden;
        }
        .quiz-section::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(201, 169, 98, 0.05) 0%, transparent 70%);
        }
        .quiz-container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 1;
        }
        .quiz-icon {
            width: 100px;
            height: 100px;
            border: 2px solid var(--gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 40px;
            font-size: 2.5rem;
            color: var(--gold);
        }
        .quiz-title {
            font-family: var(--font-serif);
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        .quiz-desc {
            color: var(--gray);
            margin-bottom: 40px;
            font-size: 1.1rem;
        }
        
        /* Google Reviews */
        .reviews {
            background: var(--black-light);
        }
        .reviews-container {
            max-width: 1400px;
            margin: 0 auto;
        }
        .google-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 60px;
        }
        .google-badge img {
            height: 40px;
        }
        .google-rating {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .google-rating .stars {
            color: #FBBC04;
            font-size: 1.2rem;
        }
        .google-rating .rating-text {
            font-size: 1.5rem;
            font-weight: 600;
        }
        .reviews-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
        .review-card {
            background: var(--black);
            padding: 40px;
            border: 1px solid var(--charcoal);
            transition: all 0.3s ease;
        }
        .review-card:hover {
            border-color: var(--gold);
            transform: translateY(-5px);
        }
        .review-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }
        .review-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--gold);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--font-serif);
            font-size: 1.2rem;
            color: var(--black);
        }
        .review-info h4 {
            font-size: 1rem;
            margin-bottom: 5px;
        }
        .review-info .stars {
            color: #FBBC04;
            font-size: 0.9rem;
        }
        .review-text {
            color: var(--gray);
            font-size: 0.95rem;
            line-height: 1.8;
            font-style: italic;
        }
        .review-date {
            margin-top: 20px;
            font-size: 0.8rem;
            color: var(--gray);
        }
        
        /* Contact Section */
        .contact {
            background: var(--black);
            position: relative;
        }
        .contact-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
        }
        .contact-info h3 {
            font-family: var(--font-serif);
            font-size: 2.5rem;
            margin-bottom: 30px;
        }
        .contact-info p {
            color: var(--gray);
            margin-bottom: 40px;
            line-height: 1.8;
        }
        .contact-details {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }
        .contact-item {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        .contact-item i {
            width: 50px;
            height: 50px;
            border: 1px solid var(--gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gold);
            font-size: 1.1rem;
        }
        .contact-item span {
            color: var(--white-soft);
        }
        .contact-form {
            background: var(--black-light);
            padding: 50px;
            border: 1px solid var(--charcoal);
        }
        .contact-form h4 {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            margin-bottom: 30px;
            text-align: center;
        }
        .form-group {
            margin-bottom: 25px;
        }
        .form-group label {
            display: block;
            font-size: 0.85rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: var(--gray);
            margin-bottom: 10px;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 15px 20px;
            background: var(--black);
            border: 1px solid var(--charcoal);
            color: var(--white);
            font-family: var(--font-sans);
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--gold);
        }
        .form-group textarea {
            height: 120px;
            resize: none;
        }
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .form-submit {
            width: 100%;
            padding: 18px;
            background: var(--gold);
            color: var(--black);
            border: none;
            font-size: 0.9rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .form-submit:hover {
            background: var(--gold-light);
        }
        
        /* Footer */
        .footer {
            background: var(--black-light);
            padding: 80px 60px 30px;
            border-top: 1px solid var(--charcoal);
        }
        .footer-container {
            max-width: 1400px;
            margin: 0 auto;
        }
        .footer-top {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 60px;
            padding-bottom: 60px;
            border-bottom: 1px solid var(--charcoal);
        }
        .footer-brand {
            max-width: 350px;
        }
        .footer-logo {
            font-family: var(--font-serif);
            font-size: 2rem;
            color: var(--gold);
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .footer-brand p {
            color: var(--gray);
            line-height: 1.8;
            margin-bottom: 30px;
        }
        .social-links {
            display: flex;
            gap: 15px;
        }
        .social-links a {
            width: 45px;
            height: 45px;
            border: 1px solid var(--charcoal);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            transition: all 0.3s ease;
        }
        .social-links a:hover {
            border-color: var(--gold);
            color: var(--gold);
        }
        .footer-column h4 {
            font-family: var(--font-serif);
            font-size: 1.2rem;
            margin-bottom: 25px;
            color: var(--white);
        }
        .footer-column ul {
            list-style: none;
        }
        .footer-column ul li {
            margin-bottom: 12px;
        }
        .footer-column ul a {
            color: var(--gray);
            text-decoration: none;
            font-size: 0.95rem;
            transition: color 0.3s ease;
        }
        .footer-column ul a:hover {
            color: var(--gold);
        }
        .footer-bottom {
            padding-top: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .footer-bottom p {
            color: var(--gray);
            font-size: 0.9rem;
        }
        
        /* Chat & WhatsApp Buttons */
        .floating-buttons {
            position: fixed;
            bottom: 30px;
            right: 30px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            z-index: 1000;
        }
        .float-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }
        .whatsapp-btn {
            background: #25D366;
            color: white;
        }
        .whatsapp-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        }
        .chat-btn {
            background: var(--gold);
            color: var(--black);
        }
        .chat-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(201, 169, 98, 0.4);
        }
        
        /* AI Chat Widget */
        .chat-widget {
            position: fixed;
            bottom: 110px;
            right: 30px;
            width: 380px;
            max-height: 550px;
            background: var(--black-light);
            border: 1px solid var(--charcoal);
            border-radius: 15px;
            overflow: hidden;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s ease;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
        .chat-widget.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        .chat-header {
            background: var(--gold);
            color: var(--black);
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .chat-header-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .chat-avatar {
            width: 45px;
            height: 45px;
            background: var(--black);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gold);
        }
        .chat-header h4 {
            font-size: 1rem;
            margin-bottom: 3px;
        }
        .chat-header span {
            font-size: 0.8rem;
            opacity: 0.8;
        }
        .chat-close {
            background: none;
            border: none;
            color: var(--black);
            font-size: 1.2rem;
            cursor: pointer;
        }
        .chat-messages {
            height: 350px;
            overflow-y: auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .chat-message {
            max-width: 85%;
            padding: 12px 18px;
            border-radius: 15px;
            font-size: 0.9rem;
            line-height: 1.5;
        }
        .chat-message.bot {
            background: var(--charcoal);
            color: var(--white);
            align-self: flex-start;
            border-bottom-left-radius: 5px;
        }
        .chat-message.user {
            background: var(--gold);
            color: var(--black);
            align-self: flex-end;
            border-bottom-right-radius: 5px;
        }
        .chat-input {
            padding: 15px 20px;
            border-top: 1px solid var(--charcoal);
            display: flex;
            gap: 10px;
        }
        .chat-input input {
            flex: 1;
            padding: 12px 15px;
            background: var(--black);
            border: 1px solid var(--charcoal);
            border-radius: 25px;
            color: var(--white);
            font-size: 0.9rem;
        }
        .chat-input input:focus {
            outline: none;
            border-color: var(--gold);
        }
        .chat-input button {
            width: 45px;
            height: 45px;
            background: var(--gold);
            border: none;
            border-radius: 50%;
            color: var(--black);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .chat-input button:hover {
            background: var(--gold-light);
        }
        
        /* Quiz Modal */
        .quiz-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 10, 10, 0.95);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
        }
        .quiz-modal.active {
            opacity: 1;
            visibility: visible;
        }
        .quiz-modal-content {
            background: var(--black-light);
            width: 90%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
            border: 1px solid var(--gold);
            padding: 50px;
            position: relative;
        }
        .quiz-modal-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            color: var(--white);
            font-size: 1.5rem;
            cursor: pointer;
        }
        .quiz-progress {
            margin-bottom: 40px;
        }
        .quiz-progress-bar {
            height: 4px;
            background: var(--charcoal);
            border-radius: 2px;
            overflow: hidden;
        }
        .quiz-progress-fill {
            height: 100%;
            background: var(--gold);
            transition: width 0.3s ease;
        }
        .quiz-step {
            display: none;
        }
        .quiz-step.active {
            display: block;
        }
        .quiz-question {
            font-family: var(--font-serif);
            font-size: 1.8rem;
            margin-bottom: 30px;
            text-align: center;
        }
        .quiz-options {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        .quiz-option {
            padding: 20px;
            background: var(--black);
            border: 1px solid var(--charcoal);
            cursor: pointer;
            text-align: center;
            transition: all 0.3s ease;
        }
        .quiz-option:hover,
        .quiz-option.selected {
            border-color: var(--gold);
            background: rgba(201, 169, 98, 0.1);
        }
        .quiz-option i {
            font-size: 2rem;
            color: var(--gold);
            margin-bottom: 10px;
            display: block;
        }
        .quiz-result {
            text-align: center;
        }
        .quiz-result-icon {
            width: 100px;
            height: 100px;
            border: 2px solid var(--gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
            font-size: 2.5rem;
            color: var(--gold);
        }
        .quiz-result h3 {
            font-family: var(--font-serif);
            font-size: 2rem;
            margin-bottom: 15px;
        }
        .quiz-result p {
            color: var(--gray);
            margin-bottom: 30px;
        }
        .quiz-reward {
            background: rgba(201, 169, 98, 0.1);
            border: 1px dashed var(--gold);
            padding: 25px;
            margin-top: 20px;
        }
        .quiz-reward h4 {
            color: var(--gold);
            margin-bottom: 10px;
        }
        
        /* Lightbox */
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 10, 10, 0.95);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        .lightbox.active {
            opacity: 1;
            visibility: visible;
        }
        .lightbox-close {
            position: absolute;
            top: 30px;
            right: 30px;
            background: none;
            border: none;
            color: var(--white);
            font-size: 2rem;
            cursor: pointer;
        }
        .lightbox img {
            max-width: 90%;
            max-height: 90vh;
            object-fit: contain;
        }
        
        /* Responsive */
        @media (max-width: 1200px) {
            .hero-title { font-size: 3.5rem; }
            .services-grid { grid-template-columns: repeat(2, 1fr); }
            .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
            .portfolio-item.large { grid-column: span 2; }
            .footer-top { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        
        @media (max-width: 992px) {
            section { padding: 80px 30px; }
            .navbar { padding: 15px 30px; }
            .nav-links { display: none; }
            .nav-cta { display: none; }
            .menu-toggle { display: flex; }
            .mobile-menu { display: block; }
            .about-container { grid-template-columns: 1fr; gap: 50px; }
            .about-image { order: -1; }
            .about-content { padding-right: 0; }
            .vm-container { grid-template-columns: 1fr; }
            .reviews-grid { grid-template-columns: 1fr; }
            .contact-container { grid-template-columns: 1fr; }
        }
        
        @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem; }
            .hero-subtitle { font-size: 0.75rem; letter-spacing: 4px; }
            .hero-categories { gap: 15px; }
            .hero-buttons { flex-direction: column; }
            .btn-primary, .btn-secondary { width: 100%; text-align: center; }
            .section-title { font-size: 2rem; }
            .services-grid { grid-template-columns: 1fr; }
            .portfolio-grid { grid-template-columns: 1fr; }
            .portfolio-item.large { grid-column: span 1; }
            .about-stats { grid-template-columns: 1fr; }
            .form-row { grid-template-columns: 1fr; }
            .footer-top { grid-template-columns: 1fr; text-align: center; }
            .footer-brand { max-width: 100%; }
            .social-links { justify-content: center; }
            .footer-bottom { flex-direction: column; gap: 15px; text-align: center; }
            .chat-widget { width: calc(100% - 30px); right: 15px; bottom: 100px; }
            .quiz-options { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <!-- Preloader -->
    <div class="preloader">
        <div class="preloader-content">
            <div class="preloader-logo">
                <i class="fas fa-globe"></i> Golden Globe
            </div>
            <div class="preloader-bar">
                <div class="preloader-progress"></div>
            </div>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar">
        <a href="#" class="logo">
            <div class="logo-icon"><i class="fas fa-globe"></i></div>
            Golden Globe
        </a>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="nav-cta" onclick="openQuiz()">Discover Your Style</button>
        <div class="menu-toggle" onclick="toggleMobileMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
    
    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu-content">
            <a href="#home" onclick="toggleMobileMenu()">Home</a>
            <a href="#about" onclick="toggleMobileMenu()">About</a>
            <a href="#services" onclick="toggleMobileMenu()">Services</a>
            <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
            <a href="#reviews" onclick="toggleMobileMenu()">Reviews</a>
            <a href="#contact" onclick="toggleMobileMenu()">Contact</a>
            <button class="btn-primary" onclick="openQuiz(); toggleMobileMenu();">Discover Your Style</button>
        </div>
    </div>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-bg">
            <div class="hero-slider">
                <div class="hero-slide active" style="background-image: url('https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80')"></div>
                <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')"></div>
                <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80')"></div>
                <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80')"></div>
            </div>
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
            <p class="hero-subtitle">Welcome to Excellence</p>
            <h1 class="hero-title">Luxury Catering for <span>Elite Events</span></h1>
            <p class="hero-desc">Crafting Unforgettable Culinary Experiences Since 2008</p>
            <div class="hero-categories">
                <span>CORPORATE</span>
                <span>ROYAL</span>
                <span>GOVERNMENT</span>
                <span>VIP HOSPITALITY</span>
            </div>
            <div class="hero-buttons">
                <a href="#contact" class="btn-primary">Request a Proposal</a>
                <a href="#portfolio" class="btn-secondary">View Our Events</a>
            </div>
        </div>
        <div class="scroll-indicator">
            <span>Scroll</span>
            <div class="scroll-line"></div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <div class="about-container">
            <div class="about-image" data-aos="fade-right">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="Luxury Catering">
                <div class="about-image-frame"></div>
            </div>
            <div class="about-content" data-aos="fade-left">
                <p class="section-subtitle">About Us</p>
                <h2 class="section-title">We Don't Just Cater Events — We Craft Experiences</h2>
                <p>Golden Globe Catering Services is one of the leading catering services in Abu Dhabi, where we open our doors to all with a steadfast commitment to delivering unparalleled hospitality services.</p>
                <p>From our beginnings in Catering Services and Fine Dining Restaurants to offering Catering-related Consultancy services, we have continuously evolved to meet the ever-changing needs of our valued patrons.</p>
                <p>We have successfully expanded our presence across the United Arab Emirates, serving corporate functions, government events, luxury weddings, private VIP gatherings, and large-scale international occasions.</p>
                <div class="about-stats">
                    <div class="stat-item">
                        <div class="stat-number">15+</div>
                        <div class="stat-label">Years Experience</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">500+</div>
                        <div class="stat-label">Events Served</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">50K+</div>
                        <div class="stat-label">Happy Guests</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vision-mission">
        <div class="section-header" data-aos="fade-up">
            <p class="section-subtitle">Our Purpose</p>
            <h2 class="section-title">Vision & Mission</h2>
            <div class="gold-divider"></div>
        </div>
        <div class="vm-container">
            <div class="vm-card" data-aos="fade-up" data-aos-delay="100">
                <div class="vm-icon"><i class="fas fa-eye"></i></div>
                <h3>Our Vision</h3>
                <p>To lead in delivering exceptional hospitality experiences and redefine industry standards. We envision Golden Globe Catering as the first choice for VIP, corporate, and high-profile events, where quality, discretion, and elegance are non-negotiable. We aspire to become the most trusted luxury catering brand, recognized regionally and internationally for excellence, innovation, and elite hospitality standards.</p>
            </div>
            <div class="vm-card" data-aos="fade-up" data-aos-delay="200">
                <div class="vm-icon"><i class="fas fa-bullseye"></i></div>
                <h3>Our Mission</h3>
                <p>Consistently provide top-tier hospitality services, from fine dining to industrial catering and beyond, while prioritizing excellence, innovation, and customer satisfaction. We deliver bespoke catering experiences tailored to each client's unique vision, maintain uncompromising quality in cuisine, service, and presentation, and build long-term relationships based on trust, professionalism, and reliability.</p>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
        <div class="section-header" data-aos="fade-up">
            <p class="section-subtitle">What We Offer</p>
            <h2 class="section-title">Our Premium Services</h2>
            <p class="section-desc">From intimate gatherings to grand celebrations, we deliver excellence at every scale</p>
        </div>
        <div class="services-grid">
            <div class="service-card" data-aos="fade-up" data-aos-delay="100">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" alt="Corporate Catering">
                <div class="service-overlay">
                    <i class="fas fa-building service-icon"></i>
                    <h3>Corporate Catering</h3>
                    <p>Executive lunches, conferences, product launches, and corporate gatherings with impeccable service and presentation.</p>
                </div>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="200">
                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80" alt="Royal & Government Events">
                <div class="service-overlay">
                    <i class="fas fa-crown service-icon"></i>
                    <h3>Royal & Government Events</h3>
                    <p>Prestigious events requiring the highest level of discretion, security, and culinary excellence.</p>
                </div>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="300">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" alt="Weddings & Private Functions">
                <div class="service-overlay">
                    <i class="fas fa-heart service-icon"></i>
                    <h3>Weddings & Private Functions</h3>
                    <p>Creating magical moments with bespoke menus and elegant presentation for your special celebrations.</p>
                </div>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="400">
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" alt="VIP Hospitality">
                <div class="service-overlay">
                    <i class="fas fa-star service-icon"></i>
                    <h3>VIP Hospitality & Lounge</h3>
                    <p>Exclusive dining experiences and premium lounge services for distinguished guests.</p>
                </div>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="500">
                <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80" alt="Mega Outdoor Events">
                <div class="service-overlay">
                    <i class="fas fa-campground service-icon"></i>
                    <h3>Mega Outdoor Events</h3>
                    <p>Luxurious tents, state-of-the-art facilities, and impeccable catering for large-scale outdoor celebrations.</p>
                </div>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="600">
                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" alt="Industrial Catering">
                <div class="service-overlay">
                    <i class="fas fa-utensils service-icon"></i>
                    <h3>Industrial & Labour Camp</h3>
                    <p>Nutritious, quality meals delivered consistently for workforce accommodations and industrial facilities.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio" id="portfolio">
        <div class="section-header" data-aos="fade-up">
            <p class="section-subtitle">Our Work</p>
            <h2 class="section-title">Signature Events</h2>
            <p class="section-desc">A glimpse into our world of culinary excellence and event perfection</p>
        </div>
        <div class="portfolio-grid">
            <div class="portfolio-item large" data-aos="fade-up" onclick="openLightbox(this)">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80" alt="Event 1">
                <div class="portfolio-overlay">
                    <i class="fas fa-expand"></i>
                    <span>View Event</span>
                </div>
            </div>
            <div class="portfolio-item" data-aos="fade-up" data-aos-delay="100" onclick="openLightbox(this)">
                <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80" alt="Event 2">
                <div class="portfolio-overlay">
                    <i class="fas fa-expand"></i>
                    <span>View Event</span>
                </div>
            </div>
            <div class="portfolio-item" data-aos="fade-up" data-aos-delay="200" onclick="openLightbox(this)">
                <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80" alt="Event 3">
                <div class="portfolio-overlay">
                    <i class="fas fa-expand"></i>
                    <span>View Event</span>
                </div>
            </div>
            <div class="portfolio-item" data-aos="fade-up" data-aos-delay="300" onclick="openLightbox(this)">
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" alt="Event 4">
                <div class="portfolio-overlay">
                    <i class="fas fa-expand"></i>
                    <span>View Event</span>
                </div>
            </div>
            <div class="portfolio-item" data-aos="fade-up" data-aos-delay="400" onclick="openLightbox(this)">
                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80" alt="Event 5">
                <div class="portfolio-overlay">
                    <i class="fas fa-expand"></i>
                    <span>View Event</span>
                </div>
            </div>
            <div class="portfolio-item" data-aos="fade-up" data-aos-delay="500" onclick="openLightbox(this)">
                <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80" alt="Event 6">
                <div class="portfolio-overlay">
                    <i class="fas fa-expand"></i>
                    <span>View Event</span>
                </div>
            </div>
            <div class="portfolio-item" data-aos="fade-up" data-aos-delay="600" onclick="openLightbox(this)">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" alt="Event 7">
                <div class="portfolio-overlay">
                    <i class="fas fa-expand"></i>
                    <span>View Event</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Quiz Section -->
    <section class="quiz-section">
        <div class="quiz-container" data-aos="fade-up">
            <div class="quiz-icon">
                <i class="fas fa-magic"></i>
            </div>
            <h2 class="quiz-title">Discover Your Event Style</h2>
            <p class="quiz-desc">Take our 30-second luxury experience quiz and receive a complimentary VIP consultation for your next event</p>
            <button class="btn-primary" onclick="openQuiz()">
                <i class="fas fa-play"></i>&nbsp;&nbsp;Start Your Journey
            </button>
        </div>
    </section>

    <!-- Google Reviews -->
    <section class="reviews" id="reviews">
        <div class="reviews-container">
            <div class="section-header" data-aos="fade-up">
                <p class="section-subtitle">Client Testimonials</p>
                <h2 class="section-title">What Our Clients Say</h2>
            </div>
            <div class="google-badge" data-aos="fade-up">
                <img src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" alt="Google">
                <div class="google-rating">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <span class="rating-text">4.8/5</span>
                </div>
            </div>
            <div class="reviews-grid">
                <div class="review-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="review-header">
                        <div class="review-avatar">AH</div>
                        <div class="review-info">
                            <h4>Ahmed Hassan</h4>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="review-text">"Exceptional service from start to finish. Golden Globe catered our corporate event with absolute professionalism. The food quality and presentation exceeded all expectations."</p>
                    <div class="review-date">2 weeks ago</div>
                </div>
                <div class="review-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="review-header">
                        <div class="review-avatar">SK</div>
                        <div class="review-info">
                            <h4>Sarah Khan</h4>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="review-text">"They made our wedding absolutely magical! Every detail was perfect, and our guests couldn't stop talking about the incredible food. Highly recommend!"</p>
                    <div class="review-date">1 month ago</div>
                </div>
                <div class="review-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="review-header">
                        <div class="review-avatar">MR</div>
                        <div class="review-info">
                            <h4>Mohammed Rahman</h4>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="review-text">"We've used Golden Globe for multiple government events. Their discretion, reliability, and quality are unmatched. A truly premium catering service."</p>
                    <div class="review-date">3 weeks ago</div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 50px;" data-aos="fade-up">
                <a href="https://www.google.com/search?q=golden+globe+catering+abu+dhabi+reviews" target="_blank" class="btn-secondary">
                    <i class="fab fa-google"></i>&nbsp;&nbsp;Read More Reviews
                </a>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="contact-container">
            <div class="contact-info" data-aos="fade-right">
                <p class="section-subtitle">Get in Touch</p>
                <h3>Let's Create Something Extraordinary</h3>
                <p>Whether you're planning an intimate gathering or a grand celebration, our team is ready to bring your vision to life with excellence and elegance.</p>
                <div class="contact-details">
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>M38, Industrial Area, Mussaffah, Abu Dhabi, UAE</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>+971 2 555 1234</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>info@goldenglobecatering.com</span>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-whatsapp"></i>
                        <span>+971 50 123 4567</span>
                    </div>
                </div>
            </div>
            <div class="contact-form" data-aos="fade-left">
                <h4>Private Consultation Request</h4>
                <form id="contactForm" onsubmit="handleFormSubmit(event)">
                    <div class="form-row">
                        <div class="form-group">
                            <label>Your Name</label>
                            <input type="text" name="name" required placeholder="Full Name">
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" required placeholder="Email">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Phone Number</label>
                            <input type="tel" name="phone" placeholder="+971 XX XXX XXXX">
                        </div>
                        <div class="form-group">
                            <label>Event Type</label>
                            <select name="eventType">
                                <option value="">Select Event Type</option>
                                <option value="corporate">Corporate Event</option>
                                <option value="wedding">Wedding</option>
                                <option value="government">Government/Royal</option>
                                <option value="private">Private Function</option>
                                <option value="outdoor">Mega Outdoor Event</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Event Date</label>
                            <input type="date" name="date">
                        </div>
                        <div class="form-group">
                            <label>Number of Guests</label>
                            <input type="number" name="guests" placeholder="Estimated guests">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Your Message</label>
                        <textarea name="message" placeholder="Tell us about your event vision..."></textarea>
                    </div>
                    <button type="submit" class="form-submit">
                        <i class="fas fa-paper-plane"></i>&nbsp;&nbsp;Submit Request
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <i class="fas fa-globe"></i> Golden Globe
                    </div>
                    <p>Luxury catering services delivering exceptional culinary experiences for elite events across the UAE. Excellence in every detail.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Corporate Catering</a></li>
                        <li><a href="#">Royal Events</a></li>
                        <li><a href="#">Weddings</a></li>
                        <li><a href="#">VIP Hospitality</a></li>
                        <li><a href="#">Outdoor Events</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="tel:+97125551234">+971 2 555 1234</a></li>
                        <li><a href="mailto:info@goldenglobecatering.com">info@goldenglobecatering.com</a></li>
                        <li><a href="#">Mussaffah, Abu Dhabi</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Golden Globe Catering. All Rights Reserved.</p>
                <p>Crafted with <i class="fas fa-heart" style="color: var(--gold);"></i> for Excellence</p>
            </div>
        </div>
    </footer>

    <!-- Floating Buttons -->
    <div class="floating-buttons">
        <a href="https://wa.me/971501234567?text=Hello%20Golden%20Globe%20Catering,%20I%20would%20like%20to%20request%20a%20proposal." target="_blank" class="float-btn whatsapp-btn" title="Chat on WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
        <button class="float-btn chat-btn" onclick="toggleChat()" title="Chat with AI Assistant">
            <i class="fas fa-comments"></i>
        </button>
    </div>

    <!-- AI Chat Widget -->
    <div class="chat-widget" id="chatWidget">
        <div class="chat-header">
            <div class="chat-header-info">
                <div class="chat-avatar"><i class="fas fa-robot"></i></div>
                <div>
                    <h4>Golden Globe Assistant</h4>
                    <span>Online • AI Powered</span>
                </div>
            </div>
            <button class="chat-close" onclick="toggleChat()"><i class="fas fa-times"></i></button>
        </div>
        <div class="chat-messages" id="chatMessages">
            <div class="chat-message bot">
                Welcome to Golden Globe Catering! 👋 I'm your AI assistant. How can I help you today?
            </div>
            <div class="chat-message bot">
                You can ask me about:
                <br>• Our services
                <br>• Booking process
                <br>• Menu options
                <br>• Pricing information
                <br>• Event planning
            </div>
        </div>
        <div class="chat-input">
            <input type="text" id="chatInput" placeholder="Type your message..." onkeypress="handleChatKeypress(event)">
            <button onclick="sendMessage()"><i class="fas fa-paper-plane"></i></button>
        </div>
    </div>

    <!-- Quiz Modal -->
    <div class="quiz-modal" id="quizModal">
        <div class="quiz-modal-content">
            <button class="quiz-modal-close" onclick="closeQuiz()"><i class="fas fa-times"></i></button>
            
            <div class="quiz-progress">
                <div class="quiz-progress-bar">
                    <div class="quiz-progress-fill" id="quizProgress" style="width: 25%"></div>
                </div>
            </div>
            
            <!-- Step 1 -->
            <div class="quiz-step active" id="quizStep1">
                <h3 class="quiz-question">What type of event are you planning?</h3>
                <div class="quiz-options">
                    <div class="quiz-option" onclick="selectOption(this, 1, 'corporate')">
                        <i class="fas fa-building"></i>
                        <span>Corporate Event</span>
                    </div>
                    <div class="quiz-option" onclick="selectOption(this, 1, 'wedding')">
                        <i class="fas fa-heart"></i>
                        <span>Wedding</span>
                    </div>
                    <div class="quiz-option" onclick="selectOption(this, 1, 'government')">
                        <i class="fas fa-crown"></i>
                        <span>Government/Royal</span>
                    </div>
                    <div class="quiz-option" onclick="selectOption(this, 1, 'private')">
                        <i class="fas fa-star"></i>
                        <span>Private Party</span>
                    </div>
                </div>
            </div>
            
            <!-- Step 2 -->
            <div class="quiz-step" id="quizStep2">
                <h3 class="quiz-question">How many guests are you expecting?</h3>
                <div class="quiz-options">
                    <div class="quiz-option" onclick="selectOption(this, 2, 'intimate')">
                        <i class="fas fa-user-friends"></i>
                        <span>Under 50</span>
                    </div>
                    <div class="quiz-option" onclick="selectOption(this, 2, 'medium')">
                        <i class="fas fa-users"></i>
                        <span>50 - 150</span>
                    </div>
                    <div class="quiz-option" onclick="selectOption(this, 2, 'large')">
                        <i class="fas fa-people-group"></i>
                        <span>150 - 500</span>
                    </div>
                    <div class="quiz-option" onclick="selectOption(this, 2, 'mega')">
                        <i class="fas fa-city"></i>
                        <span>500+</span>
                    </div>
                </div>
            </div>
            
            <!-- Step 3 -->
            <div class="quiz-step" id="quizStep3">
                <h3 class="quiz-question">What's your preferred style?</h3>
                <div class="quiz-options">
                    <div class="quiz-option" onclick="selectOption(this, 3, 'classic')">
                        <i class="fas fa-gem"></i>
                        <span>Classic Elegant</span>
                    </div>
                    <div class="quiz-option" onclick="selectOption(this, 3, 'modern')">
                        <i class="fas fa-bolt"></i>
                        <span>Modern Chic</span>
                    </div>
                    <div class="quiz-option" onclick="selectOption(this, 3, 'royal')">
                        <i class="fas fa-crown"></i>
                        <span>Royal Luxe</span>
                    </div>
                    <div class="quiz-option" onclick="selectOption(this, 3, 'cultural')">
                        <i class="fas fa-mosque"></i>
                        <span>Cultural Traditional</span>
                    </div>
                </div>
            </div>
            
            <!-- Step 4 -->
            <div class="quiz-step" id="quizStep4">
                <h3 class="quiz-question">What cuisine interests you most?</h3>
                <div class="quiz-options">
                    <div class="quiz-option" onclick="selectOption(this, 4, 'international')">
                        <i class="fas fa-globe"></i>
                        <span>International</span>
                    </div>
                    <div class="quiz-option" onclick="selectOption(this, 4, 'arabic')">
                        <i class="fas fa-moon"></i>
                        <span>Arabic</span>
                    </div>
                    <div class="quiz-option" onclick="selectOption(this, 4, 'asian')">
                        <i class="fas fa-utensils"></i>
                        <span>Asian Fusion</span>
                    </div>
                    <div class="quiz-option" onclick="selectOption(this, 4, 'mixed')">
                        <i class="fas fa-utensil-spoon"></i>
                        <span>Mix of Everything</span>
                    </div>
                </div>
            </div>
            
            <!-- Result -->
            <div class="quiz-step" id="quizResult">
                <div class="quiz-result">
                    <div class="quiz-result-icon">
                        <i class="fas fa-award"></i>
                    </div>
                    <h3 id="resultTitle">Royal Elegant</h3>
                    <p id="resultDesc">Your event style is sophisticated and timeless. You appreciate classic elegance with a touch of grandeur.</p>
                    <button class="btn-primary" onclick="window.location.href='#contact'; closeQuiz();">
                        Book Your Consultation
                    </button>
                    <div class="quiz-reward">
                        <h4><i class="fas fa-gift"></i> Your VIP Reward</h4>
                        <p>Complimentary Menu Consultation + Priority Booking</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Lightbox -->
    <div class="lightbox" id="lightbox" onclick="closeLightbox()">
        <button class="lightbox-close"><i class="fas fa-times"></i></button>
        <img src="" alt="Event" id="lightboxImage">
    </div>

    <!-- AOS Animation Library -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    
    <script>
        // Initialize AOS when ready
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        }
        
        // Preloader - hide after DOM is ready (don't wait for all images)
        // Use both DOMContentLoaded and a fallback timeout
        function hidePreloader() {
            const preloader = document.querySelector('.preloader');
            if (preloader && !preloader.classList.contains('hidden')) {
                preloader.classList.add('hidden');
            }
        }
        
        // Hide preloader after 2.5 seconds max (fallback)
        setTimeout(hidePreloader, 2500);
        
        // Also try to hide when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(hidePreloader, 1500);
            });
        } else {
            // DOM is already ready
            setTimeout(hidePreloader, 1500);
        }
        
        // Also hide on window load as backup
        window.addEventListener('load', () => {
            setTimeout(hidePreloader, 500);
        });
        
        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Hero Slider
        const slides = document.querySelectorAll('.hero-slide');
        let currentSlide = 0;
        
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        setInterval(nextSlide, 6000);
        
        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('active');
        }
        
        // Chat Widget
        function toggleChat() {
            const chatWidget = document.getElementById('chatWidget');
            chatWidget.classList.toggle('active');
        }
        
        // Chat Functionality
        const chatResponses = {
            "services": "We offer a wide range of premium catering services including Corporate Catering, Royal & Government Events, Weddings, VIP Hospitality, Mega Outdoor Events, and Industrial Catering. Would you like details about any specific service?",
            "prices": "Our pricing varies based on the event type, guest count, and menu selection. For a personalized quote, please fill out our contact form or call us at +971 2 555 1234.",
            "booking": "To book our services: 1) Contact us via phone or form, 2) Discuss your requirements, 3) Receive a customized proposal, 4) Confirm your booking. We recommend booking at least 2-4 weeks in advance for larger events.",
            "menu": "We offer diverse menu options including International, Arabic, Asian, and Continental cuisines. Our chefs can also create custom menus tailored to your preferences and dietary requirements.",
            "wedding": "Our wedding packages include menu customization, service staff, elegant presentation, and coordination with your event planner. We create magical culinary experiences for your special day.",
            "corporate": "Corporate catering includes executive lunches, conferences, product launches, and team events. We ensure professional service and quality that reflects your company standards.",
            "contact": "You can reach us at: Phone: +971 2 555 1234, WhatsApp: +971 50 123 4567, Email: info@goldenglobecatering.com, or visit us at M38, Industrial Area, Mussaffah, Abu Dhabi.",
            "default": "Thank you for your interest! For detailed information, please contact our team directly at +971 2 555 1234 or fill out our contact form. Would you like me to help with anything else?"
        };
        
        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (!message) return;
            
            const messagesDiv = document.getElementById('chatMessages');
            
            // Add user message
            messagesDiv.innerHTML += '<div class="chat-message user">' + message + '</div>';
            input.value = '';
            
            // Process and respond
            setTimeout(() => {
                let response = chatResponses.default;
                const lowerMessage = message.toLowerCase();
                
                if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
                    response = chatResponses.services;
                } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
                    response = chatResponses.prices;
                } else if (lowerMessage.includes('book') || lowerMessage.includes('reserve')) {
                    response = chatResponses.booking;
                } else if (lowerMessage.includes('menu') || lowerMessage.includes('food')) {
                    response = chatResponses.menu;
                } else if (lowerMessage.includes('wedding') || lowerMessage.includes('marriage')) {
                    response = chatResponses.wedding;
                } else if (lowerMessage.includes('corporate') || lowerMessage.includes('business') || lowerMessage.includes('company')) {
                    response = chatResponses.corporate;
                } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('address') || lowerMessage.includes('location')) {
                    response = chatResponses.contact;
                } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
                    response = "Hello! Welcome to Golden Globe Catering. How can I assist you today? You can ask about our services, pricing, booking process, or menu options.";
                } else if (lowerMessage.includes('thank')) {
                    response = "You are welcome! Is there anything else I can help you with? Feel free to contact our team for more personalized assistance.";
                }
                
                messagesDiv.innerHTML += '<div class="chat-message bot">' + response + '</div>';
                messagesDiv.scrollTop = messagesDiv.scrollHeight;
            }, 1000);
            
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
        
        function handleChatKeypress(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        }
        
        // Quiz Functionality
        let quizAnswers = {};
        
        function openQuiz() {
            document.getElementById('quizModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeQuiz() {
            document.getElementById('quizModal').classList.remove('active');
            document.body.style.overflow = '';
            // Reset quiz
            document.querySelectorAll('.quiz-step').forEach(step => step.classList.remove('active'));
            document.getElementById('quizStep1').classList.add('active');
            document.getElementById('quizProgress').style.width = '25%';
            document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
            quizAnswers = {};
        }
        
        function selectOption(element, step, value) {
            // Remove selected from siblings
            element.parentElement.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
            element.classList.add('selected');
            
            quizAnswers['step' + step] = value;
            
            setTimeout(() => {
                if (step < 4) {
                    document.getElementById('quizStep' + step).classList.remove('active');
                    document.getElementById('quizStep' + (step + 1)).classList.add('active');
                    document.getElementById('quizProgress').style.width = ((step + 1) * 25) + '%';
                } else {
                    showResult();
                }
            }, 300);
        }
        
        function showResult() {
            document.getElementById('quizStep4').classList.remove('active');
            document.getElementById('quizResult').classList.add('active');
            document.getElementById('quizProgress').style.width = '100%';
            
            // Calculate result based on answers
            const results = {
                'classic': { title: 'Classic Elegant', desc: 'Your event style is sophisticated and timeless. You appreciate classic elegance with a touch of grandeur. Perfect for formal occasions that demand refined taste.' },
                'modern': { title: 'Modern Chic', desc: 'Your style is contemporary and sleek. You love clean lines, innovative presentations, and a fresh approach to luxury. Ideal for trendsetting events.' },
                'royal': { title: 'Royal Luxe', desc: 'You desire nothing but the finest. Opulent, majestic, and extraordinarily elegant - your events are destined to be legendary.' },
                'cultural': { title: 'Cultural Heritage', desc: 'You value tradition and authenticity. Your events celebrate rich cultural heritage with authentic cuisine and meaningful presentations.' }
            };
            
            const style = quizAnswers.step3 || 'classic';
            document.getElementById('resultTitle').textContent = results[style].title;
            document.getElementById('resultDesc').textContent = results[style].desc;
        }
        
        // Lightbox
        function openLightbox(element) {
            const img = element.querySelector('img');
            document.getElementById('lightboxImage').src = img.src;
            document.getElementById('lightbox').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Form Submit
        function handleFormSubmit(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! Our team will contact you within 24 hours to discuss your event requirements.');
        }
        
        // Smooth Scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>
</html>`;

// Homepage route
app.get('/', (c) => {
  return c.html(luxuryHTML)
})

// API Routes
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', message: 'Golden Globe Catering API is running' })
})

// Contact form API
app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  console.log('Contact form submission:', body)
  return c.json({ 
    success: true, 
    message: 'Thank you for your inquiry! Our team will contact you within 24 hours.' 
  })
})

// Chat API
app.post('/api/chat', async (c) => {
  const { message } = await c.req.json()
  
  const responses: Record<string, string> = {
    'services': 'We offer Corporate Catering, Royal & Government Events, Weddings, VIP Hospitality, Mega Outdoor Events, and Industrial Catering.',
    'prices': 'Our pricing varies based on event type, guest count, and menu selection. Contact us at +971 2 555 1234 for a personalized quote.',
    'booking': 'Book by contacting us via phone or form. We recommend booking 2-4 weeks in advance for larger events.',
    'menu': 'We offer International, Arabic, Asian, and Continental cuisines with custom menu options available.',
    'contact': 'Phone: +971 2 555 1234, WhatsApp: +971 50 123 4567, Location: M38, Industrial Area, Mussaffah, Abu Dhabi.',
    'default': 'Thank you for your interest! Contact our team at +971 2 555 1234 for detailed information.'
  }
  
  const lowerMessage = message.toLowerCase()
  let response = responses.default
  
  if (lowerMessage.includes('service')) response = responses.services
  else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) response = responses.prices
  else if (lowerMessage.includes('book')) response = responses.booking
  else if (lowerMessage.includes('menu') || lowerMessage.includes('food')) response = responses.menu
  else if (lowerMessage.includes('contact') || lowerMessage.includes('phone')) response = responses.contact
  
  return c.json({ response })
})

export default app
