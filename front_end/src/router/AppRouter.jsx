// Importing necessary components from React Router
import { Routes, Route } from "react-router-dom";
// Importing page components
import { Home } from "../components/pages/Home.jsx";
import { SearchEvent } from "../components/pages/SearchEvent.jsx";

// Defining the router component
export const AppRouter = () => {
  return (
    // Using the Routes component to define routes
    <Routes>
      {/* Route for the home page */}
      <Route exact path='/' element={<Home />} />
      {/* Route for the search event page */}
      <Route path='/search-event' element={<SearchEvent />} />
    </Routes>
  );
};