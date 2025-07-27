# 🧙‍♂️ Voodoo Router

Welcome, traveler, to the Voodoo Router! This is a template repository for kickstarting your own modern web apps with React, TypeScript, Prisma, Tailwind CSS, and Vite. Use this as a foundation for your next project—just click "Use this template" on GitHub to get started. If you’re looking for a project that’s as friendly as a Babel fish and as powerful as a Vogon constructor fleet (but much less destructive), you’re in the right place.

## ✨ Features

- **React 19+** with React Router for seamless navigation
- **TypeScript 5+** for strict, type-safe code (no `any` allowed, we’re not animals)
- **Tailwind CSS 3+** with Class Variance Authority (CVA) for styling that’s both beautiful and maintainable
- **Zustand** for global state management (no more prop drilling or custom hooks gone wild)
- **Prisma ORM** with PostgreSQL for robust, type-safe database access
- **Vite** for lightning-fast development and builds
- **Vitest** & **React Testing Library** for testing (because bugs are only funny in Douglas Adams novels)
- **Storybook** for documenting your component library
- **Accessibility**: WCAG 2.1 AA/AAA, ARIA roles, semantic HTML, and more
- **Progressive Enhancement**: Works in all major browsers (except, mercifully, Internet Explorer)

## 🧪 Using as a Template

To start your own project with this template:

1. Click the green **"Use this template"** button on the GitHub repository page.
2. Choose **"Create a new repository"** and fill in your new repo details.
3. Clone your new repository and follow the Getting Started steps below.

Now you’re ready to build your own web app—no towel required (but always recommended).

## 🚀 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/bwclovis-web/voodoo-router.git
   cd voodoo-router
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up your database**
   - Update `prisma/schema.prisma` as needed.
   - Run migrations:
     ```bash
     npx prisma migrate dev --name init
     ```

4. **Start the dev server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Visit [http://localhost:5173](http://localhost:5173) and marvel at your new app.

## 🛠️ Scripts

- `npm run dev` – Start the Vite dev server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build
- `npm run test` – Run tests with Vitest
- `npm run storybook` – Launch Storybook for component docs
- `npm run db:generate` – Generates database client
- `npm run db:studio` – Open Prisma Studio for DB management
- `npm run db:push` – Runs database push
- `npm run db:docs` – Creates database documentation

### 🧱 Component Scaffolding

Quickly generate new components following atomic design principles (Atom, Molecule, Organism) using the scaffold script:

```bash
npm run create:component
```

You’ll be prompted to choose the type (Atom, Molecule, or Organism) and name your component. The script will create the appropriate folder structure, TypeScript, test, and story files for you—no need to sacrifice any electrons.

## 🧩 Project Structure

```
app/
  components/      # React components (Atoms, Molecules, Organisms, etc.)
  hooks/           # Custom React hooks
  models/          # Prisma models and server logic
  modules/         # Feature modules (i18n, etc.)
  providers/       # Context providers
  routes/          # Route definitions
  utils/           # Utility functions
  welcome/         # Welcome page and assets
generated/         # Prisma client output
prisma/            # Prisma schema and seed
public/            # Static assets and translations
stories/           # Storybook stories
test/              # Test setup
```

## 🧑‍💻 Coding Guidelines

- **TypeScript everywhere** – No `any`, no exceptions.
- **Functional React components** – Hooks, not classes.
- **Tailwind for styling** – Utility-first, responsive, and accessible.
- **Error handling** – Use `try-catch` for async, user-friendly messages, and log technical details.
- **Accessibility** – Labels, ARIA, semantic HTML, and color contrast.
- **Modern JS** – ES2020+, async/await, destructuring, etc.
- **Testing** – Write tests for components and logic.

## 🌍 Accessibility & Browser Support

- WCAG 2.1 AA/AAA compliance
- Works in latest Chrome, Firefox, Edge, Safari (macOS/iOS)
- Progressive enhancement and feature detection

## 🤖 Contributing

Pull requests are welcome! Please follow the coding standards, write tests, and keep your towel handy.

## 📚 Documentation

- Component docs: `npm run storybook`
- Prisma docs: [Prisma ORM](https://www.prisma.io/docs/)
- Tailwind docs: [Tailwind CSS](https://tailwindcss.com/docs/)

## 🪄 License

MIT – Because sharing is caring (and legal).

---

> “Don’t Panic.” – The Hitchhiker’s Guide to the Galaxy

---
