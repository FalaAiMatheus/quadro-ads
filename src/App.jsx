import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routers/Home";
import Curso from "./routers/Curso";
import Sobre from "./routers/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="flex mx-auto mt-[2.6875rem] shadow-md w-full max-w-[1379px] bg-white rounded-[1.625rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="curso" element={<Curso />} />
            <Route path="sobre" element={<Sobre />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
