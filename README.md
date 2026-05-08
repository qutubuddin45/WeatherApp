 Tech Stack Decision

The preferred stack for this project was JavaScript/TypeScript-based full-stack development, and I chose to use:

- Next.js
- Node.js
- Express.js
- MongoDB
- TypeScript
- Tailwind CSS

This stack was selected because it provides:

- Fast frontend development with Next.js
- Scalable backend architecture using Express.js
- Flexible NoSQL database integration with MongoDB
- Type safety using TypeScript
- Rapid responsive UI development using Tailwind CSS

Using a unified JavaScript/TypeScript ecosystem improved development speed and simplified frontend-backend integration.

 Trade-Offs

Some trade-offs of this stack include:

- MongoDB schema flexibility can lead to less strict data validation compared to SQL databases
- LocalStorage-based JWT storage is simpler but less secure than HTTP-only cookies
- Tailwind utility classes can become lengthy in larger components

Despite these trade-offs, the chosen stack was ideal for rapid development, scalability, and clean full-stack integration.


Project Overview

Weather App is a full-stack responsive weather dashboard application where users can:

Create an account and log in securely
Add and manage multiple cities
View real-time weather data
Mark favorite cities
Delete cities
Access a modern and responsive UI

The application uses a weather API to fetch live weather information and stores user-specific data securely in MongoDB.

Frontend
Next.js
TypeScript
Tailwind CSS
SweetAlert2

Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication

External API
OpenWeather API

Used for:

Real-time weather data
Temperature
Weather conditions


Setup Instructions
Local Setup
1. Clone Repository
git clone <repository-url>

Backend Setup
Navigate to backend
cd backend
npm install

create .env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
WEATHER_API_KEY=your_weather_api_key

RUN BACKEND
npx nodemon server.js
http://localhost:5000

FRONTEND SETUP
Navigate to frontend
cd frontend
npm install
npm run dev
http://localhost:3000

High-Level Architecture
Frontend (Next.js)
       ↓
REST API Calls
       ↓
Backend (Express.js)
       ↓
MongoDB Database
       ↓
OpenWeather API


Authentication & Authorization

The project uses JWT-based authentication.

Authentication Flow
User registers
Password is hashed using bcrypt
User logs in
JWT token is generated
Token is stored in localStorage
Protected routes validate token using middleware


Authorization

Authorization middleware ensures:

Only logged-in users can access dashboard
Users can only modify their own cities
Unauthorized requests return 401/403 errors

Creative / Custom Features
⭐ Favorites System

Users can:

Mark cities as favorites
Favorite cities appear highlighted
Favorites improve dashboard organization

Modern Weather UI

Custom responsive UI includes:

Cloudy weather background
Glassmorphism cards
Animated hover effects
Responsive layouts for all devices


SweetAlert Integration

Used for:

Login success/error alerts
Delete confirmations
Favorite updates
Better user experience

Service Layer Pattern

Weather API logic is separated into:
services/weatherService.js

Future Improvements
Add hourly forecast
Add weather icons and animations
Add dark/light mode
Add geolocation support
Add secure cookie authentication
