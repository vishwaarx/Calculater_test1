# Calc-U-Later

A modern, feature-rich calculator web application built with Next.js, TypeScript, and Tailwind CSS. This project provides a sleek, responsive calculator interface with advanced memory functions and a beautiful user experience.

## 🚀 Features

- **Basic Calculator Operations**: Addition, subtraction, multiplication, and division
- **Memory Functions**: MC (Memory Clear), MR (Memory Recall), M+ (Memory Add), M- (Memory Subtract), MS (Memory Store)
- **Real-time Calculation**: Dynamic display with immediate feedback
- **Error Handling**: Robust error handling for invalid operations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Development**: Turbopack for fast development

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🚀 Installation & Setup
## Installation

```bash
npm install
```

## Usage

```bash
npm run dev
```
```




## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run TypeScript type checking
npm run typecheck

# Run AI development server (if using Genkit)
npm run genkit:dev
```

## 📁 Project Structure

```
calculater_test1/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main calculator component
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   ├── lib/
│   ├── hooks/
│   └── ai/                   # AI-related files
├── docs/
│   └── blueprint.md          # Project specifications
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── package-lock.json         # Lock file
├── tailwind.config.ts        # Tailwind configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.mjs       # PostCSS configuration
├── components.json          # shadcn/ui configuration
└── README.md
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack on port 9002 |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run genkit:dev` | Start Genkit AI development server |
| `npm run genkit:watch` | Start Genkit with file watching |

## 🎨 Design Features

- **Color Scheme**: 
  - Primary: Desaturated blue (#6699CC)
  - Background: Light grey (#F0F0F0)
  - Accent: Vibrant orange (#FFA500) for equals button
- **Typography**: Inter font family for clarity and modernity
- **Animations**: Subtle button press animations for tactile feedback
- **Layout**: Standard calculator layout for familiarity and ease of use

## 🐛 Troubleshooting

### Common Issues

1. **Port 9002 already in use**
   ```bash
   # Kill the process using port 9002
   npx kill-port 9002
   # Then run the dev server again
   npm run dev
   ```

2. **Dependencies not installing**
   ```bash
   # Clear npm cache
   npm cache clean --force
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**
   ```bash
   # Run type checking
   npm run typecheck
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)


