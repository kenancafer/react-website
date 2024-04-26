import { Card } from "../components/Card";
export function Hero() {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <h1 className="text-center py-5 fw-bold">LATEST NEWS</h1>
        <div className="row gx-lg-5">
          <Card
            imgSVG={
              "https://media.contentapi.ea.com/content/dam/apex-legends/common/urban-assault-ce/urban-assault-ce-thumbnail.png.adapt.crop16x9.431p.png"
            }
            title={"Fresh new layout"}
            parag={
              "With Bootstrap 5, we've created a fresh new layout for this template!"
            }
          />
          <Card
            imgSVG={
              "https://media.contentapi.ea.com/content/dam/apex-legends/common/shadow-society-ce/apex-shadow-society-event-primary-art-3840x2160.png.adapt.crop16x9.431p.png"
            }
            title={"Fresh new layout"}
            parag={
              "With Bootstrap 5, we've created a fresh new layout for this template!"
            }
          />
          <Card
            imgSVG={
              "https://media.contentapi.ea.com/content/dam/apex-legends/common/inner-beast-ce/inner-beasts-ce-thumbnail.png.adapt.crop16x9.431p.png"
            }
            title={"Feature boxes"}
            parag={
              "We've created some custom feature boxes using Bootstrap icons!"
            }
          />
        </div>
      </div>
    </section>
  );
}
