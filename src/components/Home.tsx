import Secret from "src/components/Secret";

const Home = () => (
  <div
    id="home"
    className="marquee flex flex-column items-center justify-between white"
  >
    <div />
    <h1 className="intro">Hi, I'm Adam.</h1>
    <div className="flex w-100 justify-between pa2">
      <Secret
        slug="Star_Wars:_Episode_III_-_Revenge_of_the_Sith"
        text="Hello there!"
      />
      <p className="ma0 f7">Big Sur, California: 2022</p>
    </div>
  </div>
);

export default Home;
