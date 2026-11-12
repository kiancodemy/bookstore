import { useState } from "react";
import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import MobileDashboar from "./MobileDashboar";
export default function AdminSkeleton() {
  const [open, setopen] = useState(false);

  return (
    <div className="max-w-full min-h-screen p-1 md:p-4 bg-gray-100 container">
      <div className="flex items-start">
        <Dashboard open={open}></Dashboard>
        {open&&<MobileDashboar setopen={setopen}></MobileDashboar>}
       
        
        <div className="flex grow gap-y-8 flex-col p-2">
          <AdminHeader select={setopen}></AdminHeader>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
