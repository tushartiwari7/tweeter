import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Login,
  Profile,
  Dashboard,
  ComponentDisplay,
  FollowInsights,
  NotFound,
} from "./pages";
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
            <Route path="followers" element={<FollowInsights />} />
            <Route path="followings" element={<FollowInsights />} />
          </Route>
        </Route>
        <Route path="/temp" element={<ComponentDisplay />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
