import "../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2022 Tea</p>
      <a
        className="link"
        href="https://github.com/TeaFant"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <br />
      <a
        className="link"
        href="https://www.linkedin.com/in/tea-fantela"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default Footer;
