import "./App.css";
import ProdcutPage from "./pages/admin/prodcut/ProdcutPage";
import { Routes, Route } from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import { lazy, Suspense } from "react";
import AdminSkeleton from "./components/admin/AdminSkeleton";
import Loading from "./components/Loading/Loading";

import Category from "./components/admin/category/Category";
const AuthenticationSkeleton = lazy(
  () => import("@/components/Authentication/AuthenticationSkeleton"),
);
const NewProduct = lazy(() => import("@/pages/admin/prodcut/NewProduct"));
const UpdateItem = lazy(
  () => import("@/components/admin/product/form/UpdateItem"),
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
                  <ProdcutPage></ProdcutPage>
                </Suspense>
              }
            >
             
            </Route>
             <Route
                path="updateItem/:id"
                element={
                  <Suspense >
                    <UpdateItem ></UpdateItem>
                  </Suspense>
                }
              ></Route>
            <Route
              path="newProduct"
              element={
                <Suspense>
                  <NewProduct></NewProduct>
                </Suspense>
              }
            ></Route>
            <Route
              path="update/:id"
              element={
                <Suspense>
                  <UpdateItem></UpdateItem>
                </Suspense>
              }
            ></Route>
            <Route
              path="category"
              element={
                <Suspense fallback={<Loading></Loading>}>
                  <Category></Category>
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
