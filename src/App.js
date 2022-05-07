import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Profile } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:profileId" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
