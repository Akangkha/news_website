console.log("This is my index js file");
//API key:9937a654201742601070a72ef4c6f12c

//Initialise the news parameters
source = "in";
let apiKey = "9937a654201742601070a72ef4c6f12c";

//Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

//create ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&apikey=9937a654201742601070a72ef4c6f12c`,
  true
);
// console.log(xhr);

//What to do when response is ready

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function(news1,index) {
      console.log(news1,index);
      let news = `
                    <div class="card">
      <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            <b style="color:black">Breaking news  ${index+1}</b>${news1["title"]}
          </button>
        </h2>
      </div>
  
      <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body">
          ${news1.content}.<a href="${news1.url}" target="_blank">Read more</a>
        </div>
      </div>
    </div>`;

      newsHtml += news;
    });

    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};
xhr.send();
