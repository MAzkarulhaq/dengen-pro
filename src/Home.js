import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <br />
        <br />
        <h1 className="text-center blue-text">About</h1>
        <p className="text-center px-md-5 mx-md-5 py-5">
          These three holiday themed NFT collections were created as a fun
          project. These free-to-mint collections grant its owners full
          commercial rights. These are profile picture collectibles that can be
          used during the holiday seasons year-after-year. They were created to
          provide NFT collectors with fun timeless holiday-themed profile
          pictures and collectibles. The collections feature fun traits,
          creative artwork, and a fun vibe. Aside from being fun, they will also
          act as pre-sale access for a large-scale NFT project launching in the
          future by
          <a href="https://www.twitter.com/long" target="_blank">
            {" "}
            @long.{" "}
          </a>
          Mint. Enjoy. Smile. Laugh.
        </p>
      </div>
    </>
  );
};

export default Home;
