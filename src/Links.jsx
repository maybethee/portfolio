import styles from "./App.module.css";

function Links({ siteLink, repoLink }) {
  return (
    <ul className={styles.linksRow}>
      {siteLink && (
        <li className={styles.linksRowItem}>
          <a href={siteLink}>site</a>
        </li>
      )}

      <li className={styles.linksRowItem}>
        <a href={repoLink}>repo</a>
      </li>
    </ul>
  );
}

export default Links;
