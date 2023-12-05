import "./Landing.css";
import Avatar from "/assets/Avatar.png";
import Resume from '/Documents/Sanjeevan_Resume.pdf'

function Landing() {

  function onResumeClick() {
    window.open(Resume);
  }

  return (
    <section className="Landing">
      <div className="LandingContent">
        <div className="NavDiv">
          <svg viewBox="0 0 194.19 538.39" className="Logo">
            <path d="M192.35 116.1l-19.9 200.84v.12a11 11 0 0 1-17.591 8.396 11 11 0 0 1-4.259-10.566v-.12l2-20 12.71-128.52 5.32-53.54s1.62-10.25 1.62-15.58v-.7h0c-.455-41.158-33.94-74.29-75.1-74.309S22.474 55.202 21.98 96.36v.09.7c0 5.33 1.62 15.58 1.62 15.58l5.3 53.52 12.76 128.54 3 30.5h0v.31l1.67 20.23q0 .38.06.75a49.56 49.56 0 0 0 1 6.38c5.17 23.285 25.818 39.855 49.67 39.86a72.8 72.8 0 0 1 72.8 73.15c-.19 39.91-33.1 72.56-73 72.45s-72.274-32.338-72.57-72.24v-.56-.56a11 11 0 0 1 21.93-.11v.67.67c.374 27.999 23.31 50.429 51.311 50.178s50.531-23.087 50.404-51.088-22.864-50.633-50.865-50.63c-31.973.009-60.209-20.847-69.6-51.41 0 0 0 0 0-.07a60.47 60.47 0 0 1-2.24-11.55l-.93-9.38L5.03 148.13l-5-51c0-1.22 0-2.44.08-3.65C2.062 41.153 45.167-.195 97.53.03c52.16.21 95.24 42.23 96.67 94.38.18 7.41-1.85 21.69-1.85 21.69z" />
          </svg>
          <div className="NavTextDiv">
            <p onClick={onResumeClick} className="NavText">Resume</p>
          </div>
        </div>
        <div className="ConFlex">
          <div className="TextDiv">
            <p className="Text1">Sanjeevan</p>
            <p className="Text2">Frontend Developer</p>
          </div>
          <img src={Avatar} className="Img" />
        </div>
      </div>
    </section>
  );
}

export default Landing;
