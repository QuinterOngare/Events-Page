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
              : "/images/Sample/event1.jpg"
          }
          width={170}
          height={100}
        />
        {/*  <h1>{props.eventData.performers} </h1> */}
      </div>
      <div className={styles.info}>
        <span>{props.eventData.date}</span>
        <h3>{props.eventData.name}</h3>
      </div>
    </div>
  );
}
