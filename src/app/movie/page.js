"use client";
import { useEffect, useState } from "react";
import styles from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";




const imageData = [
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "poster": "https://youtubenextwebsite-thapa.vercel.app/_next/image?url=https%3A%2F%2Focc-0-3933-116.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2F9pS1daC2n6UGc3dUogvWIPMR_OU%2FAAAABX8G2pNfcejUK5lGYVT3mQCap0teVtIr-p0ze9JPrwqK2V03MOKsnsqZO_RO7eZvSinRqskWviLfHJ5Nu3KekujcX4rhb9LaQBQFgEe_rqvV3WcdcMNDyc_eWA.webp%3Fr%3Dd74&w=640&q=75"
    },
    {
      "id": 2,
      "title": "The Godfather",
      "poster": "https://youtubenextwebsite-thapa.vercel.app/_next/image?url=https%3A%2F%2Focc-0-3933-116.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2FE8vDc_W8CLv7-yMQu8KMEC7Rrr8%2FAAAABfaV5vCsD1G3LSREibkQQJYHtHxRPRV17hQ_9Mv5MUY4LhFANBndo8QupeueHEN40YjfUBz4yN7koDWpxaQX1WL4ZU7OLSm2yP9P.webp%3Fr%3De7c&w=640&q=75"
    },
    {
      "id": 3,
      "title": "The Dark Knight",
      "poster": "https://youtubenextwebsite-thapa.vercel.app/_next/image?url=https%3A%2F%2Focc-0-3933-116.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2F9pS1daC2n6UGc3dUogvWIPMR_OU%2FAAAABVACVBhtk__TwjW_N_1p73DfGia8wGezAAeDKWrMG0zeXc1r9VEDB4ZJqtWNUHeiFnz7YfVhigBPpMAzYY2gIUPJlIP0WXQGfVt10TAZbYLjVGKJjknJwVpHtg.webp%3Fr%3D6c7&w=640&q=75"
    },
    {
      "id": 4,
      "title": "Pulp Fiction",
      "poster": "https://youtubenextwebsite-thapa.vercel.app/_next/image?url=https%3A%2F%2Focc-0-3933-116.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2FE8vDc_W8CLv7-yMQu8KMEC7Rrr8%2FAAAABRjL7eUfPb7QYkOaHJqY4i9w1PiISu6Zwr3udtFM7fVT5CBZT_oN6LOfl9BfjadWCjYRWYDJPmATBNk7_bN1prL3Vx-Af8Rku457.webp%3Fr%3D0d5&w=640&q=75"
    },
    {
      "id": 5,
      "title": "Forrest Gump",
      "poster": "https://youtubenextwebsite-thapa.vercel.app/_next/image?url=https%3A%2F%2Focc-0-3933-116.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2FE8vDc_W8CLv7-yMQu8KMEC7Rrr8%2FAAAABbw2ty3GrdvWkcMb4MtR8eYsljV73JcJDvIwLSh_eSCQP7vzOMDshFdbD8ZrUS1M8hvUCYMFKZWJv9JPpzlAE8C9RQXo4Gwb86zI.webp%3Fr%3D54d&w=640&q=75"
    },
    {
      "id": 6,
      "title": "Inception",
      "poster": "https://youtubenextwebsite-thapa.vercel.app/_next/image?url=https%3A%2F%2Focc-0-3933-116.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2FE8vDc_W8CLv7-yMQu8KMEC7Rrr8%2FAAAABYmE41JCb_Kn_QJQ2HxOqaEehsylehX71KhSzpkPCUjRR7n0mhDwulrJ1XHReio5ni-rgjEwf8kQHOBR7LXhl1wwl236u0Gx5ar6.webp%3Fr%3D317&w=640&q=75"
    },
    {
      "id": 7,
      "title": "The Matrix",
      "poster": "https://youtubenextwebsite-thapa.vercel.app/_next/image?url=https%3A%2F%2Focc-0-3933-116.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2FE8vDc_W8CLv7-yMQu8KMEC7Rrr8%2FAAAABQRT87PtuxOokWGqydNJQL7W7liRUeBUBvjdYveS1UWLI0ADbBJVLkZx6J4SrydDl3QC2UG5w_Dc3DwIrVO7W3_ZHZ3ye8gszkDe.webp%3Fr%3D671&w=640&q=75"
    },
    {
      "id": 8,
      "title": "The Lord of the Rings: The Return of the King",
      "poster": "https://youtubenextwebsite-thapa.vercel.app/_next/image?url=https%3A%2F%2Focc-0-3933-116.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2FE8vDc_W8CLv7-yMQu8KMEC7Rrr8%2FAAAABZ8QwSKbiZ_lH4SP8pg250e4ddIbc0lSwCfxGKdKWLRA3EfV4AFuIyjdlB06pyG5PFdRk1l7FjEPJQ-VPcqR1vzg8ObL4fV9GdP0.webp%3Fr%3D20d&w=640&q=75"
    },
    {
      "id": 9,
      "title": "The Dark Knight Rises",
      "poster": "https://www.themoviedb.org/t/p/w220_and_h310_face/fB5TTi3w6M6rRKrNDC40uO3T5MB.jpg"
    },
    {
      "id": 10,
      "title": "Interstellar",
      "poster": "https://youtubenextwebsite-thapa.vercel.app/_next/image?url=https%3A%2F%2Focc-0-3933-116.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2FE8vDc_W8CLv7-yMQu8KMEC7Rrr8%2FAAAABaKwfMFF-nlcrKME5Ub76lD-oy0h541O7LS4KMaaLbaYXCcxYW7p7DpAhFuyObFpkBaxhELDLds8cx14xhfPdaddB6TYzz6kehLR.webp%3Fr%3Dbeb&w=640&q=75"
    },
    {
      "id": 11,
      "title": "Fight Club",
      "poster": "https://youtubenextwebsite-thapa.vercel.app/_next/image?url=https%3A%2F%2Focc-0-3933-116.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2FE8vDc_W8CLv7-yMQu8KMEC7Rrr8%2FAAAABaCad-Lg1t1j3gD5ydWuhE9gVYeEMYWzx8LddtL2xnQVsA8tI3xpHM80vyjRNhHiOY37GuqXEz0ZuC07U7SKX7CK88VPSavma1HR.webp%3Fr%3D88e&w=640&q=75"
    },
    {
      "id": 12,
      "title": "Gladiator",
      "poster": "https://www.themoviedb.org/t/p/w220_and_h310_face/q7Q5DmtgN8Bh5lzhV1UsaGy7Ih8.jpg"
    },
    {
      "id": 13,
      "title": "The Lord of the Rings: The Two Towers",
      "poster": "https://www.themoviedb.org/t/p/w220_and_h310_face/mfD5LfqaFvuzJZTXlsZTAAo4bmR.jpg"
    },
    {
      "id": 14,
      "title": "The Silence of the Lambs",
      "poster": "https://www.themoviedb.org/t/p/w220_and_h310_face/kdk7wV2s8RKNdqr6mcWCH7P8sk1.jpg"
    },
    {
      "id": 15,
      "title": "The Departed",
      "poster": "https://www.themoviedb.org/t/p/w220_and_h310_face/9OX8pDWkYlMwA9rEqmNqPV7eGIt.jpg"
    },
    {
      "id": 16,
      "title": "Saving Private Ryan",
      "poster": "https://www.themoviedb.org/t/p/w220_and_h310_face/2DAcTnZvwKmB4MI8dqGfMEO28or.jpg"
    },
    {
      "id": 17,
      "title": "The Prestige",
      "poster": "https://www.themoviedb.org/t/p/w220_and_h310_face/hK0Hbq2l2MSa5wzpMWx37SUGX8z.jpg"
    },
    {
      "id": 18,
      "title": "Glory",
      "poster": "https://www.themoviedb.org/t/p/w220_and_h310_face/zldOnyY4SvSy9FPcZSu4oGVg0k7.jpg"
    },
    {
      "id": 19,
      "title": "The Avengers",
      "poster": "https://www.themoviedb.org/t/p/w220_and_h310_face/4M1bMEKMz2V6Jd1kDM22JvQBGYh.jpg"
    },
    {
      "id": 20,
      "title": "The Lion King",
      "poster": "https://www.themoviedb.org/t/p/w220_and_h310_face/7pS5bG1c0WcC54gQoGFjcMwXs7J.jpg"
    }
];

const Page =  () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {    
      try {
        const response = await fetch("https://freetestapi.com/api/v1/movies");
        const data = await response.json();
        const combinedData = data.map((apiMovie) => {
            const matchingMovie = imageData.find(movie => movie.id === apiMovie.id);
            return {
              ...apiMovie,
              ...(matchingMovie || {}), // Merge matchingMovie properties into apiMovie
            };
          });
  
          setData2(combinedData);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure this runs only once after the initial render

  if (!data2) {
    return (
      <div>
       Loading....
        
      </div>
    );
  }

  return (
    <>
      <div className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
        <div className={styles.card_section}>
          {data2.map((curElem) => {
            //  const matchingMovie = imageData.find(movie => movie.id === curElem.id);
            return <MovieCard key={curElem.id} {...curElem}
             />;
          })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
