import styles from "./Work.module.css";

function Work() {
  return (
    <>
      <div id={styles.wrapper}>
        <table className={styles.workTable}>
          <caption className={styles.tableCaption}>Publishing</caption>
          <thead>
            <tr>
              <th>Project</th>
              <th>Publisher</th>
              <th>Year</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a
                  href="https://uglyducklingpresse.org/publications/the-glass-clouding/"
                  target="_blank"
                >
                  The Glass Clouding by Masaoka Shiki
                </a>
              </td>
              <td>Ugly Duckling Presse</td>
              <td>2024</td>
              <td>Editing/Typesetting</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://uglyducklingpresse.org/publications/air-raid/"
                  target="_blank"
                >
                  Air Raid by Polina Barskova
                </a>
              </td>
              <td>Ugly Duckling Presse</td>
              <td>2021</td>
              <td>Typesetting</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://uglyducklingpresse.org/product/what-is-abomination/"
                  target="_blank"
                >
                  What Is Abomination by Tomaž Šalamun
                </a>
              </td>
              <td>Ugly Duckling Presse</td>
              <td>2021</td>
              <td>Broadside Design/Letterpress Printing</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://uglyducklingpresse.org/publications/morning-poem-undie-popovers/"
                  target="_blank"
                >
                  Morning Poem (Undie Popovers) by Farnoosh Fathi
                </a>
              </td>
              <td>Ugly Duckling Presse</td>
              <td>2021</td>
              <td>Broadside Design/Letterpress Printing</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.poetryproject.org/publications/newsletter/265-summer-2021/lawrence-giffin-interviews-jean-day-on-late-human-udp-2021?page=1"
                  target="_blank"
                >
                  Lawrence Giffin Interviews Jean Day on Late Human (UDP, 2021)
                </a>
              </td>
              <td>The Poetry Project Newsletter</td>
              <td>2020</td>
              <td>Transcription</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://uglyducklingpresse.org/publications/spring-cleaning/"
                  target="_blank"
                >
                  Spring Cleaning by Marshall Bood
                </a>
              </td>
              <td>Ugly Duckling Presse</td>
              <td>2020</td>
              <td>Cover Design</td>
            </tr>
          </tbody>
        </table>

        <table className={styles.workTable}>
          <caption className={styles.tableCaption}>Writing</caption>
          <thead>
            <tr>
              <th>Title</th>
              <th>Publisher</th>
              <th>Year</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a
                  href="https://medium.com/ugly-duckling-presse/backlist-bulletin-10-lowly-by-alan-felsenthal-907e0854d394"
                  target="_blank"
                >
                  Backlist Bulletin #10: Lowly by Alan Felsenthal
                </a>
              </td>
              <td>Ugly Duckling Presse</td>
              <td>2021</td>
              <td>Review/Essay</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://dreginald.com/index.php/issues/issue-fourteen/raphael-schnee"
                  target="_blank"
                >
                  from REDEMPTION DEPT.
                </a>
              </td>
              <td>DREGINALD</td>
              <td>2018</td>
              <td>Poetry</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://letter-r.square.site/product/issue-8/18?cs=true&amp;cst=custom"
                  target="_blank"
                >
                  from THERE IS STILL TIME TO EMBRACE THE LOAD BEARING WALL
                </a>
              </td>
              <td>Small Po[r]tions 8 (Letter [R] Press)</td>
              <td>2017</td>
              <td>Poetry</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.nodearmagazine.com/issues#/issue-20-labor"
                  target="_blank"
                >
                  IN ORDER 2 B COMMUNICATIVE...
                </a>
              </td>
              <td>No, Dear</td>
              <td>2017</td>
              <td>Poetry</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://tagvverk.info/2017/01/24/raphael-schnee/"
                  target="_blank"
                >
                  BODY POEM
                </a>
              </td>
              <td>Tagvverk</td>
              <td>2017</td>
              <td>Poetry</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.bonebouquet.org/product/issue-9-1"
                  target="_blank"
                >
                  INTIMATE SCALE
                </a>
              </td>
              <td>Bone Bouquet</td>
              <td>???</td>
              <td>Poetry</td>
            </tr>
            <tr>
              <td>
                <a href="https://alienmouth.github.io/page29/" target="_blank">
                  Missed Connections (after Dalton Day)
                </a>
              </td>
              <td>Alien Mouth </td>
              <td>2015</td>
              <td>Poetry</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Work;
