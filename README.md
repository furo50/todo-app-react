# Todo App - React Frontend

Full-Stack Todo-Anwendung mit React und Spring Boot Backend. JWT Authentication, Dark Mode, Inline-Editing und Echtzeit-Fortschritts-Tracking.

## Features

- JWT-basierte Authentication (Login & Signup)
- Protected Routes - nur eingeloggte User sehen die App
- Todos erstellen, bearbeiten, löschen und abhaken
- Filter für alle, aktive und erledigte Aufgaben
- Fortschrittsbalken mit Prozent-Anzeige
- Dark Mode Toggle mit localStorage
- Inline-Editing per Doppelklick
- Backend-Integration mit PostgreSQL

## Tech Stack

- React 18 mit Vite
- React Router DOM - Routing & Protected Routes
- Axios mit Interceptor für automatische Token-Übermittlung
- CSS Variables für Theme-System
- localStorage für Token & Theme-Präferenz

## Voraussetzungen

- Node.js 18+
- Laufendes Backend ([Repository](https://github.com/furo50/todo-app-backend))

## Setup
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
├── context/
│   └── AuthContext.jsx  # Globaler Auth-State
├── pages/
│   ├── LoginPage/       # Login-Seite
│   ├── SignupPage/      # Registrierung-Seite
│   └── TodoPage/        # Haupt Todo-Seite (protected)
├── utils/
│   └── authApi.js       # Login & Signup API Calls
├── todoApi.js           # Todo API-Service mit Axios Interceptor
├── App.jsx              # Routing & Protected Routes
└── App.css              # Theme-System mit CSS Variables
```

## Authentication Flow
```
User öffnet App
↓
Nicht eingeloggt? → Redirect zu /login
↓
Login/Signup erfolgreich → Token in localStorage
↓
Redirect zu / → Todo-App
↓
Logout → Token gelöscht → Redirect zu /login
```

## API Endpoints

### Auth
- `POST /api/auth/signup` - Registrieren
- `POST /api/auth/login` - Einloggen, Token erhalten

### Todos (JWT erforderlich)
- `GET /api/todos` - Todos des eingeloggten Users laden
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
- [x] JWT Authentication
- [x] Protected Routes
- [ ] Drag & Drop
- [ ] Kategorien/Tags
- [ ] Fälligkeitsdatum

---

**Mehmet Furkan Özer**  
GitHub: [@furo50](https://github.com/furo50)