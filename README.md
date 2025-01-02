# React DnD Component

A lightweight and customizable drag-and-drop component built with React, TypeScript, and @hello-pangea/dnd. This component provides a smooth and intuitive drag-and-drop experience with a modern design.

## 🌐 Demo 
You can view a live demo of the React DnD Component [here](https://react-dnd-component.vercel.app).


## 🚀 Features

- Smooth drag-and-drop functionality
- TypeScript support
- Customizable styling with Tailwind CSS
- Responsive design
- Modern and clean UI
- Reusable components
- Built with performance in mind

## 🛠️ Tech Stack

- React 18.3
- TypeScript
- Tailwind CSS
- @hello-pangea/dnd (Drag and Drop)
- Vite
- Lucide React (Icons)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/HoshangDEV/react-dnd-component.git
cd react-dnd-component
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🔨 Usage

```tsx
import { DndContainer, DndItem, DndRoot, DragHandle } from "./components/dnd";

function App() {
  const [items, setItems] = useState([
    { title: "Item 1", description: "Description 1" },
    { title: "Item 2", description: "Description 2" },
  ]);

  const handleDragEnd = (result) => {
    // Handle drag end logic
  };

  return (
    <DndRoot onDragEnd={handleDragEnd}>
      <DndContainer id="list">
        {items.map((item, index) => (
          <DndItem key={index} id={String(index)} index={index}>
            {(dragHandleProps) => (
              // Your item content
            )}
          </DndItem>
        ))}
      </DndContainer>
    </DndRoot>
  );
}
```

## 🎨 Customization

The component uses Tailwind CSS for styling and can be easily customized by:

1. Modifying the Tailwind configuration in `tailwind.config.js`
2. Using the `className` prop on any component
3. Using the utility classes provided by Tailwind CSS

## 📝 Components

### DndRoot
The main wrapper component that provides the drag-and-drop context.

### DndContainer
A droppable container that holds draggable items.

### DndItem
A draggable item component that can be reordered within its container.

### DragHandle
A customizable handle component for dragging items.

## 🧪 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📄 License

MIT License - feel free to use this component in your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💖 Support

If you find this project helpful, please give it a ⭐️ on GitHub!

## 🔧 ESLint Configuration

For production applications, you can enable type-aware lint rules:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

For React-specific linting, install and configure eslint-plugin-react:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
