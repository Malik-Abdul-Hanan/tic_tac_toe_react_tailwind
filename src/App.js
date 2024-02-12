import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";

const routes = [
  {path: "/", element: <Index />}
]

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
