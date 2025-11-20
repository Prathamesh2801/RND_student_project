import { Link } from "react-router-dom";

export default function EventsPage() {
  const DUMMY_EVENTS = [
    { id: "e1", title: "Event 1", desc: "Cyclothon" },
    { id: "e2", title: "Event 2", desc: "Oriental" },
    { id: "e3", title: "Event 3", desc: "Macharoos" },
  ];
  return (
    <>
      <h1>EventsPage</h1>
      <p>List of Events</p>
      <ol>
        {DUMMY_EVENTS.map((eve) => (
          <li key={eve.id}>
            <Link to={eve.id}>
              Title : {eve.title} Description : {eve.desc}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
