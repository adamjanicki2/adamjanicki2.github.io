import Secret from "src/components/Secret";
import "src/css/footer.css";

const Footer = () => (
  <footer className="mt5 footer flex flex-column items-center justify-between">
    <div className="flex w-100 justify-between pa2">
      <p className="ma0 tr desktop" style={{ fontSize: "10px" }}>
        Did someone say… hidden movie quotes?
      </p>
      <Secret
        slug="The_Silence_of_the_Lambs"
        text="I'm having an old friend for dinner."
      />
    </div>
    <p className="fw5 f5 pa1 br2" style={{ backdropFilter: "blur(8px)" }}>
      Est. 2023 Built from scratch by Adam
    </p>
    <div className="flex justify-between w-100 pa2">
      <Secret
        text="This Is Ripley, Last Survivor Of The Nostromo...Signing Off."
        slug="Alien"
      />
      <p className="ma0 f7 fw6 white">Cambridge, Massachusetts, 03.14.2020</p>
    </div>
  </footer>
);

export default Footer;
