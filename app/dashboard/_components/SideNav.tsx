"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import { useRouter } from 'next/navigation';

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="p-5 relative border shadow-sm h-screen">
      <div className="flex justify-center mb-10">
        <a href="/"><Image src={"/logo.png"} alt="logo" width={80} height={100} /></a>
        
      </div>

      <div>
        {MenuList.map((menu, index) => (
          <div
            onClick={() => router.push(menu.path)}
            className={`flex p-2 mb-2 gap-2  ml-5 hover:bg-[#8046FD] hover:text-white rounded-lg cursor-pointer items-center ${
              path == menu.path && "bg-[#8046FD] text-white"
            }`}
          >
            <menu.icon className="w-6 h-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 w-full pr-5">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
