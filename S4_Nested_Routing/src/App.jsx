import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import EventsDetailPage from "./pages/EventsDetailPage";
import NewEventsPage from "./pages/NewEventsPage";
import EventsLayout from "./layouts/EventsLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,

      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        {
          path: "events",
          element: <EventsLayout />,
          children: [
            { index: true, element: <EventsPage /> },
            { path: ":eventId", element: <EventsDetailPage /> },
            { path: "new", element: <NewEventsPage /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
