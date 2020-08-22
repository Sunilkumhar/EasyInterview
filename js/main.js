var storedname = localStorage.getItem("name");
var storedemail = localStorage.getItem("email");
var storedphone = localStorage.getItem("phone");
var storedid = localStorage.getItem("ID");
var storedwebsite = localStorage.getItem("website");

var comments = ['', '', '', '', ''];
var grade = [0, 0, 0, 0, 0];
var current = 1;
document.querySelector('.candidate-info').innerHTML = `
<img src="./images/profile.png" alt="">
<h1>${storedname}</h1>
<div id="information">
    <div style="display: flex;"><h2 >Id : <h3 > ${storedid}</h3></h2></div>
    <div style="display: flex;"><h2 >Email : <h3 >${storedemail}</h3></h2></div>
    <div style="display: flex;"><h2 >Phone : <h3 >${storedphone}</h3></h2></div>
    <div style="display: flex;"><h2 >Website : <h3 ><a href="${storedwebsite}">visit site</a></h3></h2></div>

</div>
`

//pagination
if (current === 1) {
    var disable = document.getElementById('smaller');
    disable.classList.add("disabled");
    var video = document.querySelector('.iframeVideo');
    video.innerHTML = `<iframe width="550" height="400" src="https://youtube.com/embed/hdI2bqOjy3c" title="JavaScript Free Online Video Tutorials"></iframe>`

}

paginate1 = (a) => {

    var previous = document.getElementById(`${current}`);
    previous.classList.remove("active");
    current = current - 1;
    var currentpage = document.getElementById(`${current}`);
    currentpage.classList.add("active");
    var first = document.getElementById('smaller');
    var end = document.getElementById('greater');
    whentodisable();
    dd();
}
paginate2 = (a) => {

    var previous = document.getElementById(`${current}`);
    previous.classList.remove("active");
    current = current + 1;
    var currentpage = document.getElementById(`${current}`);
    currentpage.classList.add("active");
    var first = document.getElementById('smaller');
    var end = document.getElementById('greater');
    whentodisable();
    dd();
}
paginate = (a) => {

        var page = document.getElementById(`${a}`);
        var previous = document.getElementById(`${current}`);
        var first = document.getElementById('smaller');
        var end = document.getElementById('greater');

        previous.classList.remove("active");
        page.classList.add("active");
        current = a;
        whentodisable();
        dd();
    }
    //change onsave
paginatesave = () => {

        var previous = document.getElementById(`${current}`);
        previous.classList.remove("active");
        current = current + 1;
        var currentpage = document.getElementById(`${current}`);
        currentpage.classList.add("active");
        var first = document.getElementById('smaller');
        var end = document.getElementById('greater');
        whentodisable();

    }
    //on page 5 
whentodisable = () => {
    var first = document.getElementById('smaller');
    var end = document.getElementById('greater');

    if (current === 1) {
        first.classList.add("disabled");
        end.classList.remove("disabled");
    } else if (current === 5) {
        first.classList.remove("disabled");
        end.classList.add("disabled");
    } else {
        first.classList.remove("disabled");
        end.classList.remove("disabled");
    }
    com = document.querySelector('.comment').value;
    console.log(com)
    if (current === 5) {
        let proceesTonext = document.getElementById('send');
        proceesTonext.style.display = "none";
        let proceed = document.querySelector('#send1');
        proceed.style.display = "block";

        // console.log(proceesTonext)
    } else {
        let proceesTonext = document.getElementById('send');
        proceesTonext.style.display = "block";
        let proceed = document.querySelector('#send1');
        proceed.style.display = "none";

        // proceed.innerHTML = `<input id="commentxt" class="comment" type="text" placeholder="Comments..">`
        // console.log(proceesTonext)

    }
    var video = document.querySelector('.iframeVideo');
    if(current ===1){
        video.innerHTML = `<iframe width="550" height="400" src="https://youtube.com/embed/hdI2bqOjy3c" title="JavaScript Free Online Video Tutorials"></iframe>`
    }
    else if(current ===2){
        video.innerHTML = `<iframe width="550" height="400" src="https://youtube.com/embed/W6NZfCO5SIk" title="JavaScript Free Online Video Tutorials"></iframe>`
    }
    else if(current ===3){
        video.innerHTML = `<iframe width="550" height="400" src="https://youtube.com/embed/2nZiB1JItbY" title="JavaScript Free Online Video Tutorials"></iframe>`
    }
    else if(current ===4){
        video.innerHTML = `<iframe width="550" height="400" src="https://youtube.com/embed/UB1O30fR-EE" title="HTML Free Online Video Tutorials"></iframe>`
    }
    else if(current ===5){
        video.innerHTML = `<iframe width="550" height="400" src="https://youtube.com/embed/yfoY53QXEnI" title="CSS Free Online Video Tutorials"></iframe>`
    }


}

//display grade
let x = 0;
grade1 = (q) => {
    x = q;
    document.querySelector('.given').innerHTML = `<h2>Marks Given: ${x}</h2>`;
};

//save to array
let save = document.getElementById('send');
save.addEventListener('click', next)

function next() {

    // console.log(current);
    com = document.querySelector('.comment').value;
    // console.log(123);
    if(com === '' || x ===0){
        // console.log(current);
        document.getElementById("mylink").href = "#";
        alert('Please Enter grade/comment!!')
    }else{
        document.getElementById("mylink").href = "./result.html";
        comments[current - 1] = com;
        grade[current - 1] = x;
        x=0;
        // console.log(comments);
        // console.log(grade);
        // console.log(current);
        if (current < 5) {
            paginatesave();
        }

        localStorage.setItem("comments", JSON.stringify(comments));
        localStorage.setItem("grade", JSON.stringify(grade));

        document.querySelector('.given').innerHTML = ``;
        document.querySelector('#commentxt').value = ``;
    }
}
// setTimeout(function(){ console.log(comments); }, 3000);

dd = () => {
    console.log(current);
    if (grade[current - 1] === 0) {
        // consoel.log(123);
        document.querySelector('.given').innerHTML = ``;
    } else {
        document.querySelector('.given').innerHTML = `<h2>Marks Given: ${grade[current-1]}</h2>`;
    }
    if (comments[current - 1] === '') {
        console.log(123);
        document.querySelector('#commentxt').value = ``;
    } else {
        document.querySelector('#commentxt').value = comments[current - 1];
    }

    // console.log(current);
}