// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsList from './pages/EventsList';
import EventsDetailPage, { loader as EventDetailLoader} from './pages/EventsDetailPage';
import EditEventPage from './pages/EditEventPage';
import RootPage from './pages/RootPage';
import ErrorPage from './pages/ErrorPage';
import EventsRoot from './components/EventsRoot';
import { EventLoader } from './pages/EventsList';
import NewEventPage from './pages/NewEventPage';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, path: '', element: <HomePage/>},
      { 
        path: 'events', 
        element: <EventsRoot />,
        children: [
          {
            path: '', 
            element: <EventsList />,
            loader: EventLoader,
          },
          {
            path: ':id', 
            id: 'event-detail',
            loader: EventDetailLoader,
            children: [
            {index: true, element: <EventsDetailPage/>},
            {path: 'edit', element: <EditEventPage/> },
          ]},
          {path: 'new', element: <NewEventPage/>}
        ],
      },
    ] 
  },

]);

function App() {
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
