import React from "react";
import { NavLink } from "react-router-dom";

export default function EventNavigation() {
  return (
    <div className="flex items-center justify-center py-6 bg-bgSoft">
      <ul className="flex gap-6">
        <li>
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              [
                "px-5 py-2 rounded-full transition font-medium",
                isActive
                  ? "bg-[var(--color-accent)] text-black shadow-md"
                  : "bg-[var(--color-soft)] text-[var(--color-primary-dark)] hover:bg-[var(--color-accent-light)] hover:text-black"
              ].join(" ")
            }
          >
            All Events
          </NavLink>
        </li>

        <li>
          <NavLink
            to="new"
            className={({ isActive }) =>
              [
                "px-5 py-2 rounded-full transition font-medium",
                isActive
                  ? "bg-[var(--color-accent)] text-black shadow-md"
                  : "bg-[var(--color-soft)] text-[var(--color-primary-dark)] hover:bg-[var(--color-accent-light)] hover:text-black"
              ].join(" ")
            }
          >
            New Event
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
