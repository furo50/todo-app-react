# Todo App - React Frontend

Full-Stack Todo-Anwendung mit React und Spring Boot Backend. Features wie Dark Mode, Inline-Editing und Echtzeit-Fortschritts-Tracking.

## Features

- Todos erstellen, bearbeiten, löschen und abhaken
- Filter für alle, aktive und erledigte Aufgaben
- Fortschrittsbalken mit Prozent-Anzeige
- Dark Mode Toggle mit localStorage
- Inline-Editing per Doppelklick
- Backend-Integration mit PostgreSQL

## Tech Stack

- React 18 mit Vite
- Axios für API-Calls
- CSS Variables für Theme-System
- localStorage für Präferenzen

## Installation

**Voraussetzungen:**
- Node.js 18+
- Laufendes Backend ([Repository](https://github.com/furo50/todo-app-backend))

**Setup:**
```bash
git clone https://github.com/furo50/todo-app-react.git
cd todo-app-react
npm install
npm run dev
```

App läuft auf `http://localhost:5173`

## Projekt-Struktur
```
src/
├── components/
│   ├── TodoInput/       # Input-Feld
│   ├── TodoItem/        # Einzelnes Todo
│   ├── TodoList/        # Todo-Liste
│   ├── TodoFilter/      # Filter-Buttons
│   ├── TodoStats/       # Fortschrittsanzeige
│   └── ThemeToggle/     # Dark Mode Toggle
├── todoApi.js           # API-Service
├── App.jsx              
└── App.css              # Theme-System
```

## API Endpoints

- `GET /api/todos` - Alle Todos laden
- `POST /api/todos` - Todo erstellen
- `PUT /api/todos/{id}` - Todo aktualisieren
- `DELETE /api/todos/{id}` - Todo löschen

Backend: https://github.com/furo50/todo-app-backend

## Theme System

Dark/Light Mode mit CSS Variables:
- Toggle rechts oben (Sonne/Mond Icon)
- Automatische localStorage-Persistenz
- Smooth Transitions zwischen Themes

## Build
```bash
npm run build
```

Production-Build landet in `dist/`

## Geplante Features

- [x] Edit-Funktion
- [x] Dark Mode
- [ ] Drag & Drop
- [ ] Kategorien/Tags
- [ ] Fälligkeitsdatum

---

**Mehmet Furkan Özer**  
GitHub: [@furo50](https://github.com/furo50)