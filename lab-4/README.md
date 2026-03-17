# Lab 4: Styling Strategies and Component Composition in React

This project demonstrates various React development concepts including different styling approaches, component composition patterns, and controlled vs uncontrolled components.

## Features

### Styling Approaches
- **CSS Modules**: Scoped and maintainable styles using `ProfileCard.module.css`
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

### Component Composition
- **PageWrapper**: Layout component that wraps the entire page content
- **ProfileCardCSS**: Profile card styled with CSS Modules
- **ProfileCardTailwind**: Profile card styled with Tailwind CSS

### Input Components
- **ControlledInput**: Uses React state (`useState`) for immediate value tracking
- **UncontrolledInput**: Uses `useRef` for accessing DOM values when needed

## Engineering Reasoning for Tailwind CSS

### Speed
Tailwind CSS significantly accelerates development by providing utility classes that can be applied directly in JSX. Instead of writing custom CSS and managing class names, developers can style components inline with pre-defined utilities. This reduces context switching between CSS files and component logic.

### Consistency
Tailwind enforces design consistency through its design system approach. All spacing, colors, and typography follow a standardized scale (e.g., `p-4`, `text-gray-800`, `mb-2`). This prevents arbitrary values and ensures a cohesive visual language across the application.

### Scalability
- **No CSS bloat**: Tailwind's purging removes unused styles in production
- **Maintainable**: Changes to design tokens affect the entire application consistently
- **Team collaboration**: Utility classes are self-documenting and reduce decision fatigue
- **Responsive design**: Built-in responsive prefixes (`sm:`, `md:`, `lg:`) make mobile-first development straightforward

### Comparison with CSS Modules
- **CSS Modules**: Best for component-specific, complex styles that need isolation
- **Tailwind**: Ideal for rapid prototyping, consistent design systems, and when speed is prioritized over custom styling

## Project Structure

```
src/
├── components/
│   ├── inputs/
│   │   ├── ControlledInput.jsx
│   │   └── UncontrolledInput.jsx
│   ├── layouts/
│   │   └── PageWrapper.jsx
│   └── profile/
│       ├── ProfileCard.module.css
│       ├── ProfileCardCSS.jsx
│       └── ProfileCardTailwind.jsx
├── pages/
│   └── ProfilePage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Technologies Used

- React 19
- Vite
- Tailwind CSS 4
- CSS Modules
- ESLint
