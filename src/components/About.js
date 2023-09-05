const About = (props) => {
  return (
    <div className="about">
      <div className="card mx-auto" style={{ width: "80%" }}>
        <div className="card-body">
          <h5 className="card-title">About</h5>
          <h6 className="card-subtitle mb-2 text-muted">Description</h6>
          <p className="card-text">
            Site Created by Basa Varshith Raj. This Site uses{" "}
            <mark>react-qr-code</mark>. Qrcode generated using javascript library
            locally.
          </p>
          <a
            href="https://github.com/rosskhanas/react-qr-code"
            className="card-link"
            target="_blank"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
