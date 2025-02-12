function Links({ siteLink, repoLink }) {
  return (
    <ul className="links-row">
      {siteLink && (
        <li className="links-row-item">
          <a href={siteLink}>site</a>
        </li>
      )}
      <li className="links-row-item">
        <a href={repoLink}>repo</a>
      </li>
    </ul>
  );
}

export default Links;
