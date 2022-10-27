const Ajax = Object.create(null);

const fetch = window.fetch;

const json = (response) => response.json();

Ajax.query = function (request) {
    const body = JSON.stringify(request); // must be sent as a string

    return fetch("/", {
        "method": "POST", //give data, process it, give it back
        "body": body,
        "headers": {
            "Content-Type": "application/json"
        }
    }).then(json);
};

export default Object.freeze(Ajax);