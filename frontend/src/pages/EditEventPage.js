import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';

const EventsDetailPage = () => {

    const data = useRouteLoaderData('event-detail');
    return <EventForm event={data.event}/>
};

export default EventsDetailPage;