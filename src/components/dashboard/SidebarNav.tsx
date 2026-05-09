"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Candidates", href: "/candidates" },
  { name: "Recruitment", href: "/recruitment" },
  { name: "Knowledge Base", href: "/knowledge-base" },
  { name: "AI Assistant", href: "/ai-assistant" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
      {navigation.map((item) => {
        const isActive =
          pathname === item.href || pathname?.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive
                ? "bg-blue-50 text-blue-700 dark:bg-gray-800 dark:text-blue-500"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
