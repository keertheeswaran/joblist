import { Route, Routes } from "react-router-dom";
import JobList from "./pages/JobList";
import Header from "./Common/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />}></Route>
      </Routes>
    </>
  );
}

export default App;
