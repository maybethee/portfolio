import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <>
      <main>
        <div id={styles.contactContainer}>
          <p>
            Send inquiries, greetings, or your favorite{" "}
            <a
              href="https://www.are.na/raphael-schnee/lost-pets"
              target="_blank"
            >
              <span>lost pet sign</span>
            </a>{" "}
            to{" "}
            <a href="mailto:raphaelschnee.send@gmail.com">
              <span>raphaelschnee.send@gmail.com</span>
            </a>
          </p>

          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/raphael-schnee/"
                target="_blank"
              >
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/maybethee" target="_blank">
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.are.na/raphael-schnee" target="_blank">
                <span>Are.na</span>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Contact;
