function Links({ siteLink, repoLink, darkMode }) {
  return (
    <ul className="links-row">
      {siteLink && (
        <li className={`links-row-item ${darkMode ? "dark" : "light"}`}>
          <a href={siteLink}>site</a>
        </li>
      )}
      <li className={`links-row-item ${darkMode ? "dark" : "light"}`}>
        <a href={repoLink}>repo</a>
      </li>
    </ul>
  );
}

export default Links;
