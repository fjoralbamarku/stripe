import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="center mediaCenter" onMouseOver={closeSubmenu}>
      <h1 className="title">
        Payments infrastructure <br />
        for the internet
      </h1>
      <p className="paragraph">
        Millions of companies of all sizes—from startups to Fortune 500s—use
        Stripe’s software and APIs to accept payments, send payouts, and manage
        their businesses online.<br></br>
        <br></br>
        <button>Start now</button>
      </p>

      <img src={phoneImg} className="phonePos mediaPhone" alt="phone" />
    </div>
  );
};

export default Hero;
