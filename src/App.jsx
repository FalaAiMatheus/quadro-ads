import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routers/Home";
import Curso from "./routers/Course/Curso";
import Sobre from "./routers/Sobre";
import { Activity } from "./routers/Activities/Activity";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="flex mx-auto mt-[2.6875rem] shadow-md w-full max-w-[1379px] bg-white rounded-[1.625rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="curso/*" element={<Curso />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="atividades/*" element={<Activity />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
