// components/UserForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setName, setBirthDate, setGender } from "./userActions.jsx";

const UserForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setName(name));
        dispatch(setBirthDate(birthDate));
        dispatch(setGender(gender));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Birth Date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
            />
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
