import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  // if(data.isError === true) {
  //   return <p>{data.message}</p>
  // } 

  return (
    <>
      {<EventsList events={data} />}
    </>
  );
}

export default EventsPage;

export async function EventLoader() {
 
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      throw json({ message: "There was a 500 error" }, {status: 500});
    } else {
      const resData = await response.json();
      return resData.events;
    }
};
