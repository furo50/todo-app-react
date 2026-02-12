# ✨ Todo App - Frontend

Eine moderne, responsive Todo-Anwendung gebaut mit React und Vite. Vollständige CRUD-Funktionalität mit Filter-Optionen, Fortschritts-Tracking, Dark Mode und ansprechenden Animationen.

## 🚀 Features

- ✅ **Todo-Management**: Erstellen, Bearbeiten, Löschen und Abhaken von Aufgaben
- 🎯 **Smart Filtering**: Zeige alle, aktive oder erledigte Aufgaben
- 📊 **Fortschritts-Tracking**: Visueller Fortschrittsbalken mit Statistiken
- 🌙 **Dark Mode**: Umschaltbar zwischen hellem und dunklem Theme mit localStorage-Persistenz
- ✏️ **Inline-Editing**: Doppelklick auf Todo-Text zum Bearbeiten
- 💾 **Backend-Integration**: Verbindung zu Spring Boot REST API
- 🎨 **Moderne UI**: Gradient-Design mit smooth Animationen und Theme-System
- 📱 **Responsive**: Funktioniert auf Desktop und Mobile
- ⚡ **Fast**: Gebaut mit Vite für optimale Performance

## 🛠️ Tech Stack

- **React** 18.x - UI Framework
- **Vite** - Build Tool & Dev Server
- **Axios** - HTTP Client für API-Calls
- **CSS3** - Styling mit Animationen & CSS Variables
- **Component Architecture** - Modulare, wiederverwendbare Komponenten
- **localStorage** - Theme-Präferenz Speicherung

## 📋 Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder yarn
- Laufendes Backend (siehe [todo-app-backend](https://github.com/furo50/todo-app-backend))

## 🔧 Installation

1. **Repository klonen:**
```bash
git clone https://github.com/furo50/todo-app-react.git
cd todo-app-react
```

2. **Dependencies installieren:**
```bash
npm install
```

3. **Development Server starten:**
```bash
npm run dev
```

4. **Öffne den Browser:**
```
http://localhost:5173
```

## 🏗️ Projekt-Struktur
```
src/
├── components/
│   ├── TodoInput/       # Eingabefeld für neue Todos
│   ├── TodoItem/        # Einzelnes Todo mit Checkbox, Edit & Delete
│   ├── TodoList/        # Liste aller Todos
│   ├── TodoFilter/      # Filter-Buttons (Alle/Aktiv/Erledigt)
│   ├── TodoStats/       # Fortschrittsbalken & Statistiken
│   └── ThemeToggle/     # Dark Mode Toggle mit Sonne/Mond Icons
├── todoApi.js           # Axios API Service
├── App.jsx              # Haupt-Komponente
├── App.css              # Theme System mit CSS Variables
└── main.jsx             # Entry Point
```

## 🎨 Theme System

Das Projekt nutzt ein **CSS Variables basiertes Theme-System**:

- 🌞 **Light Mode**: Lila Gradient mit hellen Farben
- 🌙 **Dark Mode**: Dunkler Navy-Blau Hintergrund mit optimierten Kontrasten
- 💾 **Persistenz**: Theme-Wahl wird in localStorage gespeichert
- 🔄 **Smooth Transitions**: Flüssige Übergänge zwischen Themes

Toggle-Button befindet sich rechts oben und wechselt zwischen Sonne ☀️ und Mond 🌙 Icons.

## 🌐 API Endpoints

Das Frontend kommuniziert mit folgenden Backend-Endpoints:

- `GET /api/todos` - Alle Todos abrufen
- `POST /api/todos` - Neues Todo erstellen
- `PUT /api/todos/:id` - Todo aktualisieren
- `DELETE /api/todos/:id` - Todo löschen

**Backend-Repository:** [todo-app-backend](https://github.com/furo50/todo-app-backend)

## 📦 Build für Production
```bash
npm run build
```

Die optimierten Dateien landen im `dist/` Ordner.

## 🎯 Zukünftige Features

- [x] ✅ Bearbeiten-Funktion für Todo-Text
- [x] 🌙 Dark Mode Toggle
- [ ] 🎨 Weitere Theme-Optionen (Blue, Green, etc.)
- [ ] 📋 Drag & Drop zum Umsortieren
- [ ] 🏷️ Kategorien/Tags
- [ ] 📅 Fälligkeitsdatum
- [ ] 🔔 Benachrichtigungen

## 👤 Autor

**Mehmet Furkan Özer**

- GitHub: [@furo50](https://github.com/furo50)

## 📄 Lizenz

Dieses Projekt steht unter der MIT Lizenz.