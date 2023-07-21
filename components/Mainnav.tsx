"use client";

import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Link from "next/link";

const Mainnav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      name: `/${[params.storeId]}`,
      label: "OverView",
      active: pathname === `/${params.storeId}`,
    },
    {
      name: `/${[params.storeId]}/billboards`,
      label: "Billboads",
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      name: `/${[params.storeId]}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.name}
          href={route.name}
          passHref
          className={cn(
            "text-base font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white font-semibold"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default Mainnav;
