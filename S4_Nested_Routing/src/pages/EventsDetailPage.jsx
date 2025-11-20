import React from "react";
import { Link, useParams } from "react-router-dom";
import events from "../data/event";

export default function EventsDetailPage() {
  const { eventId } = useParams();

  // find event by id
  const event = events.find((ev) => ev.id === eventId);

  // If invalid id
  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-red-600">Event Not Found</h2>
        <Link
          to=".."
          relative="path"
          className="mt-4 px-4 py-2 bg-[var(--color-primary)] text-white rounded-full"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover brightness-95"
          />

          {/* Date badge */}
          <div className="absolute left-4 top-4 bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
            {new Date(event.date).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>

          {/* Price badge */}
          <div className="absolute right-4 top-4 bg-[var(--color-soft)] text-[var(--color-primary-dark)] px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            {event.price}
          </div>
        </div>

        {/* Details content */}
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)]">
            {event.title}
          </h1>

          <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
            {event.shortDescription}
          </p>

          {/* Info */}
          <div className="mt-6 space-y-2 text-gray-700 text-sm">
            <p>
              <strong className="text-[var(--color-primary)]">Date:</strong>{" "}
              {event.date}
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">Time:</strong>{" "}
              {event.time}
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">Location:</strong>{" "}
              {event.location}
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">Price:</strong>{" "}
              {event.price}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[var(--color-soft)] text-[var(--color-primary-dark)] rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => alert(`Registering for ${event.title}...`)}
              className="px-5 py-2 bg-[var(--color-accent)] text-black font-semibold rounded-full hover:brightness-105"
            >
              Register
            </button>

            <Link
              to=".."
              relative="path"
              className="px-5 py-2 bg-[var(--color-primary)] text-white rounded-full hover:brightness-110"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
