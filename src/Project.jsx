import markdownit from "markdown-it";

const Project = ({ title, description, imageUrl, liveUrl }) => {
  const md = markdownit({ html: true });
  return (
    <>
      <a className="project-link" href={liveUrl}>
        <img src={imageUrl} alt={title} />
      </a>
      <p className="project-description">
        <span className="project-title">
          <a href={liveUrl}>{title}</a>
        </span>
        <span
          dangerouslySetInnerHTML={{ __html: md.renderInline(description) }}
        ></span>
      </p>
    </>
  );
};

export default Project;
