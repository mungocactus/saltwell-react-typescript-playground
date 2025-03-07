import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageHome from "./components/PageHome.tsx";
// import PageNasa from "./components/PageNasa.tsx";
import PageWeather from "./components/PageWeather.tsx";
import PageWeatherTanStack from "./components/PageWeatherTanStack.tsx";
import PageAboutYou from "./components/PageAboutYou.tsx";
import PageCurrencyConverter from "./components/PageCurrencyConverter.tsx";

const routerVariable = createBrowserRouter([
  { path: "/", element: <PageHome /> },
  { path: "/about-you", element: <PageAboutYou /> },
  { path: "/currency-converter", element: <PageCurrencyConverter /> },
  { path: "/weather", element: <PageWeather /> },
  { path: "/weather-tanstack", element: <PageWeatherTanStack /> },
]);

function App() {
  return <RouterProvider router={routerVariable} />;
}

export default App;
