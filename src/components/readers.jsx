import React from "react";
import Carousel from "react-elastic-carousel";
import person1 from "../assets/UI-face-1.jpg";

const Readers = () => {
  return (
    <div className="text-center">
      <Carousel enableAutoPlay={true} autoPlaySpeed={3000}>
        <div className="d-inline-block m-3 mt-0">
          <div className="img-top">
            <img
              src={person1}
              className="img-fluid rounded-circle w-25"
              alt="person1"
            />
          </div>
          <div className="card-body">
            <h3>Amiel Barbara</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
              autem recusandae, veniam, illo dolor soluta assumenda minima quia
              velit officia sit exercitationem nam ipsa, repellendus aut facilis
              quasi voluptas!
            </p>
            <p className="text-black-50">CEO at Google</p>
          </div>
        </div>

        <div className="d-inline-block m-3 mt-0">
          <div className="img-top">
            <img
              src={person1}
              className="img-fluid rounded-circle w-25"
              alt="person1"
            />
          </div>
          <div className="card-body">
            <h3>Sara Shephard</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
              autem recusandae, veniam, illo dolor soluta assumenda minima quia
              velit officia sit exercitationem nam ipsa, repellendus aut facilis
              quasi voluptas!
            </p>
            <p className="text-black-50">CEO at Google</p>
          </div>
        </div>

        <div className="d-inline-block m-3 mt-0">
          <div className="img-top">
            <img
              src={person1}
              className="img-fluid rounded-circle w-25"
              alt="person1"
            />
          </div>
          <div className="card-body">
            <h3>Jess C. Scott</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
              autem recusandae, veniam, illo dolor soluta assumenda minima quia
              velit officia sit exercitationem nam ipsa, repellendus aut facilis
              quasi voluptas!
            </p>
            <p className="text-black-50">CEO at Google</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Readers;

// const Readers = () => <UncontrolledCarousel items={items} />;
