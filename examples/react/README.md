# React + FastAPI Example

This example demonstrates how to create a React frontend that communicates with a FastAPI backend using only HTML and CDN scripts (no build tools required).

## Project Structure

```
react/
├── backend/          # FastAPI backend
│   ├── app.py        # Main FastAPI application
│   └── main.py       # Server entry point
└── frontend/         # React frontend
    └── index.html    # Single HTML file with React from CDN
```

## How It Works

1. **FastAPI Backend** (`/backend/`):
   - Serves API endpoints at `http://localhost:8000`
   - The "/" endpoint returns `{"message": "Hello, FastAPI!"}`
   - The "/user/profile" endpoint returns `{"message": "User profile"}`
   - Configured with CORS to allow requests from any origin

2. **React Frontend** (`/frontend/index.html`):
   - Single HTML file with React loaded from CDN
   - No build tools or package managers required
   - Fetches data directly from FastAPI backend
   - Displays the API responses in a user-friendly interface

## Running the Application

1. **Start the FastAPI backend:**

   ```bash
   cd backend
   python main.py
   ```

   Backend will be available at: <http://localhost:8000>

2. **Open the React frontend:**
   Simply open `frontend/index.html` in your web browser, or serve it with a simple HTTP server:

   ```bash
   cd frontend
   python -m http.server 3000
   ```

   Then visit: <http://localhost:3000>

## How the "/" Endpoint is Rendered

When you open the HTML file in your browser:

1. **React App Loads**: The React application loads from CDN and renders the `App` component
2. **API Call**: The `useEffect` hook automatically triggers a fetch to `http://localhost:8000/`
3. **Data Fetching**: The React app makes an HTTP GET request to your FastAPI backend
4. **Response Handling**: The backend returns `{"message": "Hello, FastAPI!"}`
5. **UI Update**: React updates the UI to display the message from the API

The key parts of this flow:

- **CDN React**: React and ReactDOM are loaded from unpkg.com CDN
- **Babel Standalone**: JSX is transformed in the browser using Babel
- **CORS**: The FastAPI backend includes CORS middleware to allow requests from any origin
- **JSON Response**: The backend returns JSON instead of plain text so React can easily parse it
- **State Management**: React uses `useState` to manage the API response and display it in the UI

## API Endpoints

- `GET /` - Returns welcome message
- `GET /user/profile` - Returns user profile message
- `GET /docs` - FastAPI automatic documentation (Swagger UI)
- `GET /redoc` - FastAPI alternative documentation

## Development

- No build tools or package managers required
- React and Babel are loaded from CDN
- The backend uses FastAPI with automatic API documentation
- CORS is configured to allow requests from any origin
- Simply edit the HTML file and refresh the browser to see changes
