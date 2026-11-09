import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
export default function AdminSkeleton() {
  const [dateTime, setDateTime] = useState("");
  const [open, setopen] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("fa-IR", {
        timeZone: "Asia/Tehran",
        dateStyle: "full",
        timeStyle: "medium",
      });
      setDateTime(formatter.format(now));
    };

    // Update immediately, then every second
    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-full min-h-screen p-4 container">
      <div className="flex">
        <div
          className={`transition-[width] duration-300 ease-in-out p-0' bg-amber-200 md:flex  ${open ? "md:w-1/5 w-4/5" : "w-0"}`}
        ></div>
        <div className="basis-4/5 grow ">
          <AdminHeader select={setopen}></AdminHeader>
        </div>
      </div>
    </div>
  );
}
