import blogActionTypes from "./blog.types";

const INITIAL_STATE = {
    posts: [],
};

const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case blogActionTypes.FETCH_BLOGS:
            return {
                ...state,
                posts: action.payload,
            };
        default:
            return state;
    }
};

export default blogReducer;
