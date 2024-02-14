import { Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home.jsx";
import { SearchEvent } from "../components/pages/SearchEvent.jsx";

export const AppRouter = () => {
  return(
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route path='search-event' element={<SearchEvent />}></Route>
    </Routes>
  )
};