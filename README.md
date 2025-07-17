# PreTGE Marketplace - Landing Page Frontend

🚀 **Secure Pre-TGE Token Trading Platform**

A modern, responsive landing page for PreTGE Marketplace - the leading secure platform for Pre-TGE token trading with escrow protection.

## 🌟 Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Modern UI/UX** with Tailwind CSS
- 🌍 **Multilingual Support** (EN, VI, ID, ZH)
- 📱 **Fully Responsive** design
- 🔒 **SEO Optimized** with structured data
- 🛡️ **Security-first** approach
- 📊 **Analytics Ready** (Google Analytics)
- 🔍 **Search Engine Optimized**

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS + Shadcn/UI
- **Typography:** Custom Cocomat Pro font
- **Icons:** Lucide React
- **Database:** Prisma (for blog functionality)
- **Deployment:** Vercel

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/pretge-marketplace/pretge-landingpage-frontend.git

# Install dependencies
npm install
# or
pnpm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
pretge-landingpage-frontend/
├── app/                    # Next.js 14 App Router
│   ├── [lang]/            # Multilingual routes
│   ├── api/               # API routes
│   ├── blogs/             # Blog pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/                # Shadcn/UI components
│   └── layouts/           # Layout components
├── lib/                   # Utilities and services
├── public/                # Static assets
└── dictionaries/          # Translation files
```

## 🌐 Multilingual Support

The site supports 4 languages:
- 🇺🇸 English (`/en`)
- 🇻🇳 Vietnamese (`/vi`)
- 🇮🇩 Indonesian (`/id`)
- 🇨🇳 Chinese (`/zh`)

## 📈 SEO Features

- ✅ Complete metadata optimization
- ✅ Open Graph & Twitter Cards
- ✅ Structured data (Schema.org)
- ✅ XML sitemap with multilingual support
- ✅ Optimized robots.txt
- ✅ Security headers
- ✅ Performance optimizations

## 🔧 Environment Variables

Create a `.env.local` file:

```bash
# Site Configuration
NEXT_PUBLIC_BASE_URL=https://pretgemarket.xyz

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Database (optional for blog)
DATABASE_URL=your_database_url
```

## 📊 Analytics & Tracking

- Google Analytics 4 integration
- Performance monitoring
- User behavior tracking
- Conversion tracking ready

## 🛡️ Security

- CSP headers implementation
- XSS protection
- CSRF protection
- Secure cookie handling
- Input validation

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel --prod
```

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Development

### Code Style

```bash
# Format code
npm run format

# Lint code
npm run lint
```

### Database (for blog functionality)

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- 📧 Email: support@pretgemarket.xyz
- 💬 Telegram: @pretgemarketplace
- 🐦 Twitter: @PreTGEMarket

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Tailwind CSS for styling utilities
- Shadcn for beautiful UI components

---

**⚡ PreTGE Marketplace - Secure Pre-TGE Token Trading Platform**
