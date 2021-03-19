import blogActionTypes from "./blog.types";
import * as contentful from "contentful";

export const fetchPosts = async () => {
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
    return response;
};
