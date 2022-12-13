/**
 * function fetches web server to pull requested information that is being hosted.
 * @returns promise data from fetch request
 */
async function getURLInfo(url) {

    // url variable of where the JSON file is being hosted
    let requestedURL = (url);

    try {
        // call fetch on the url and await the return of the promise and store it in a 
        // response variable
        let response = await fetch(requestedURL);

        // log the status code of the response
        console.log('status code: ', response.status);

        // check to see if the status code is valid - should be 200-299
        // if repsonse is not valid then log to console and throw an error
        if (!response.ok) {
            console.log(response);
            // response has an invalid status to fetch data from
            throw new Error(`Error! status: ${response.status}`);
          }
        else {
            // else if the status is ok then return the promise using 
            // response.json()
            return await response.json();
        }
    }
    // catch any other errors that might occur and log to console
    catch (error) {
        console.log(error);
    }
}

/**
 * loadAPOD function calls getURLInfo to grab JSON data from web server and 
 * manipulates the DOM to insert into the table on the page.
 */
async function loadAPOD() {

    // create url variable and call getURLInfo() function
    // to fetch JSON data from server
    let apodData = await getURLInfo("https://go-apod.herokuapp.com/apod");
    document.getElementById("button").disabled = true;
    // html code to be inserted into page
    const html = `<h3>${apodData.title}</h3>
                  <img src=${apodData.hdurl} height=200 width=200>
                  <p>${apodData.date}<br></p>
                  <p>${apodData.explanation}</p>`
                  
    
    // grab the current table and add each degree data to it
    let div = document.getElementById("apod");
    div.innerHTML = html;
    document.getElementById("button").disabled = true;
}