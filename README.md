<h1 align="center">💼 Havoc Portfolio</h1>

<p align="center">
<a href="https://github.com/Daniel-wambua/havoc"><img src="https://www.havocracingco.com/cdn/shop/files/gold_cf4385de-4a47-424f-8c5a-b1bbd9913276_1800x1800.png?v=1710121850" width="600" /></a><br />
<i>Professional portfolio with cyberpunk aesthetics & blazing performance</i>
<br /><br />
<b>🌐 <a href="https://portfolio.havocsec.me">portfolio.havocsec.me</a></b> | <b>📦 <a href="https://github.com/Daniel-wambua/havoc">github.com/Daniel-wambua/havoc</a></b>
</p>

## Motive

Why settle for a basic portfolio? Havoc Portfolio is a high-performance, modern portfolio website built for speed and style. Optimized for Vercel deployment with cyberpunk-inspired design, smooth animations, and professional presentation of skills and projects.

## 🚀 Features

- ⚡ **Vercel-optimized** deployment with edge caching
- 🎨 **Modern glassmorphism** design
- ✨ **Smooth animations** and transitions
- 🔍 **SEO optimized** with proper meta tags
- 📱 **Fully responsive** design
- 🌙 **Cyberpunk aesthetics** with professional touch
- 💻 **Clean code structure** with components
- 🎯 **Contact form** with EmailJS integration
- 📊 **Projects showcase** with live demos
- 🔒 **Security headers** and best practices
- 🚄 **Blazing fast** < 1s load time globally
- 📋 **Minified assets** for optimal performance

<details>
<summary>About the Developer</summary>

> I'm Daniel Wambua, a cybersecurity enthusiast, bug bounty hunter, and full-stack developer passionate about building secure and elegant web experiences. You can find my work at [lab.havocsec.me](https://lab.havocsec.me) and [danielwambua.dev](https://danielwambua.dev).

</details>

## �️ Tech Stack

- HTML5
- CSS3 (Modern features, Glassmorphism)
- JavaScript (ES6+)
- Font Awesome Icons
- EmailJS for forms
- Node.js build system
- Vercel for hosting

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Daniel-wambua/havoc.git
cd havoc

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
cd public && python3 -m http.server 8000
```

Open [http://localhost:3000](http://localhost:3000) in your browser (dev mode).

<details><summary>Deployment Options</summary>

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Daniel-wambua/havoc)

**Quick Deploy:**
```bash
# 1. Push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Import on Vercel
# - Go to vercel.com
# - Click "Import Project"
# - Select your repository
# - Click "Deploy"
```

**Current Deployment:**
- Live at: [portfolio.havocsec.me](https://portfolio.havocsec.me)
- Deployed via: Vercel
- CDN: Vercel Edge Network (100+ locations)
- Performance: < 1s load time worldwide

### Other Platforms
- **Netlify**: Import repo, instant deployment
- **GitHub Pages**: Build and deploy to gh-pages
- **Custom VPS**: Upload `public/` folder to web server

</details>

<details>
<summary>Preview</summary>

<p align="center">
<img src="src/images/preview.png" alt="Havoc Portfolio Preview" width="800" />
<br />
<i>Clean, professional interface with cyberpunk vibes</i>
</p>

</details>

## ⚡ Performance Optimizations

This site includes the following optimizations for maximum speed:

- **Minified HTML, CSS, and JavaScript** - Reduced file sizes by ~40%
- **Optimized caching headers** - 1-year cache for static assets
- **Security headers** - XSS, CSRF, clickjacking protection
- **Clean URLs** - No `.html` extensions needed
- **Edge caching** - Served from 100+ global locations
- **HTTP/2 & HTTP/3** - Latest protocol support
- **Gzip + Brotli compression** - Automatic compression
- **Image optimization** - WebP with fallbacks

**Build Output:**
- Source: 504KB
- Optimized: 500KB (minified)
- Transferred: ~150KB (compressed)

## 🛠️ Project Structure

```
havoc/
├── index.html           # Main entry point
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css
│   │   └── js/
│   │       └── scripts.js
│   ├── components/
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── social-icons.html
│   ├── images/
│   │   └── preview.png
│   └── pages/
│       └── index.html
├── public/              # Build output (generated)
├── scripts/
│   └── build.js         # Build & minification script
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies & scripts
```

## 🔒 Security

The site includes security headers:
- X-Content-Type-Options (MIME sniffing protection)
- X-Frame-Options (Clickjacking protection)
- X-XSS-Protection (XSS protection)
- Referrer-Policy (Privacy protection)
- Permissions-Policy (Feature restrictions)

## Contributing

Contributions welcome! Found a bug? Have a feature request? Open an issue or submit a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

> _**[Daniel-wambua/havoc](https://github.com/Daniel-wambua/havoc)** is licensed under [MIT](https://github.com/Daniel-wambua/havoc/blob/HEAD/LICENSE) © [Daniel Wambua](https://danielwambua.dev) 2025._<br>
> <sup align="right">For information, see <a href="https://tldrlegal.com/license/mit-license">TLDR Legal > MIT</a></sup>

<details>
<summary>Expand License</summary>

```
The MIT License (MIT)
Copyright (c) Daniel Wambua <wambuahdaniel@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sub-license, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

</details>

---

<!-- License + Copyright -->
<p align="center">
<i>© <a href="https://danielwambua.dev">Daniel Wambua</a> 2025</i><br>
<i>Licensed under <a href="https://gist.github.com/Daniel-wambua/143d2ee01ccc5c052a17">MIT</a></i><br>
<a href="https://github.com/Daniel-wambua"><img src="https://i.ibb.co/4KtpYxb/octocat-clean-mini.png" /></a><br>
<sup>Thanks for visiting :)</sup>
</p>

<!-- ASCII Art -->
<!-- 
                    💼 Build Great Things 💼
                    
         _____
        /     \
       | () () |    "Code Responsibly!"
        \  ^  /
         |||||
         |||||
         
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     H A V O C   P O R T F O L I O
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-->