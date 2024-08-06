import styles from "@/app/styles/common.module.css";
import Link from "next/link";

const erroPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.error_page}></div>
      <h1>404</h1>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={"/"}>
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default erroPage;
