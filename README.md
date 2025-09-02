# Website Builder

A drag-and-drop website builder built with **React, Redux Toolkit, TypeScript, Tailwind CSS, and react-rnd**.  
It allows users to place and edit components like **Text, Image, Button, Header, and Footer** on a canvas, making website creation more intuitive and interactive.

---

## 🚀 Tech Stack

- **React (with TypeScript)** – component-based UI framework
- **Redux Toolkit** – state management for blocks and UI interactions
- **Tailwind CSS** – utility-first styling for fast and responsive design
- **react-rnd** – drag, drop, and resize functionality for components

---

## ⚙️ Architecture

- **Canvas**  
  The main area where users drag and arrange components.  
- **Redux Slices**  
  - `elementsSlice`: manages blocks (id, type, content, styling, position, size, pageId).  
  - `uiSlice`: manages selected components and UI state.  
- **Dynamic Components**  
  Individual reusable components (**Text, Image, Button, Header, Footer**) that can be placed on the canvas.  
- **Multi-Page Support**  
  Blocks are linked with `pageId`, allowing separate pages to be designed.

---

## 💡 Rationale

- **React + TypeScript** provides a scalable and type-safe foundation.  
- **Redux Toolkit** ensures predictable state management, making it easy to track and update block properties.  
- **react-rnd** simplifies implementing drag-and-drop with resizing, a core feature of any visual builder.  
- **Tailwind CSS** speeds up UI development with utility classes and makes designs responsive.  
- The architecture focuses on **simplicity and modularity**, making it easy to extend with new block types in the future (e.g., forms, video, cards).


---

## ▶️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Then open http://localhost:5173/


## 🔮 Future Improvements

- Save & Load Projects – persist layouts using localStorage or a backend.

- Export to HTML/CSS – generate clean HTML/CSS from the canvas for deployment.

- Predefined Templates – quick-start designs for faster website building.

- Additional Components – forms, videos, image galleries, cards, etc.

- Responsive Controls – fine-tune layouts for desktop, tablet, and mobile views.

- Collaboration Support – real-time editing with multiple users.
