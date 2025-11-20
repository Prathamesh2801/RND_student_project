import React from 'react';
import homeImg from '../assets/img/homeBG.png';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src={homeImg}
        alt="Events background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        style={{ zIndex: 0 }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(61,44,141,0.6) 0%, rgba(241,90,41,0.18) 60%)',
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-4xl text-center px-6 py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white drop-shadow-lg">
          Discover & Book Amazing Events Near You
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-[rgba(255,255,255,0.92)] max-w-2xl mx-auto">
          From concerts and conferences to workshops and weddings — explore curated events,
          buy tickets, and manage bookings in one place.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="px-6 py-3 rounded-full bg-[var(--color-accent)] text-black font-semibold transition transform hover:scale-[1.02] hover:brightness-110"
            aria-label="Explore events"
          >
            Explore Events
          </button>

          <button
            className="px-6 py-3 rounded-full border border-white text-white bg-transparent font-medium transition hover:bg-white hover:text-black"
            aria-label="Create event"
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
}
