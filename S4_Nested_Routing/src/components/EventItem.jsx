// src/components/EventItem.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function EventItem({ event }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm hover:shadow-xl transition transform hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-44 md:h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover brightness-90"
        />

        {/* Date badge */}
        <div className="absolute left-4 top-4 bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
          {new Date(event.date).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
          })}
        </div>

        {/* Price pill */}
        <div className="absolute right-4 top-4 bg-[var(--color-soft)] text-[var(--color-primary-dark)] px-3 py-1 rounded-full text-xs font-medium shadow-sm">
          {event.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[var(--color-primary-dark)]">
          {event.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {event.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="inline-block bg-[var(--color-bg)] text-[var(--color-primary-dark)] px-2 py-1 rounded-full text-xs">
              {event.time}
            </span>

            <span className="inline-block text-sm text-gray-500">{event.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/events/${event.id}`}
              className="px-3 py-1.5 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium hover:brightness-95 transition"
            >
              Details
            </Link>

            <button
              className="px-3 py-1.5 rounded-full bg-[var(--color-accent)] text-black font-semibold text-sm hover:brightness-105 transition"
              onClick={() => alert(`Registering for ${event.title} (demo)`)}
            >
              Register
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {event.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-md bg-[var(--color-soft)] text-[var(--color-primary-dark)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
