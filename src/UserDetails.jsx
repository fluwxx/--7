// components/UserDetails.js
import React from "react";
import { useSelector } from "react-redux";

const UserDetails = () => {
    const { name, birthDate, gender } = useSelector((state) => state.user);

    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {name}</p>
            <p>Birth Date: {birthDate}</p>
            <p>Gender: {gender}</p>
        </div>
    );
};

export default UserDetails;
