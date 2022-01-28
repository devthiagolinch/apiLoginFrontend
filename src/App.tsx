import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import { CreateUser } from "./pages/createUser";
import { LoginPage } from './pages/login/index';
import { Profile } from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<CreateUser />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;