import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Profile, Dashboard, ComponentDisplay, NotFound } from "./pages";
import { User } from "./components";
import { RequireAuth } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="/:profileId" element={<Profile />}>
            <Route index element={<User />} />
          </Route>
        </Route>
        <Route path="/temp" element={<ComponentDisplay />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
