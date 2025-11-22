import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./components/pages/Home";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jamey" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
