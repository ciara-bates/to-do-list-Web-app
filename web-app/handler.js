const handler = Object.create(null);

import fetch from "node-fetch";

handler.getGif = function (obj) {
    const search = obj.inputTask;
    const key = "FVEJYMp5Hcv4Tge5sXXzXw0uERfvLIHo";
    const params = "&limit=1&offset=0&rating=G&lang=en";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}${params}&q=${search}`;
    console.log(url);
    return fetch(url)
    .then((response) => response.json())
    .then((json) => json.data[0].images.fixed_width.url)
    .then(function (url) {
        return {
            "gifUrl": url
        };
    });
};

export default Object.freeze(handler);
