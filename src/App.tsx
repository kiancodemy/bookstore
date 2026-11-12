import "./App.css";
import { Routes, Route } from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import { lazy, Suspense } from "react";
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
              <Suspense fallback={<Loading></Loading>}>
                <AuthenticationSkeleton></AuthenticationSkeleton>
              </Suspense>
            }
          ></Route>
          <Route
            path="resetpassword"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <ResetPassword></ResetPassword>
              </Suspense>
            }
          ></Route>

          <Route
            path="resetpassword"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <ResetPassword></ResetPassword>
              </Suspense>
            }
          ></Route>
          <Route path="admin" element={<AdminSkeleton></AdminSkeleton>}>
            <Route
              path="products"
              element={
                <Suspense fallback={<Loading></Loading>}>
                  <div className="bg-white p-4 rounded-md">it is all about prodcuts</div>
                </Suspense>
              }
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
