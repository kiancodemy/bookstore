import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Loading/Loading";
/// when user enters the site for first time it reload the user information by reset token if is not expired ///

export default function Authentication() {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setOpen(true);
      console.log("it is done ");
    }, 50);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {loading && <Loading></Loading>}
      {open && (
        <div>
          <Outlet></Outlet>
          <div className="bg-black px-5 py-30  text-white flex justify-center items-center text-4xl">
            <p>فوتر</p>
          </div>
        </div>
      )}
    </div>
  );
}
