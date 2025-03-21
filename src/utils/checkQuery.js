// A method used to check the query of the curent URL.
const checkQuery = (query) => {
    // Grab current URL.
    const params = new URLSearchParams(window.location.search);
    // Return the query of the URL based on the parameter passed to this method.
    console.log(params);
    return params.get(query);
}

export { checkQuery };