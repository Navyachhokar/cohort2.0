# Full-Stack Instagram Clone: State-Sync Engine

This project was built to explore the challenges of data consistency in a social media environment. It evolved from a simple feed-fetching exercise into a robust **4-Layer Architecture** implementation.

## 🛠️ Tech Stack
- **Frontend:** React, SCSS, Context API (State Management)
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Authentication:** JWT & Cookies

## 🏗️ The 4-Layer Architecture
To solve the "Infinite Loop" and "Stale Data" issues common in complex React apps, I implemented a strict separation of concerns:
1. **API Layer:** Raw Axios calls to the backend.
2. **Service Layer:** Handling business logic and data formatting.
3. **Hook Layer:** Custom hooks (`usePost`) to manage optimistic UI updates and side effects.
4. **Context Layer:** A global state that ensures the `Nav` and `Sidebar` are always in sync.

## ✨ Key Features
- **Real-time Stats:** Follower and Following counts update instantly across components when a request is accepted.
- **Smart Suggestions:** Backend-level filtering ensures you never see yourself or people you already follow in your suggestions.
- **Request Management:** A centralized notification system to accept or reject follow requests with immediate UI feedback.

## 🚀 How to Run
1. Clone the repo: `git clone https://github.com/Navyachhokar/cohort2.0.git`
2. Navigate to the project: `cd backend/day13`

### Start Backend
3. `cd Backend`
4. `npm install`
5. `npm start`

### Start Frontend
6. Open a new terminal
7. `cd backend/day13/Frontend`
8. `npm install`
9. `npm run dev`