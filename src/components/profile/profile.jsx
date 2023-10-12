import React from "react";
import Back from "../common/back/Back";
import ProfileCard from "./ProfileCard";
import "./profile.css";
import Awrapper from "../about/Awrapper";
import "../about/about.css";

const profile = () => {
  return (
    <>
      <Back title="Profile" />
      <section className="team padding">
        <div className="container grid">
          <ProfileCard />
        </div>
      </section>
    </>
  );
};

export default profile;
