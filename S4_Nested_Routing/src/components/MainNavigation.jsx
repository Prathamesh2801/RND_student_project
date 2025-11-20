import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <nav className="bg-[var(--color-primary)] text-white">
      <ul className="flex items-center justify-center p-5 space-x-10">
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
