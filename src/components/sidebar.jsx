import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/powertein-logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import {
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  ShoppingCartIcon,
  NewspaperIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/20/solid";

import { ChevronUp } from "lucide-react";

const items = [
  {
    title: "Protein Calculator",
    url: "/calculator",
    icon: CalculatorIcon,
    colors: {
      default: "text-gray-500",
      hover: "text-blue-700",
      active: "text-blue-900",
    },
  },
  {
    title: "Protein Tracker",
    url: "/tracker",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "ProteinMart",
    url: "#",
    icon: ShoppingCartIcon,
  },
  {
    title: "ProteinPedia",
    url: "#",
    icon: NewspaperIcon,
  },
  {
    title: "ProteinBot",
    url: "#",
    icon: ChatBubbleLeftRightIcon,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar variant="floating" className="bg-white">
      <SidebarHeader className="p-4 mb-4">
        <a href="/home" className="block">
          <img
            src={Logo}
            alt="Powertein Logo"
            className="h-8 w-32 hover:opacity-80 transition-opacity"
          />
        </a>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="p-2 gap-5">
          {items.map((item) => {
            const isActive = location.pathname === item.url;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`h-full w-full transition-colors ${
                    isActive
                      ? "bg-blue-50 hover:bg-blue-50"
                      : "hover:bg-blue-50"
                  }`}
                >
                  <Link
                    to={item.url}
                    className="flex items-center gap-3 px-3 py-2"
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        isActive ? "text-primary-500" : "text-gray-400"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        isActive ? "text-primary-500" : "text-gray-400"
                      }`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex flex-row px-3 bg-gray-100 h-full text-sm text-gray-500 hover:text-gray-500">
                  <div className="flex flex-col gap-0 font-medium">
                    Username
                    <span className="text-xs font-normal text-gray-400">
                      User@mail.com
                    </span>
                  </div>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width] mb-1"
              >
                <DropdownMenuItem>
                  <Link to="#">Profile</Link>
                </DropdownMenuItem>

                <Dialog>
                  <DialogTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      Sign Out
                    </DropdownMenuItem>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader className="gap-1 mb-2">
                      <DialogTitle className="text-lg font-semibold text-gray-800">
                        Are you sure want to sign out?
                      </DialogTitle>
                      <DialogDescription className="text-sm font-normal text-gray-400">
                        When signed out, you will need to login again to access
                        powertein full feature.
                      </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button
                          variant="default"
                          className="bg-white border-gray-300 border-1 text-gray-600 text-sm font-medium hover:bg-white"
                        >
                          Cancel
                        </Button>
                      </DialogClose>
                      <Link to="/home">
                        <Button
                          type="default"
                          className="bg-red-600 hover:bg-red-600 text-white text-sm font-medium"
                        >
                          Sign Out
                        </Button>
                      </Link>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
