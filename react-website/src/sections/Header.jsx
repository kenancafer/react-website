import apexSVG from "../assets/apex_logo.svg";

export function Header() {
  return (
    <>
      <div id="battleRoyaleBg">
        <div className="container px-5 py-5">
          <div className=" p-5 rounded text-center">
            <img src={apexSVG} alt="" />
            <p className=" my-2 fs-4 text-white">
              Drop Hotter in Apex Legends™: Breakout!
            </p>
            <a href="#" className="btn btn-lg btn-danger my-3 mx-4">
              PLAY FREE NOW
            </a>
            <a href="#" className="btn btn-lg btn-danger my-3">
              WATCH GAMEPLAY TRAILER
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
