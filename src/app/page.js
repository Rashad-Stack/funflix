import Herosection from "./components/Herosection";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Herosection title="LET'S WATCH MOVIE TOGETHER" imgUrl="/home.svg" />
    </main>
  );
}
