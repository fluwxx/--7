// reducers/userReducer.js
const initialState = {
    name: "",
    birthDate: "",
    gender: "",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "SET_BIRTH_DATE":
            return { ...state, birthDate: action.payload };
        case "SET_GENDER":
            return { ...state, gender: action.payload };
        default:
            return state;
    }
};

export default userReducer;
