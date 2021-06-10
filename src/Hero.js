import React from "react";
import fire from "./firebase";

function Hero(handleLogout, email, setEmail) {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={() => fire.auth().signOut()}>Logout</button>
      </nav>
      <div style={{ padding: "50px" }}>
        <h1 style={{ color: "white", fontSize: "60px" }}>Welcome back </h1>
        <p style={{ color: "lightgrey" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          beatae dolorum facere non harum iusto mollitia molestiae, libero
          magnam ipsa aperiam aut fugiat neque rem voluptates corrupti quaerat
          placeat distinctio deserunt ut ipsam quibusdam? Doloremque praesentium
          tenetur, reiciendis eum corrupti eaque, aut provident repellendus
          dicta, culpa dolores cumque nam dolore. Quas earum maxime culpa ipsum
          esse, saepe sed quia laborum! Facere quia debitis quis architecto
          iusto facilis harum corrupti. Dolor exercitationem quo at dolore
          maiores recusandae repudiandae commodi vel, magnam consectetur
          assumenda dignissimos consequuntur a praesentium pariatur voluptas sed
          facere, mollitia sint autem eveniet blanditiis veritatis cupiditate.
          Placeat, deserunt odit.
        </p>
      </div>
    </section>
  );
}

export default Hero;
