import { Route, Routes } from "react-router-dom";
import { HomeCourse } from "./HomeCouse";

export function Curso() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeCourse />} />
      </Routes>
    </>
  );
}

export default Curso;
