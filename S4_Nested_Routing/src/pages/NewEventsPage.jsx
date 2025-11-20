
export default function NewEventsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-10 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">

        {/* Header */}
        <h1 className="text-2xl font-bold text-[var(--color-primary)] text-center">
          Create New Event
        </h1>
        <p className="text-gray-600 text-center mt-1 mb-6">
          Fill out the details below to add a new event.
        </p>

        {/* FORM */}
        <form className="space-y-5">

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-primary-dark)] mb-1">
              Event Title
            </label>
            <input
              type="text"
              placeholder="Enter event title"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:ring-2 outline-none transition"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[var(--color-primary-dark)] mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:ring-2 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-primary-dark)] mb-1">
                Time
              </label>
              <input
                type="time"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:ring-2 outline-none"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-primary-dark)] mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="Where will it happen?"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:ring-2 outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-primary-dark)] mb-1">
              Price
            </label>
            <input
              type="text"
              placeholder="Free / ₹299 / ₹999..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:ring-2 outline-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-primary-dark)] mb-1">
              Tags
            </label>
            <input
              type="text"
              placeholder="Music, Tech, Workshop..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:ring-2 outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Add multiple tags separated by commas.
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-primary-dark)] mb-1">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Write a short event description..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:ring-2 outline-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="reset"
              className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Clear
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-[var(--color-primary)] text-white font-semibold hover:brightness-110 transition"
            >
              Create Event
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
