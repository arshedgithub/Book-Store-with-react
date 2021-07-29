import React from "react";
import NavBar from "./../navbar";

const About = () => {
  return (
    <React.Fragment>
      <div className="bg-dark">
        <NavBar />
      </div>
      <div className="content m-5">
        <h1 className="mb-4">About Us</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Aenean dapibus risus a commodo
          sollicitudin. Donec ante ligula, bibendum pulvinar venenatis in,
          ornare in nulla. Praesent eu metus id quam ornare ultricies. Donec
          nisl nulla, pulvinar vitae iaculis in, dapibus nec lorem.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suspendisse posuere
          eget felis nec accumsan. Cras viverra, tortor hendrerit hendrerit
          elementum, nunc nisi accumsan tellus, ac faucibus libero tellus id
          ante. Curabitur leo tortor, interdum eu iaculis id, eleifend ut augue.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Aliquam eu faucibus ligula. Duis consectetur
          mollis ante, tincidunt pellentesque lacus. Praesent erat metus,
          lobortis id nunc at, porta condimentum enim.
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vivamus tortor dui,
          sagittis in diam vitae, convallis iaculis urna. Maecenas nunc lacus,
          tempor in malesuada eget, bibendum vitae erat. Nunc gravida ante sed
          ullamcorper blandit.
        </p>
      </div>
    </React.Fragment>
  );
};

export default About;
