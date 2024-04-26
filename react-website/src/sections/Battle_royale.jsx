import { Card } from "../components/Card";
export function BattleRoyale() {
  return (
    <section className="pt-4" id="asd">
      <div className="container px-lg-5 ">
        <h1 className="text-center py-5 fw-bold">BEYOND BATTLE ROYALE</h1>
        <p className="mx-5 px-5 fs-5 mb-5 text-center">
          Show &apos;em what you&apos;re made of in Apex Legends, a free-to-play
          hero shooter where contenders from across the Frontier team up to
          battle for glory, fame, and fortune.
        </p>

        <div className="row gx-lg-5">
          <Card
            imgSVG={
              "https://media.contentapi.ea.com/content/dam/apex-legends/images/2018/12/apex-grid-tile-battle-royale.png.adapt.crop16x9.652w.png"
            }
            title={"Legendar Characters"}
            parag={
              "Explore a growing roster of powerful Legends, each with their own unique personality, strengths, and abilities."
            }
          />
          <Card
            imgSVG={
              "https://media.contentapi.ea.com/content/dam/apex-legends/images/2018/12/apex-grid-tile-sci-fi-wild-west.png.adapt.crop16x9.652w.png"
            }
            title={"The Ultimate Squad"}
            parag={
              "Choose your Legend, team up, and combine your unique skills to be the last squad standing."
            }
          />
          <Card
            imgSVG={
              "https://media.contentapi.ea.com/content/dam/apex-legends/images/2018/12/apex-grid-tile-lawless-world.png.adapt.crop16x9.652w.png"
            }
            title={"Strategic Combat"}
            parag={
              "Master an expanding assortment of powerful weapons, unique abilities, and game-changing equipment "
            }
          />
        </div>
      </div>
    </section>
  );
}
