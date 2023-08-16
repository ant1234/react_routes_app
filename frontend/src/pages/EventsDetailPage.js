import { useParams } from "react-router-dom";

const EventsDetailPage = () => {

    const params = useParams();
    return <div><p>{params.id}</p></div>
};

export default EventsDetailPage;