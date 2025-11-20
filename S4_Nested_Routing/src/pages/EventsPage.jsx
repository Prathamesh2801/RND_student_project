
import events from "../data/event";
import EventItem from "../components/EventItem";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <header className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
            All Events
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Browse upcoming events — concerts, conferences, workshops and more. Click an event for details or register directly.
          </p>
        </header>

        {/* Events grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((ev) => (
              <EventItem key={ev.id} event={ev} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
