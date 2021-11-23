import Layout from "../Components/Layout";
import EventItem from "../Components/EventItem";
import { API_URL } from "../config/index";

export default function HomePage(props) {
  console.log(props.events);
  // props.event is the whole item
  return (
    <div>
      <Layout>
        <h1>Music Events</h1>
        {/* we have done the paragraph below music events  */}
        {props.events.map((event) => {
          return <EventItem key={event.id} eventData={event} />;
            //  eventData is a property
          // return <h3 key={event.id}>{event.name}</h3>;
          // event is each of the file i.e id 1 then go to next 2
        })}
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  // getStaticProps communicates with the server
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
  };
}
