# Solar PV Rooftop Analytics

A web-based **Solar PV Rooftop Analytics** application designed to help users analyze rooftop solar potential, visualize relevant data, and make better decisions about solar photovoltaic (PV) installations.

## Overview

Solar PV Rooftop Analytics provides an interactive interface for analyzing rooftop solar opportunities. The application is built as a modern React + TypeScript web application with a focus on data visualization, usability, and solar-energy analysis.

The project is intended to make rooftop solar assessment more accessible by bringing important analytical information into a single interactive dashboard.

## Features

* 📊 Interactive solar PV analytics dashboard
* ☀️ Rooftop solar potential analysis
* 📈 Data visualization using interactive charts
* 🗺️ Location and rooftop-related analysis
* 🔢 Solar-related calculations and analytical metrics
* 📱 Responsive and user-friendly interface
* ⚡ Fast Vite-based development environment
* 🎨 Modern UI with Tailwind CSS
* 🤖 Google Gemini / GenAI integration support
* 🧩 Modular React component architecture

## Tech Stack

| Technology   | Purpose                         |
| ------------ | ------------------------------- |
| React        | Frontend UI                     |
| TypeScript   | Type-safe development           |
| Vite         | Development and build tool      |
| Tailwind CSS | Styling                         |
| Recharts     | Data visualization              |
| Lucide React | Icons                           |
| Motion       | UI animations                   |
| Google GenAI | AI capabilities                 |
| Express      | Supporting server functionality |
| Bun          | Package/dependency management   |

## Project Structure

```text
Solar-PV-Rooftop-Analytics/
│
├── assets/
│   └── .aistudio/
│
├── src/
│   ├── components/
│   ├── data/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
│
├── .env.example
├── .gitignore
├── bun.lock
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

Make sure you have a JavaScript/TypeScript runtime and package manager installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/saifan30/Solar-PV-Rooftop-Analytics.git
```

Navigate to the project directory:

```bash
cd Solar-PV-Rooftop-Analytics
```

Install dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The application will be available on the local development server provided by Vite.

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs TypeScript checking without emitting files.

## Environment Variables

If environment variables are required, create a `.env` file based on the provided `.env.example` file.

**Do not commit private API keys or other secrets to GitHub.**

## Application Architecture

The application follows a modular React architecture:

* **App layer** — Main application interface and routing/state coordination.
* **Components** — Reusable UI components.
* **Data layer** — Solar and analytical data used by the application.
* **Types** — TypeScript type definitions shared across the application.
* **Visualization** — Recharts-based charts and analytical visualizations.
* **Styling** — Tailwind CSS and application-level CSS.
* **AI Integration** — Google GenAI support for AI-powered functionality.

## Use Cases

Solar PV Rooftop Analytics can be useful for:

* Rooftop solar feasibility analysis
* Solar potential exploration
* Energy-related data visualization
* Comparing solar-related metrics
* Educational and demonstration purposes
* Exploring AI-assisted solar analytics

## Future Improvements

Possible future enhancements include:

* More detailed rooftop assessment
* Improved solar generation estimation
* Additional geographical analysis
* More advanced AI-assisted recommendations
* Historical and real-time solar data integration
* Exportable analytical reports
* Additional visualization and comparison tools

## Project Status

🚧 **Active Development**

The project is currently under development and features may continue to evolve.

## Author

**Saifan Khalfe**

GitHub: [@saifan30](https://github.com/saifan30)

---

⭐ If you find this project useful, consider giving the repository a star.
