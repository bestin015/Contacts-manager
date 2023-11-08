import Layout from "./components/Layout";
import { Routes as Switch,Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

const App=()=>{
  return <><Layout></Layout>
  <Switch>
   <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />

  </Switch></>
};
export default App;