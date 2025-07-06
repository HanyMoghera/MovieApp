# 🎬 React Movie Search App

A sleek and modern web application that allows users to browse popular movies, search by title, and manage a list of favorite movies. This app uses **React**, **React Context**, and the [TMDB API](https://www.themoviedb.org/documentation/api) to deliver a responsive movie discovery experience.

## 🚀 Features

- 🔍 Search for movies using keywords  
- 🔥 Browse trending/popular movies  
- ⭐ Mark movies as favorites and store them in localStorage  
- ❤️ View and manage a list of your favorite movies  
- 🌐 Integrates with [The Movie Database API](https://www.themoviedb.org/documentation/api)  
- 📱 Fully responsive and mobile-friendly UI  
- ⚛️ Global state management with React Context  

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Context API  
- **Styling**: CSS Modules  
- **API**: TMDB (The Movie Database)  
- **State Management**: React useContext + useState + useEffect  
- **Persistence**: localStorage  

## 📁 Project Structure

```
project/
│
├── components/            # Reusable components like MovieCard, NavBar
├── contexts/              # MovieContext for global state
├── pages/                 # Home and Favorites pages
├── services/              # API calls to TMDB
├── css/                   # App styling
├── App.js                 # Root component
├── index.js               # React DOM rendering
└── README.md
```

## 📦 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/react-movie-search.git
cd react-movie-search
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file (optional)**

If you want to hide your TMDB API key, you can create a `.env` file:

```env
REACT_APP_TMDB_API_KEY=your_api_key_here
```

> Then update the API calls to use `process.env.REACT_APP_TMDB_API_KEY`.

4. **Start the development server**

```bash
npm start
```

Visit the app at: [http://localhost:3000](http://localhost:3000)

---

## 🧠 How It Works

- On load, the app fetches and displays **popular movies** from the TMDB API.
- Users can type a query in the search bar and fetch matching movies.
- Clicking the ⭐ icon adds a movie to your **Favorites**, stored in `localStorage`.
- The Favorites page displays your saved movies even after refreshing.
- All state is managed using **React Context API**.

---

## 🧪 API Usage

Using [TMDB API](https://developers.themoviedb.org/3):

- `GET /movie/popular` – Returns trending/popular movies  
- `GET /search/movie?query=xyz` – Returns search results for movie titles

Make sure to replace `"YOUR_API_KEY"` with your own TMDB key.

---

## 🌟 Future Enhancements

- Pagination or infinite scrolling for search results  
- Movie detail modal or page  
- Dark mode  
- Genre filters  
- User authentication with Firebase or JWT  
- Integration with a backend for permanent favorite lists  


