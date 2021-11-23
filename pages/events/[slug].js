import Layout from "../../Components/Layout";
import { API_URL } from "../../config/index";

export default function EventsPage(props) {
  const titleName = props.eventQueen.name.split(" ");
  return (
    <div>
      <Layout title={`${titleName[0]} ${titleName[1]}`}>
        <h1>{props.eventQueen.name}</h1>
      </Layout>
    </div>
  );
}
// getServerSideProps is used to make specific request
export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: { eventQueen: events[0] },
  };
}
