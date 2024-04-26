// eslint-disable-next-line react/prop-types
export function Card({ imgSVG, title, parag }) {
  return (
    <>
      <div className="col-lg-6 col-xxl-4 mb-5">
        <div className="card bg-light border-0 ">
          <img src={imgSVG} alt="" className="bg-dark rounded-top" />
          <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"></div>
            <h2 className="fs-4 fw-bold">{title}</h2>
            <p className="mb-0">{parag}</p>
          </div>
        </div>
      </div>
    </>
  );
}
