import blogActionTypes from "./blog.types";
// import axios from "axios";
import * as contentful from "contentful";

// const API_BASE_URL = "https://cdn.contentful.com";
// const API_SPACE_ID = "we4cu65w8bh3";
// const API_TOKEN = "maI3X-kEL26eP035VOPJk7oSurARPM74Wzx-RvojGZU";

export const fetchPosts = async () => {
    // const request = axios.get(
    //     `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=blog`
    // );
    const client = contentful.createClient({
        space: "we4cu65w8bh3",
        accessToken: "maI3X-kEL26eP035VOPJk7oSurARPM74Wzx-RvojGZU",
    });

    const response = await client
        .getEntries({
            order: "-sys.createdAt",
            content_type: "blog",
        })
        .then(entries => {
            return {
                type: blogActionTypes.FETCH_BLOGS,
                payload: entries,
            };
        });
    console.log(response);
    return response;
};
