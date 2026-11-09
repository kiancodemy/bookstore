import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Loading/Loading";
/// when user enters the site for first time it reload the user information by reset token if is not expired ///

export default function Authentication() {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      console.log("it is done ");
      setLoading(false);
    }, 50);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {loading && <Loading></Loading>}
      {open && <Outlet></Outlet>}
    </div>
  );
}
