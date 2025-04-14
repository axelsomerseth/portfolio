import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, HomeIcon } from "@heroicons/react/24/outline";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";
import { NavLink, useLocation } from "react-router";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white dark:bg-black">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <ThemeSwitcher />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 theme"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          {location.pathname === "/" ? (
            <HomeIcon
              aria-hidden="true"
              className="size-6 text-white dark:text-black"
            />
          ) : (
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                (isActive ? "text-primary" : "") +
                " text-sm/6 font-semibold transition hover:text-primary dark:hover:text-primary"
              }
            >
              <HomeIcon aria-hidden="true" className="size-6" />
            </NavLink>
          )}
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              (isActive ? "text-primary" : "") +
              " text-sm/6 font-semibold transition hover:text-primary dark:hover:text-primary"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/experience"}
            className={({ isActive }) =>
              (isActive ? "text-primary" : "") +
              " text-sm/6 font-semibold transition hover:text-primary dark:hover:text-primary"
            }
          >
            Experience
          </NavLink>
          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              (isActive ? "text-primary" : "") +
              " text-sm/6 font-semibold transition hover:text-primary dark:hover:text-primary"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to={"/uses"}
            className={({ isActive }) =>
              (isActive ? "text-primary" : "") +
              " text-sm/6 font-semibold transition hover:text-primary dark:hover:text-primary"
            }
          >
            Uses
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:gap-5 lg:justify-end">
          <LanguageSwitcher />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto theme px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <ThemeSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 theme"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {location.pathname === "/" ? (
                  <></>
                ) : (
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      (isActive
                        ? "text-primary hover:bg-gray-200"
                        : "hover:bg-primary") +
                      " -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                    }
                  >
                    <HomeIcon aria-hidden="true" className="size-6" />
                  </NavLink>
                )}
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    (isActive
                      ? "text-primary hover:bg-gray-200"
                      : "hover:bg-primary") +
                    " -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to={"/experience"}
                  className={({ isActive }) =>
                    (isActive
                      ? "text-primary hover:bg-gray-200"
                      : "hover:bg-primary") +
                    " -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                  }
                >
                  Experience
                </NavLink>
                <NavLink
                  to={"/projects"}
                  className={({ isActive }) =>
                    (isActive
                      ? "text-primary hover:bg-gray-200"
                      : "hover:bg-primary") +
                    " -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                  }
                >
                  Projects
                </NavLink>
                <NavLink
                  to={"/uses"}
                  className={({ isActive }) =>
                    (isActive
                      ? "text-primary hover:bg-gray-200"
                      : "hover:bg-primary") +
                    " -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                  }
                >
                  Uses
                </NavLink>
              </div>
              <div className="py-6 flex justify-between">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
