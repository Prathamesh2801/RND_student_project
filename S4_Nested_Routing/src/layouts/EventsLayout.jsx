import React from "react";
import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventNavigation";

export default function EventsLayout() {
  return (
    <div>
      <EventNavigation />
      <Outlet />
    </div>
  );
}
