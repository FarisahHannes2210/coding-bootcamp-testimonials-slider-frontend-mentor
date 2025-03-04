var prev_btn = document.getElementById("prev_btn");
var next_btn = document.getElementById("next_btn");

var quote = document.getElementById("quote");
var profPic = document.getElementById("profPic");
var personName = document.getElementById("name");
var job = document.getElementById("job");


let TanyaQuote =
  " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ";
let TanyaName = "Tanya Sinclair";
let TanyaJob = "UX Engineer";
let TanyaImage = "images/image-tanya.jpg";

let JohnQuote =
  "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
let JohnName = "John Tarkpor";
let JohnJob = "Junior Front-end Developer";
let JohnImage = "images/image-john.jpg";

quote.textContent = TanyaQuote;
personName.textContent = TanyaName;
job.textContent = TanyaJob;
profPic.src = TanyaImage;
profPic.alt = "Tanya Sinclair Image";


function main() {
    // console.log("next");

  if (quote.textContent === TanyaQuote) {
    quote.textContent = JohnQuote;
    personName.textContent = JohnName;
    job.textContent = JohnJob;
    profPic.src = JohnImage;
    profPic.alt = "John Tarkpor Image";
  }
  else if (quote.textContent === JohnQuote) {
    quote.textContent = TanyaQuote;
    personName.textContent = TanyaName;
    job.textContent = TanyaJob;
    profPic.src = TanyaImage;
    profPic.alt = "Tanya Sinclair Image";
  }
}



