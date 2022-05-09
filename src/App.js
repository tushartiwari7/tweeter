import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Login,
  Profile,
  Dashboard,
  FollowInsights,
  NotFound,
  Tweets,
} from "./pages";
import { User } from "./components";
import { RequireAuth } from "./components";
import { Toaster } from "react-hot-toast";

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
          <Route index element={<Tweets />} />
          <Route path="/:profileId" element={<Profile />}>
            <Route index element={<User />} />
            <Route path="followers" element={<FollowInsights />} />
            <Route path="followings" element={<FollowInsights />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#000000",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default App;
