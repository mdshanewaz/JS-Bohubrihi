fetch('https://poetrydb.org/author/Emily Dickinson/title')
    .then(response => response.json())
    .then(data => {});


// console.log('Hello World!');

// async await
async function getJokes() {
    let response = await fetch('https://poetrydb.org/author/Emily Dickinson/title');
    let data = await response.json();
    return data;
}

// console.log(getJokes());

getJokes().then(jokes => {
    console.log(jokes);
})