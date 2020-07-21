import React from 'react';
import './index.scss';
import User from '../../constants/firebase/user/user';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileImage = () => {

  const [name, setName] = useState("");

  useEffect(() => {
    User.event.getEvent("updateInformation", () => {
      console.log("Nombre de usuario",User.information.name)
      setName(User.information.name);
    }, "reload")

  }, []);

  return (
    < div className="ProfileImage" >
      <div className="ProfileImage__photo" />
      <h1 className="ProfileImage__name">{name}</h1>
    </div >
  );
};

export default ProfileImage;
