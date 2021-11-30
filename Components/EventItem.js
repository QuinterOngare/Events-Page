import Link from "next/link";
import Image from "next/image";
import styles from "../styles/EventItem.module.css";

export default function EventItem(props) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            props.eventData.image
              ? props.eventData.image
              : "/images/event-default.png"
          }
          width={170}
          height={100}
        />
        {/*  <h1>{props.eventData.performers} </h1> */}
      </div>
      <div className={styles.info}>
        <span>
          {props.eventData.date} at {props.eventData.time}{" "}
        </span>

        {/* to make time to be besides date */}
        <h3>{props.eventData.name}</h3>
        {/* is gotten from index file the main file line 13/14 */}
      </div>
      <div className={styles.link}>
        <Link href={`/events/${props.eventData.slug}`}>
          <a>Details </a>
          {/* <a target="-blank">Details</a> it takes you to new tab */}
        </Link>
      </div>
    </div>
  );
}
