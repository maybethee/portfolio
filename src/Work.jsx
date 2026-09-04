import styles from "./Work.module.css";

function Work() {
  return (
    <>
      <div id={styles.wrapper}>
        <h1 className={styles.section}>Writing</h1>
        <h2 className={styles.subSection}>Poetry</h2>
        <ul>
          <li>
            from REDEMPTION DEPT. || DREGINALD 14 (
            <a href="https://dreginald.com/index.php/issues/issue-fourteen/raphael-schnee">
              DREGINALD :: Raphael Schnee
            </a>
            )
          </li>
          <li>
            from THERE IS STILL TIME TO EMBRACE THE LOAD BEARING WALL || Small
            Po[r]tions 8 (
            <a href="https://letter-r.square.site/product/issue-8/18?cs=true&amp;cst=custom">
              Issue 8 | Letter [R] Press
            </a>
            ) (NOTE: i think small po[r]tions is defunct, so unsure if this is
            actually available)
          </li>
          <li>
            IN ORDER 2 B COMMUNICATIVE... || No, Dear 20 (sold out, free PDF
            available) (
            <a href="https://www.nodearmagazine.com/issues#/issue-20-labor">
              Issues — No, Dear
            </a>
            )
          </li>
          <li>
            BODY POEM || Tagvverk (Jan. 2017) (
            <a href="https://tagvverk.info/2017/01/24/raphael-schnee/">
              Raphael Schnee
            </a>
            )
          </li>
          <li>
            INTIMATE SCALE ||{" "}
            <a href="https://www.bonebouquet.org/product/issue-9-1">
              Issue 9.1 | Bone Bouquet
            </a>
          </li>
          <li>
            Missed Connections (after Dalton Day) || Alien Mouth (defunct?) (
            <a href="https://alienmouth.github.io/page29/">Alien Mouth</a>)
          </li>
        </ul>
        <h2 className={styles.subSection}>Other</h2>
        <ul>
          <li>
            <a href="https://medium.com/ugly-duckling-presse/backlist-bulletin-10-lowly-by-alan-felsenthal-907e0854d394">
              Backlist Bulletin #10: Lowly by Alan Felsenthal | by
              uglyducklingpresse | UGLY DUCKLING PRESSE | Medium
            </a>
          </li>
        </ul>
        <h1 className={styles.section}>Editing & Book Design</h1>
        <h2 className={styles.subSection}>Cover Design</h2>
        <p>
          <a href="https://uglyducklingpresse.org/publications/spring-cleaning/">
            Ugly Duckling Presse: Spring Cleaning
          </a>
        </p>
        <h2 className={styles.subSection}>Typesetting</h2>
        <ul>
          <li>
            <a href="https://uglyducklingpresse.org/publications/air-raid/">
              Ugly Duckling Presse: Air Raid
            </a>
          </li>
          <li>
            <a href="https://uglyducklingpresse.org/publications/the-glass-clouding/">
              Ugly Duckling Presse: The Glass Clouding
            </a>
          </li>
        </ul>
        <h2 className={styles.subSection}>Broadsides</h2>
        <ul>
          <li>
            <a href="https://uglyducklingpresse.org/publications/morning-poem-undie-popovers/">
              Ugly Duckling Presse: Morning Poem (Undie Popovers)
            </a>
          </li>
          <li>
            <a href="https://uglyducklingpresse.org/publications/what-is-abomination/">
              Ugly Duckling Presse: What Is Abomination
            </a>
          </li>
        </ul>
        <h1 className={styles.section}>Transcription</h1>
        <ul>
          <li>
            <a href="https://www.poetryproject.org/publications/newsletter/265-summer-2021/lawrence-giffin-interviews-jean-day-on-late-human-udp-2021">
              The Poetry Project > #265 — Summer 2021 > Lawrence Giffin
              Interviews Jean Day on Late Human (UDP, 2021)
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Work;
