# WayTree Landing Site

A modern, responsive landing site for WayTree built with Vite, React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **UI Components:** Radix UI + shadcn/ui
- **Forms:** React Hook Form with Zod validation
- **Contact:** EmailJS integration
- **Icons:** Lucide React

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Add your EmailJS credentials to .env
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── components/ui/       # shadcn/ui components
├── hooks/              # Custom React hooks
├── layout/             # Layout components (Navbar, Footer)
├── lib/                # Utility functions
├── pages/              # Page components
├── sections/           # Landing page sections
├── styles/             # Global styles
└── types/              # TypeScript type definitions
```

## 🌐 Pages

- `/` - Home page
- `/features` - Features overview
- `/how-it-works` - How it works
- `/about` - About page
- `/contact` - Contact form
- `/privacy-policy` - Privacy policy
- `/terms-and-conditions` - Terms and conditions

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. Create an EmailJS account
2. Create an email service and template
3. Add your credentials to `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🚀 Deployment

This project is optimized for Vercel deployment. Simply connect your GitHub repository to Vercel and it will automatically detect the Vite configuration.

## 📝 License

This project is proprietary and confidential.
