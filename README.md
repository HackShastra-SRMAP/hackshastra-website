# HackShastra SRM-AP Website

Official website for **HackShastra** - SRM University-AP Student Chapter.

![HackShastra](https://img.shields.io/badge/HackShastra-SRM--AP-990000?style=for-the-badge)

## 🚀 Tech Stack

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI components
- **GSAP** - Animations
- **React Router** - Navigation

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/HackShastra-SRMAP/hackshastra-website.git
cd hackshastra-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/           # Images, videos, logos
├── components/
│   ├── ui/           # Reusable UI components
│   ├── Header.tsx    # Navigation header
│   ├── Hero.tsx      # Hero section
│   ├── Events.tsx    # Events section
│   ├── Gallery.tsx   # Homepage gallery
│   ├── Team.tsx      # Team members
│   └── Footer.tsx    # Site footer
├── pages/
│   ├── AboutPage.tsx    # /about
│   ├── GalleryPage.tsx  # /gallery
│   ├── ContactPage.tsx  # /contact
│   └── JoinPage.tsx     # /join
├── lib/              # Utilities
└── App.tsx           # Main app with routing
```

## 🛣️ Routes

| Path | Description |
|------|-------------|
| `/` | Homepage |
| `/about` | About HackShastra |
| `/gallery` | Photo gallery |
| `/contact` | Contact form |
| `/join` | Membership application |

## 🎨 Design System

- **Primary Color**: Deep Crimson Red `#990000`
- **Background**: Dark `#0a0a0a`
- **Fonts**: Cinzel (headings), Manrope (body)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

- **Email**: hssc2025@srmap.edu.in
- **Website**: https://hackshastra-website.vercel.app/

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

Made with ❤️ by HackShastra SRM-AP
