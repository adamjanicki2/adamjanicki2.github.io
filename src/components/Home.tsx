import Secret from "src/components/Secret";
import "src/css/home.css";

const Home = () => (
  <div
    id="home"
    className="marquee flex flex-column items-center justify-between white"
  >
    <div />
    <h1 className="home-welcome tc">Hi, I'm Adam.</h1>
    <div className="flex w-100 justify-between pa2">
      <Secret
        slug="Star_Wars:_Episode_III_-_Revenge_of_the_Sith"
        text="Hello there!"
      />
      <p className="ma0 f7 fw6">Big Sur, California, 08.06.22</p>
    </div>
  </div>
);

export default Home;
