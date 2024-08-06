import styles from "@/app/styles/common.module.css";
import Link from "next/link";


const page = ({params}) => {
    const id=params.id;
  return (
    <div className={styles.card}>
    <div className={styles.card_image}>
      <img src={"https://youtubenextwebsite-thapa.vercel.app/_next/image?url=https%3A%2F%2Focc-0-3933-116.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2FE8vDc_W8CLv7-yMQu8KMEC7Rrr8%2FAAAABfaV5vCsD1G3LSREibkQQJYHtHxRPRV17hQ_9Mv5MUY4LhFANBndo8QupeueHEN40YjfUBz4yN7koDWpxaQX1WL4ZU7OLSm2yP9P.webp%3Fr%3De7c&w=640&q=75"} alt="img" width={250} height={200}></img>
    </div>
    <div className={styles.card_data}>
      <h2>Title</h2>
      <p>
        {/* {synopsis} */}
        On a journey from Brazil to the Las Vegas championships, professio ...
      </p>
          <Link href={`/movie/${3}`}>
          <button>Read more</button>
          </Link>
    </div>
  </div>
  )
}

export default page