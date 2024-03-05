// actions/userActions.js
export const setName = (name) => ({
    type: "SET_NAME",
    payload: name,
});

export const setBirthDate = (date) => ({
    type: "SET_BIRTH_DATE",
    payload: date,
});

export const setGender = (gender) => ({
    type: "SET_GENDER",
    payload: gender,
});
