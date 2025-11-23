import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import StatPage from "./components/pages/StatPage";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='max' element={<StatPage />} />
          <Route path='gabe' element={<StatPage />} />
          <Route path='jamey' element={<StatPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
