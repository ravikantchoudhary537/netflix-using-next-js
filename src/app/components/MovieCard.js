import styles from "@/app/styles/common.module.css";
import Link from "next/link";

const MovieCard = ( curElem) => {
  // const {id,title,year,poster,trailer,matchingMovie}=curElem;
  const { id, title, year, trailer, plot, poster,runtime } = curElem;
//   const poster = matchingMovie ? matchingMovie.poster : "";
//   console.log("mathicng", matchingMovie);
//   console.log("curElem", curElem);
  return (
    <div className={`${styles.card}`}>
      <div className={styles.card_image}></div>
      <div className={styles.card_data}>
        <h2>{title}</h2>
        <img src={poster} height={200} width={250}></img>
        <p>
          {plot.substring(0, 100)}
       
        </p>
        
        <p style={{marginTop:"-20px"}}>Year:{year}</p>
        {/* <p style={{ color: "green" }}>Runtime:{runtime}</p> */}
        
        <Link href={`/movie/${id}`}>
          <button style={{marginTop:"-20px"}}>Read more</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
