import React from "react";

const Cards = () => {
  return (
    <section className="section-4">
      <div className="container text-center">
        <h1 className="text-dark">What our Reader's Say about us</h1>
        <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="team row">
        <div className="col-md-4 col-12 text-center">
          <div className="card mr-2 d-inline-block shadow-lg">
            <div className="card-img-top">
              {/* <img src="../assets/UI-face-3.jpg" className="img-fluid border-radius p-4" alt=""> */}
            </div>
            <div className="card-body">
              <h3 className="card-title">Blalock Jolene</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                iure autem recusandae, veniam, illo dolor soluta assumenda
                minima quia velit officia sit exercitationem nam ipsa,
                repellendus aut facilis quasi voluptas!
              </p>
              <a href="#" className="text-secondary text-decoration-none">
                Go somewhere
              </a>
              <p className="text-black-50">CEO at Google</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div
            id="carouselExampleControls"
            className="carousel slide "
            data-ride="carousel"
          >
            <div className="carousel-inner text-center">
              <div className="carousel-item active">
                <div className="card mr-2 d-inline-block shadow">
                  <div className="card-img-top">
                    {/* <img src="../assets/UI-face-1.jpg" className="img-fluid rounded-circle w-50 p-4" alt=""> */}
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Allen Agnes</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint iure autem recusandae, veniam, illo dolor soluta
                      assumenda minima quia velit officia sit exercitationem nam
                      ipsa, repellendus aut facilis quasi voluptas!
                    </p>
                    <a href="#" className="text-secondary text-decoration-none">
                      Go somewhere
                    </a>
                    <p className="text-black-50">CEO at Google</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card  d-inline-block mr-2 shadow">
                  <div className="card-img-top">
                    {/* <img src="../assets/UI-face-2.jpg" className="img-fluid rounded-circle w-50 p-4" alt=""> */}
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Amiel Barbara</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint iure autem recusandae, veniam, illo dolor soluta
                      assumenda minima quia velit officia sit exercitationem nam
                      ipsa, repellendus aut facilis quasi voluptas!
                    </p>
                    <a href="#" className="text-secondary text-decoration-none">
                      Go somewhere
                    </a>
                    <p className="text-black-50">CEO at Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 text-center">
          <div className="card mr-2 d-inline-block shadow-lg">
            <div className="card-img-top">
              {/* <img src="../assets/UI-face-4.jpg" className="img-fluid border-radius p-4" alt=""> */}
            </div>
            <div className="card-body">
              <h3 className="card-title">Olivia Louis</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                iure autem recusandae, veniam, illo dolor soluta assumenda
                minima quia velit officia sit exercitationem nam ipsa,
                repellendus aut facilis quasi voluptas!
              </p>
              <a href="#" className="text-secondary text-decoration-none">
                Go somewhere
              </a>
              <p className="text-black-50">CEO at Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
