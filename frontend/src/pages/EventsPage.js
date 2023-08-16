import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {id: '1', title: 'Sports event'},
    {id: '2', title: 'Jazz event'},
    {id: '3', title: 'Dance event'},
];

const EventsPage = () => {
    return (
        
        DUMMY_EVENTS.map(dummy_event => (
        <li><Link to={`/events/${dummy_event.id}`}>{dummy_event.title}</Link></li>
        
    )));
};

export default EventsPage;