// Fetch a random dad joke https://icanhazdadjoke.com/
const getDadJoke = () => {
    return fetch ("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then(data => data.json())
    .then(parsedData => {
        return parsedData
    })
    
}

const dadJoke = getDadJoke()
    .then(joke => {
        console.log("random joke", joke)
    })

// Display the response on an HTML page.


// Stretch Goal: Display the question with a button to display the answer.


// Stretch Goal: Create a button to get a new joke.