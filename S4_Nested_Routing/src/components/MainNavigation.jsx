import React from "react";
import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--color-primary)]/95 text-white backdrop-blur-lg shadow-md z-50">
      <ul className="flex items-center justify-center p-5 space-x-10">
        {/* Home */}
        <li>
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              isActive
                ? "text-[var(--color-accent)] font-semibold"
                : "text-white hover:text-[var(--color-accent)]"
            }
          >
            Home
          </NavLink>
        </li>

        {/* About */}
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive
                ? "text-[var(--color-accent)] font-semibold"
                : "text-white hover:text-[var(--color-accent)]"
            }
          >
            About
          </NavLink>
        </li>

        {/* Events */}
        <li>
          <NavLink
            to="events"
            className={({ isActive }) =>
              isActive
                ? "text-[var(--color-accent)] font-semibold"
                : "text-white hover:text-[var(--color-accent)]"
            }
          >
            Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
