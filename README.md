# @portfolio/ui

Shared UI component library for my micro-frontend portfolio project.

## Tech Stack

- TypeScript - Type-safe components
- Tailwind CSS - Utility-first styling
- Storybook - Component development environment
- tsup - Fast TypeScript bundler

## Installation

This library requires React 18 or higher as a peer dependency.

npm install react react-dom @portfolio/ui

## Usage
```
import { Button } from '@portfolio/ui';
import '@portfolio/ui/dist/index.css';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Clicked!')}>
      Click Me
    </Button>
  );
}
```

## Available Components

| Component | Description | Status |
|-----------|-------------|--------|
| Button | Primary, Secondary, Outline variants with sm/md/lg sizes | ✅ |
| Card | Container with Image, Content, Title, Description, Footer sub-components | ✅ |

## Development

npm install  
npm run build  
npm run dev  
npm run storybook

## Local Publishing (Verdaccio)

verdaccio  
npm publish --registry http://localhost:4873

## License

MIT