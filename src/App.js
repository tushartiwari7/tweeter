import { Route, Routes } from "react-router-dom";
import "./App.css";
import { User } from "./components";
import { Login, Profile, Dashboard } from "./pages";
import { RequireAuth } from "./components";

function App() {
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
          <Route index element={<h2>404 page</h2>} />
          <Route path=":profileId" element={<Profile />}>
            <Route index element={<User />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
