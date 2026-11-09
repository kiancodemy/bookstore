import "./App.css";
import { Routes, Route } from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import AuthenticationSkeleton from "./components/Authentication/AuthenticationSkeleton";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentication />}>
          <Route index element={<AuthenticationSkeleton ></AuthenticationSkeleton>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
