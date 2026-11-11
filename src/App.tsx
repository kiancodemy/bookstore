import "./App.css";
import { Routes, Route } from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import { lazy, Suspense } from "react";
import A from "./components/admin/A";
import AdminSkeleton from "./components/admin/AdminSkeleton";
import Loading from "./components/Loading/Loading";
const AuthenticationSkeleton = lazy(
  () => import("@/components/Authentication/AuthenticationSkeleton"),
);
const ResetPassword = lazy(
  () => import("@/components/Authentication/ResetPassword"),
);
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Authentication />}>
          <Route
            path="login"
            element={
              <Suspense  fallback={<Loading></Loading>}>
                <AuthenticationSkeleton></AuthenticationSkeleton>
              </Suspense>
            }
          ></Route>
          <Route
            path="resetpassword"
            element={
              <Suspense  fallback={<Loading></Loading>}>
                <ResetPassword></ResetPassword>
              </Suspense>
            }
          ></Route>
          <Route
            path="admin"
            element={
           
                <AdminSkeleton></AdminSkeleton>
            
            }
          ></Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
