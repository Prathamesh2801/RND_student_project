import React from "react";
import { Link, useParams } from "react-router-dom";

export default function EventsDetailPage() {
  const params = useParams();
  return (
    <div>
      <h1>Event Details</h1>

      <p> Event Id : {params.eventId}</p>
      <Link to=".." relative="path">Go Back</Link>
    </div>
  );
}
