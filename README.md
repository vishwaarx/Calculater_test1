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

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/calculater_test1.git
cd calculater_test1
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:9002](http://localhost:9002).

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

### 5. Start Production Server

```bash
npm start
# or
yarn start
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
│   └── hooks/
├── docs/
│   └── blueprint.md          # Project specifications
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🎯 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🎨 Design Features

- **Color Scheme**: 
  - Primary: Desaturated blue (#6699CC)
  - Background: Light grey (#F0F0F0)
  - Accent: Vibrant orange (#FFA500) for equals button
- **Typography**: Inter font family for clarity and modernity
- **Animations**: Subtle button press animations for tactile feedback
- **Layout**: Standard calculator layout for familiarity and ease of use

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


