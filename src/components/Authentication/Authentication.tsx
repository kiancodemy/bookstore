import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Loading from "../Loading/Loading";
import { refreshToken } from "@/hooks/authentication/RefreshToken";
interface AuthenticationProps {
  /** set false to disable the unmount guard */
  cancelOnUnmount?: boolean;
}

export default function Authentication({
  cancelOnUnmount = true,
}: AuthenticationProps) {
  const [ready, setReady] = useState(false);

  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;

    const bootstrap = async () => {
      try {
        await refreshToken();
      } catch {
        // token already cleared in onError
      } finally {
        // only skip when the guard is enabled AND we've unmounted
        if (cancelOnUnmount && !alive.current) return;
        setReady(true);
      }
    };

    bootstrap();

    return () => {
      if (cancelOnUnmount) alive.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cancelOnUnmount]);

  if (!ready) return <Loading />;

  return (
    <div className="flex flex-col min-h-screen">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
