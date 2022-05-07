import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Profile, Dashboard } from "./pages";
import { RequireAuth } from "./components";

function App() {
  fetch("");

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path=":profileId" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
