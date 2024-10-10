// console.log(window);

document.getElementById('get_data').addEventListener('click', getData);

// xhr.open('GET', `https://api.api-ninjas.com/v1/jokes?limit=${number}`, true);

function getData() {
    // console.log('Clicked');
    fetch('https://poetrydb.org/author/Emily Dickinson/title')
    .then(res => res.json())
    .then(data => { console.log(data);})
    .catch(err => { console.log(err);})
}