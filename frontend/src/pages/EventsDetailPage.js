import  EventItem from "./EventItem";
import { json, useLoaderData } from "react-router-dom";

const EventsDetailPage = () => {

    const data = useLoaderData();
    return <EventItem event={data.event} />
};

export default EventsDetailPage;

export async function loader({requests, params}) {
    const id = params.id;
    console.log(id);
    const response = await fetch('http://localhost:8080/events/' + id); 

    if(!response.ok) {
        throw json({message: "no details"},{status: 500});
    } else {
        return response;
    }
}