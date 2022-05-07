import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Profile, Dashboard, ComponentDisplay } from "./pages";

function App() {
  fetch("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path=":profileId" element={<Profile />} />
        </Route>
        <Route path="/temp" element={<ComponentDisplay/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
