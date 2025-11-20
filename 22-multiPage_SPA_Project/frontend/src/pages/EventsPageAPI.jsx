import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPageAPI() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPageAPI;

// These will still runs on browser not on the server

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return {isError:true,message:'Could not fetch events. '}
    // throw { message: "Could not fetch events." };
    throw new Response(JSON.stringify({ message: "Could Not fetch events." }), {
      status: 500,
    });
    // return json() // these is the older version
  } else {
    // const resData = await response.json();
    // return resData.events;
    // const res = new Response('any data',{status:201});
    return response;
  }
}
