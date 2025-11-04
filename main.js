/* ===================================
   PROFESSIONAL COLOR PALETTE
   =================================== */
:root {
    /* Primary Colors */
    --primary-color: #2563eb;        /* Professional Blue */
    --secondary-color: #1e40af;      /* Deep Blue */
    --accent-color: #f59e0b;         /* Amber/Gold */
    --accent-light: #fbbf24;         /* Light Gold */
    
    /* Text Colors */
    --text-primary: #f8fafc;         /* Almost White */
    --text-secondary: #cbd5e1;       /* Light Gray */
    --text-muted: #94a3b8;           /* Muted Gray */
    
    /* Background Colors */
    --bg-primary: #0f172a;           /* Dark Navy */
    --bg-secondary: #1e293b;         /* Medium Navy */
    --bg-tertiary: #334155;          /* Light Navy */
    --bg-card: #1e293b;              /* Card Background */
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    --gradient-accent: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    --gradient-overlay: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%);
    
    /* Spacing */
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 8rem;
    
    /* Typography */
    --font-primary: 'Inter', 'Segoe UI', sans-serif;
    --font-heading: 'Poppins', sans-serif;
    --font-mono: 'JetBrains Mono', 'Courier New', monospace;
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.2);
    --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.3);
    --shadow-glow: 0 0 30px rgba(37, 99, 235, 0.3);
    --shadow-glow-accent: 0 0 30px rgba(245, 158, 11, 0.3);
    
    /* Transitions */
    --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Border Radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
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
    font-family: var(--font-primary);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    font-size: 16px;
}

/* ===================================
   CUSTOM CURSOR
   =================================== */
.cursor,
.cursor-follower {
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent-color);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: 0.1s;
    mix-blend-mode: difference;
}

.cursor-follower {
    width: 40px;
    height: 40px;
    border-color: var(--primary-color);
    transition: 0.15s;
}

/* ===================================
   PRELOADER
   =================================== */
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--bg-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    transition: opacity 0.5s ease;
}

.preloader-content {
    text-align: center;
}

.glitch-wrapper {
    margin-bottom: 2rem;
}

.glitch {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 0.3rem;
}

.loader-bar {
    width: 300px;
    height: 4px;
    background: var(--bg-secondary);
    border-radius: 10px;
    overflow: hidden;
    margin: 0 auto 1rem;
}

.loader-progress {
    height: 100%;
    background: var(--gradient-primary);
    width: 0%;
    animation: loading 2s ease-in-out forwards;
    box-shadow: var(--shadow-glow);
}

@keyframes loading {
    to { width: 100%; }
}

.loader-text {
    font-family: var(--font-mono);
    color: var(--text-secondary);
    font-size: 0.875rem;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
}

/* ===================================
   MATRIX RAIN - Subtle Effect
   =================================== */
#matrix-rain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0.03;
}

/* ===================================
   PARTICLES BACKGROUND
   =================================== */
#particles-js {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* ===================================
   NAVIGATION - Professional
   =================================== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.25rem 0;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    z-index: 1000;
    transition: all var(--transition-normal);
}

.navbar.scrolled {
    padding: 1rem 0;
    box-shadow: var(--shadow-lg);
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.logo-bracket {
    color: var(--accent-color);
    font-size: 1.75rem;
}

.logo-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
}

.nav-link {
    font-family: var(--font-primary);
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color var(--transition-fast);
    position: relative;
    letter-spacing: 0.05rem;
}

.nav-number {
    color: var(--accent-color);
    margin-right: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.8rem;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-accent);
    transition: width var(--transition-normal);
}

.nav-link:hover,
.nav-link.active {
    color: var(--text-primary);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 2px;
    background: var(--accent-color);
    transition: all var(--transition-fast);
    border-radius: 2px;
}

/* ===================================
   SOCIAL SIDEBAR - Elegant
   =================================== */
.social-sidebar {
    position: fixed;
    bottom: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.social-sidebar.left {
    left: 40px;
}

.social-sidebar.right {
    right: 40px;
}

.social-icon {
    color: var(--text-muted);
    font-size: 1.2rem;
    transition: all var(--transition-normal);
    position: relative;
}

.social-icon::before {
    content: attr(data-tooltip);
    position: absolute;
    left: 150%;
    top: 50%;
    transform: translateY(-50%);
    background: var(--bg-secondary);
    color: var(--accent-color);
    padding: 0.5rem 1rem;
    border-radius: var(--radius-md);
    font-size: 0.8rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition-normal);
    box-shadow: var(--shadow-md);
}

.social-icon:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
}

.social-icon:hover::before {
    opacity: 1;
}

.social-line {
    width: 2px;
    height: 100px;
    background: linear-gradient(to bottom, var(--text-muted), transparent);
}

.email-link {
    writing-mode: vertical-rl;
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--text-muted);
    text-decoration: none;
    transition: all var(--transition-normal);
    letter-spacing: 0.1rem;
}

.email-link:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
}

/* ===================================
   HERO SECTION - Executive Style
   =================================== */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-lg) 2rem;
    position: relative;
    background: 
        radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);
}

.hero-container {
    max-width: 1400px;
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 5rem;
    align-items: center;
}

.hero-content {
    animation: fadeInUp 1s ease;
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

.hero-intro {
    font-family: var(--font-mono);
    color: var(--accent-color);
    font-size: 1rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
}

.hero-name {
    font-family: var(--font-heading);
    font-size: 4.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary-color) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
}

.hero-subtitle {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    min-height: 80px;
}

.typing-text {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.cursor-blink {
    color: var(--accent-color);
    animation: blink 0.7s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

.hero-description {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    max-width: 650px;
    line-height: 1.8;
}

.highlight {
    color: var(--accent-color);
    font-weight: 600;
    position: relative;
}

.hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
    padding: 2rem;
    background: var(--bg-secondary);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.stat-item {
    text-align: center;
    padding: 1rem;
    border-left: 2px solid var(--accent-color);
}

.stat-item:first-child {
    border-left: none;
}

.stat-number {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.875rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 500;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.btn {
    padding: 1rem 2rem;
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: var(--radius-md);
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    transition: all var(--transition-normal);
    cursor: pointer;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    letter-spacing: 0.025em;
}

.btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
    width: 300px;
    height: 300px;
}

.btn span, .btn i {
    position: relative;
    z-index: 1;
}

.btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--shadow-md);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-glow);
}

.btn-secondary {
    background: transparent;
    color: var(--accent-color);
    border-color: var(--accent-color);
}

.btn-secondary:hover {
    background: var(--accent-color);
    color: var(--bg-primary);
    transform: translateY(-3px);
    box-shadow: var(--shadow-glow-accent);
}

.btn-restricted {
    background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
    color: white;
}

.btn-restricted:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(220, 38, 38, 0.4);
}

/* Hero Image - Professional Frame */
.hero-image {
    position: relative;
    animation: fadeInRight 1s ease 0.3s both;
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.image-wrapper {
    position: relative;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
}

.image-wrapper img {
    width: 100%;
    border-radius: var(--radius-xl);
    position: relative;
    z-index: 2;
    box-shadow: var(--shadow-xl);
    transition: transform var(--transition-normal);
}

.image-wrapper:hover img {
    transform: scale(1.02);
}

.image-border {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    background: var(--gradient-accent);
    border-radius: var(--radius-xl);
    z-index: 1;
    transition: all var(--transition-normal);
}

.image-wrapper:hover .image-border {
    top: 15px;
    left: 15px;
    opacity: 0.8;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-overlay);
    border-radius: var(--radius-xl);
    z-index: 3;
    transition: opacity var(--transition-normal);
}

.image-wrapper:hover .image-overlay {
    opacity: 0;
}

.floating-icons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    pointer-events: none;
}

.floating-icons i {
    position: absolute;
    font-size: 2rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0.4;
    animation: float 3s ease-in-out infinite;
    padding: 0.5rem;
    background-color: var(--bg-secondary);
    border-radius: var(--radius-md);
}

.floating-icons i:nth-child(1) { top: 10%; left: -10%; animation-delay: 0s; }
.floating-icons i:nth-child(2) { top: 30%; right: -10%; animation-delay: 0.5s; }
.floating-icons i:nth-child(3) { bottom: 30%; left: -15%; animation-delay: 1s; }
.floating-icons i:nth-child(4) { bottom: 10%; right: -5%; animation-delay: 1.5s; }
.floating-icons i:nth-child(5) { top: 50%; left: -20%; animation-delay: 2s; }

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

/* Scroll Indicator */
.scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    animation: fadeIn 1s ease 1.5s both;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.mouse {
    width: 28px;
    height: 45px;
    border: 2px solid var(--accent-color);
    border-radius: 20px;
    position: relative;
    margin: 0 auto 10px;
}

.wheel {
    width: 4px;
    height: 10px;
    background: var(--accent-color);
    border-radius: 2px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 2s infinite;
}

@keyframes scroll {
    0% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateX(-50%) translateY(15px);
    }
}

.scroll-indicator p {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-muted);
    letter-spacing: 0.15rem;
    text-transform: uppercase;
}

/* ===================================
   SECTION STYLING - Professional
   =================================== */
section {
    padding: var(--spacing-lg) 2rem;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
}

.section-header {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    gap: 1.5rem;
}

.section-number {
    font-family: var(--font-mono);
    font-size: 1.25rem;
    color: var(--accent-color);
    font-weight: 700;
}

.section-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    white-space: nowrap;
    letter-spacing: -0.02em;
}

.section-line {
    flex: 1;
    height: 2px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);
}

/* ===================================
   ABOUT SECTION - Clean Layout
   =================================== */
.about-section {
    background: 
        radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.05) 0%, transparent 50%);
}

.about-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 5rem;
}

.about-description {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.skills-container {
    margin-top: 3rem;
}

.skills-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    background: var(--bg-secondary);
    border-left: 3px solid var(--accent-color);
    border-radius: var(--radius-md);
    transition: all var(--transition-normal);
}

.skill-item:hover {
    background: var(--bg-tertiary);
    transform: translateX(10px);
    box-shadow: var(--shadow-md);
}

.skill-item i {
    font-size: 1.5rem;
    color: var(--primary-color);
}

.skill-item span {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-secondary);
}

.education-timeline {
    background: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: var(--radius-lg);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: var(--shadow-lg);
}

.timeline-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2rem;
}

.timeline {
    position: relative;
    padding-left: 2rem;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background: var(--gradient-primary);
    border-radius: 10px;
}

.timeline-item {
    position: relative;
    margin-bottom: 2.5rem;
}

.timeline-dot {
    position: absolute;
    left: -2.5rem;
    top: 0;
    width: 15px;
    height: 15px;
    background: var(--accent-color);
    border-radius: 50%;
    box-shadow: 
        0 0 0 4px var(--bg-secondary), 
        0 0 0 6px var(--accent-color),
        var(--shadow-glow-accent);
}

.timeline-date {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--accent-color);
    font-weight: 600;
}

.timeline-content h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0.75rem 0;
}

.timeline-content p {
    color: var(--text-muted);
    font-size: 1rem;
}

.timeline-tag {
    display: inline-block;
    margin-top: 0.75rem;
    padding: 0.4rem 1rem;
    background: var(--gradient-accent);
    color: white;
    border-radius: var(--radius-md);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
}

/* ===================================
   PROJECTS SECTION - Card Grid
   =================================== */
.projects-section {
    background: 
        radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 50%);
}

.projects-filter {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 0.875rem 1.75rem;
    font-family: var(--font-primary);
    font-size: 0.9rem;
    font-weight: 600;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border: 2px solid transparent;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition-normal);
    letter-spacing: 0.05rem;
}

.filter-btn.active,
.filter-btn:hover {
    background: var(--gradient-primary);
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--bg-secondary);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition-normal);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-color);
}

.project-image {
    position: relative;
    height: 250px;
    overflow: hidden;
    background: var(--bg-tertiary);
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity var(--transition-normal);
}

.project-card:hover .project-overlay {
    opacity: 0.95;
}

.project-link {
    width: 70px;
    height: 70px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 1.75rem;
    transition: all var(--transition-normal);
    box-shadow: var(--shadow-lg);
}

.project-link:hover {
    transform: scale(1.15) rotate(10deg);
}

.project-content {
    padding: 2rem;
}

.project-title {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.project-description {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.project-tags {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
}

.tag {
    padding: 0.4rem 1rem;
    background: rgba(37, 99, 235, 0.1);
    color: var(--primary-color);
    border: 1px solid rgba(37, 99, 235, 0.2);
    border-radius: var(--radius-md);
    font-size: 0.8rem;
    font-family: var(--font-mono);
    font-weight: 500;
}

/* Restricted Projects */
.restricted-card {
    border-color: rgba(220, 38, 38, 0.3);
}

.restricted-card:hover {
    border-color: rgba(220, 38, 38, 0.6);
    box-shadow: 0 20px 40px rgba(220, 38, 38, 0.3);
}

.restricted-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    backdrop-filter: blur(5px);
}

.restricted-overlay i {
    font-size: 3.5rem;
    color: #dc2626;
}

.restricted-overlay p {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: #dc2626;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
}

/* ===================================
   TESTIMONIALS SECTION
   =================================== */
.testimonials-section {
    background: var(--bg-secondary);
    position: relative;
}

.testimonials-slider {
    max-width: 1000px;
    margin: 0 auto 3rem;
    position: relative;
}

.testimonial-card {
    display: none;
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: 3rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: var(--shadow-xl);
}

.testimonial-card.active {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 3rem;
    animation: fadeIn 0.5s ease;
}

.testimonial-image {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--accent-color);
    box-shadow: var(--shadow-glow-accent);
}

.testimonial-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.testimonial-content {
    position: relative;
}

.quote-icon {
    position: absolute;
    top: -30px;
    left: -30px;
    font-size: 4rem;
    color: var(--accent-color);
    opacity: 0.15;
}

.testimonial-text {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.9;
    margin-bottom: 2rem;
    font-style: italic;
}

.testimonial-author h4 {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.testimonial-author p {
    color: var(--accent-color);
    font-size: 1rem;
    font-weight: 500;
}

.slider-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

.slider-btn {
    width: 55px;
    height: 55px;
    border: 2px solid var(--primary-color);
    background: var(--bg-secondary);
    color: var(--primary-color);
    border-radius: 50%;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all var(--transition-normal);
    box-shadow: var(--shadow-md);
}

.slider-btn:hover {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
    box-shadow: var(--shadow-glow);
}

.slider-dots {
    display: flex;
    gap: 1rem;
}

.slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--text-muted);
    cursor: pointer;
    transition: all var(--transition-normal);
}

.slider-dot.active {
    background: var(--accent-color);
    transform: scale(1.3);
    box-shadow: var(--shadow-glow-accent);
}

/* ===================================
   MUSIC SECTION
   =================================== */
.music-section {
    background: 
        radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.05) 0%, transparent 50%);
}

.music-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.music-card {
    background: var(--bg-secondary);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition-normal);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.music-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
    border-color: var(--accent-color);
}

.music-image {
    position: relative;
    height: 320px;
    overflow: hidden;
    background: var(--bg-tertiary);
}

.music-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
}

.music-card:hover .music-image img {
    transform: scale(1.1);
}

.music-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.95) 0%, rgba(245, 158, 11, 0.95) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity var(--transition-normal);
}

.music-card:hover .music-overlay {
    opacity: 1;
}

.play-btn {
    width: 90px;
    height: 90px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 2.5rem;
    transition: all var(--transition-normal);
    box-shadow: var(--shadow-lg);
}

.play-btn:hover {
    transform: scale(1.2);
    box-shadow: var(--shadow-xl);
}

.music-content {
    padding: 2rem;
}

.music-title {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.music-artist {
    color: var(--accent-color);
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.music-description {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
}

/* ===================================
   CONTACT SECTION
   =================================== */
.contact-section {
    background: var(--bg-secondary);
}

.contact-content {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

.contact-text h3 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
}

.contact-text p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 4rem;
}

.contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.contact-method {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2.5rem;
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    text-decoration: none;
    transition: all var(--transition-normal);
    border: 2px solid transparent;
    box-shadow: var(--shadow-md);
}

.contact-method:hover {
    border-color: var(--primary-color);
    transform: translateY(-10px);
    box-shadow: var(--shadow-glow);
}

.contact-icon {
    width: 70px;
    height: 70px;
    background: var(--gradient-primary);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    flex-shrink: 0;
    box-shadow: var(--shadow-md);
}

.contact-details {
    text-align: left;
}

.contact-details h4 {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.contact-details p {
    color: var(--text-secondary);
    font-size: 1rem;
    margin: 0;
}

/* ===================================
   FOOTER
   =================================== */
.footer {
    padding: 3rem 2rem;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    background: var(--bg-primary);
}

.footer-content p {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin: 0.5rem 0;
}

.footer-subtitle {
    font-family: var(--font-mono);
}

.footer-subtitle i {
    color: #dc2626;
    animation: heartbeat 1.5s ease infinite;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    10%, 30% { transform: scale(1.2); }
    20%, 40% { transform: scale(1); }
}

/* ===================================
   MODAL - Professional Design
   =================================== */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    z-index: 10000;
    overflow-y: auto;
}

.modal.active {
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: var(--bg-secondary);
    max-width: 650px;
    width: 90%;
    border-radius: var(--radius-xl);
    position: relative;
    border: 2px solid var(--primary-color);
    animation: modalSlideIn 0.3s ease;
    box-shadow: var(--shadow-glow);
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-50px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2rem;
    color: var(--text-muted);
    cursor: pointer;
    transition: color var(--transition-fast);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-tertiary);
    border-radius: 50%;
}

.modal-close:hover {
    color: var(--accent-color);
    background: var(--bg-primary);
}

.modal-header {
    padding: 3rem 2.5rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
}

.modal-header h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.75rem;
}

.modal-header p {
    color: var(--text-secondary);
    font-size: 1rem;
}

.modal-body {
    padding: 2.5rem;
}

.payment-section,
.verification-section,
.telegram-link {
    margin-bottom: 2.5rem;
}

.payment-section h3,
.verification-section h3 {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
}

.upi-details {
    text-align: center;
}

.upi-details p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
}

.upi-details strong {
    color: var(--accent-color);
    font-weight: 700;
}

.qr-code {
    max-width: 320px;
    margin: 0 auto;
    padding: 1.5rem;
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}

.qr-code img {
    width: 100%;
    border-radius: var(--radius-md);
}

.verification-section input {
    width: 100%;
    padding: 1.25rem 1.5rem;
    background: var(--bg-tertiary);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 1.05rem;
    margin-bottom: 1.5rem;
    transition: border-color var(--transition-fast);
}

.verification-section input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: var(--shadow-glow);
}

.verification-section input::placeholder {
    color: var(--text-muted);
}

.telegram-link {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.telegram-link p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-size: 1rem;
}

/* ===================================
   RESPONSIVE DESIGN
   =================================== */
@media (max-width: 1024px) {
    .hero-container {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .hero-image {
        order: -1;
        max-width: 400px;
        margin: 0 auto;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .social-sidebar {
        display: none;
    }
    
    .hero-name {
        font-size: 3.5rem;
    }
    
    .hero-subtitle {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 75%;
        height: 100vh;
        background: var(--bg-primary);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: right var(--transition-normal);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .nav-links.active {
        right: 0;
    }
    
    .hamburger {
        display: flex;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
    }
    
    .hero-name {
        font-size: 2.75rem;
    }
    
    .hero-subtitle {
        font-size: 1.75rem;
    }
    
    .hero-stats {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        padding: 1.5rem;
    }
    
    .stat-number {
        font-size: 2.25rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .testimonial-card.active {
        grid-template-columns: 1fr;
        text-align: center;
        padding: 2rem;
    }
    
    .testimonial-image {
        margin: 0 auto 2rem;
    }
    
    .contact-methods {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    section {
        padding: var(--spacing-md) 1rem;
    }
    
    .hero-name {
        font-size: 2.25rem;
    }
    
    .hero-subtitle {
        font-size: 1.5rem;
    }
    
    .hero-stats {
        grid-template-columns: 1fr;
    }
    
    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }
    
    .btn {
        width: 100%;
        justify-content: center;
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
    }
}

/* ===================================
   UTILITY CLASSES
   =================================== */
.text-center {
    text-align: center;
}

.hidden {
    display: none !important;
}

.fade-in {
    animation: fadeIn 1s ease;
}

.slide-up {
    animation: fadeInUp 1s ease;
}

/* ===================================
   SCROLLBAR STYLING
   =================================== */
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
    background: var(--gradient-primary);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--gradient-accent);
}

/* ===================================
   SELECTION STYLING
   =================================== */
::selection {
    background: var(--accent-color);
    color: var(--bg-primary);
}

::-moz-selection {
    background: var(--accent-color);
    color: var(--bg-primary);
}