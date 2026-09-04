import markdownit from "markdown-it";
import styles from "./App.module.css";

const Project = ({ title, description, imageUrl, liveUrl }) => {
  const md = markdownit({ html: true });
  return (
    <>
      <a className={styles.projectLink} href={liveUrl}>
        <img src={imageUrl} alt={title} />
      </a>
      <p className={styles.projectDescription}>
        <span className={styles.projectTitle}>
          {/* includes one space after title */}
          <a href={liveUrl}>{title} </a>
        </span>
        <span
          dangerouslySetInnerHTML={{ __html: md.renderInline(description) }}
        ></span>
      </p>
    </>
  );
};

export default Project;
