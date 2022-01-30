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
        <Route path="/signup" element={<CreateUser />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;