import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFound";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="*" element={<NotFoundPage />} />

      <Route path="/" element={<LandingPage />} />
    </Route>
  )
);
