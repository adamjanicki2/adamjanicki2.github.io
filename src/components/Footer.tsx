import Secret from "./Secret";

const Footer = () => (
  <footer className="mt5 footer flex flex-column items-center justify-between">
    <div className="flex w-100 justify-between pa2">
      <Secret
        slug="The_Silence_of_the_Lambs"
        text="I'm having an old friend for dinner."
      />
      <p className="ma0" style={{ fontSize: "10px" }}>
        Did someone say... hidden movie quotes?
      </p>
    </div>

    <p className="fw5 f5">Est. 2023 Built from scratch by Adam</p>
    <div className="flex justify-end w-100 pa2">
      <Secret
        text="This Is Ripley, Last Survivor Of The Nostromo...Signing Off."
        slug="Alien"
      />
    </div>
  </footer>
);

export default Footer;
