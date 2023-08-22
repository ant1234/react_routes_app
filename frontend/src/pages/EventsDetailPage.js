import { getAuthToken } from "../util/auth";
import  EventItem from "./EventItem";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

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

export async function action({request, params}) {
    
    const token = getAuthToken();

    const response = await fetch('http://localhost:8080/events/' + params.id, {
        method: request.method,
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    if(!response.ok) {
        throw json({message: "Couldn't delete event"},{status: 500});
    } else {
        return redirect('/events');
    }
}