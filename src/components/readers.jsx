import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import person1 from "../assets/UI-face-1.jpg";

const items = [
  {
    src: "http://lorempixel.com/output/cats-q-c-640-480-3.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1",
  },
  {
    src: "http://lorempixel.com/output/cats-q-c-640-480-3.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2",
  },
  {
    src: "http://lorempixel.com/output/cats-q-c-640-480-3.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    header: <div className="card text-dark">mark twain</div>,
    key: "3",
  },
];

const Readers = () => {
  return (
    <div className="m-5 text-center">
      <div className="card  d-inline-block mr-2 shadow">
        <div className="card-img-top">
          <img
            src={person1}
            className="img-fluid rounded-circle w-25 p-4"
            alt="person1"
          />
        </div>
        <div className="card-body">
          <h3 className="card-title">Amiel Barbara</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
            autem recusandae, veniam, illo dolor soluta assumenda minima quia
            velit officia sit exercitationem nam ipsa, repellendus aut facilis
            quasi voluptas!
          </p>
          <p className="text-black-50">CEO at Google</p>
        </div>
      </div>
    </div>
  );
};

export default Readers;

// const Readers = () => <UncontrolledCarousel items={items} />;
