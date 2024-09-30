// document.getElementById('btn').addEventListener('click', message);

// function message(e) {
//     let val = e;
//     val = e.target;
//     val = e.target.id;

//     val = e.timeStamp;
//     val = e.type;

//     val = e.clientY;
//     val = e.clientX;

//     val = e.offsetY;
//     val = e.offsetX;

//     console.log(val);
// }

// document.querySelector('.container').addEventListener('mousemove', message2);
// document.querySelector('.container').style.background = 'red';

// function message2(e) {
//     let val = e;
//     val = e.target;
//     val = e.target.id;

//     val = e.timeStamp;
//     val = e.type;

//     val = e.clientY;
//     val = e.clientX;

//     val = e.offsetY;
//     val = e.offsetX;

//     val = this;

//     this.style.background = `#${e.offsetX}`;

//     console.log(e.offsetX);
//     console.log(e.offsetY);
//     console.log(val)
// }


document.querySelector("#name").addEventListener('focus', test);

function test (e) {
    this.style.background = 'blue';
    console.log("Focused!")
}

document.querySelector("#name").addEventListener('keyup', test2);

function test2 (e) {
    document.getElementById('demo').innerText = this.value
    console.log(this.value);
}