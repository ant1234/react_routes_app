import  EventItem from "./EventItem";
import { json, useRouteLoaderData } from "react-router-dom";

const EventsDetailPage = () => {

    const data = useRouteLoaderData('event-detail');
    return <EventItem event={data.event} />
};

export default EventsDetailPage;

export async function loader({requests, params}) {
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id); 

    if(!response.ok) {
        throw json({message: "no details"},{status: 500});
    } else {
        return response;
    }
}