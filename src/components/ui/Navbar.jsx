import * as React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Mens Wear",
    href: "/collections/men",
    description:
      "See Our Best Collections of Mens Wear for sale at the most reasonable prices.",
  },
  {
    title: "Womens Wear",
    href: "/collections/women",
    description:
      "We have the latest collection of womens wear for sale at the most reasonable prices.",
  },
  {
    title: "Kids Wear",
    href: "/collections/kids",
    description:
      "We have the latest collection of kids wear for sale at the most reasonable prices.",
  },
  {
    title: "Jeans",
    href: "/collections/jeans",
    description:
      "We have the latest collection of jeans for sale at the most reasonable prices.",
  },
  {
    title: "T-Shirts",
    href: "/collections/tshirts",
    description:
      "We have the latest collection of t-shirts for sale at the most reasonable prices.",
  },
  {
    title: "Trousers",
    href: "/collections/trousers",
    description:
      "We have the latest collection of trousers for sale at the most reasonable prices.",
  },
];

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavLink
            to="/"
            className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}
          >
            Home
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-md">
            Category
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  className="rounded-md"
                  key={component.title}
                  title={component.title}
                  to={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink
            to="/"
            className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}
          >
            Documentation
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <NavLink
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </NavLink>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
