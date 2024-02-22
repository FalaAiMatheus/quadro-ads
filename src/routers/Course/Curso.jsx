import { Route, Routes } from "react-router-dom";
import HomeCourse from "./HomeCouse";

function Curso() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeCourse />} />
      </Routes>
    </>
  );
}

export default Curso;
