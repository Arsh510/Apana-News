// var url = 'https://api.currentsapi.services/v1/latest-news?' +
//     'language=us&' +
//     'apiKey=YbO-TEYVZ2HkvjB4os_UupMXtTXQVj_t7YmEBKb0jxnMjX6w';

// var url = `https://api.currentsapi.services/v1/search?language=en&apiKey=YbO-TEYVZ2HkvjB4os_UupMXtTXQVj_t7YmEBKb0jxnMjX6w`
// var req = new Request(url);
// fetch(req)
//     .then(function (response) {
//         console.log(response.json());
//     })

// function getData() {
//     url = `https://api.currentsapi.services/v1/search?language=en&apiKey=YbO-TEYVZ2HkvjB4os_UupMXtTXQVj_t7YmEBKb0jxnMjX6w`;

//     var req = new Request(url);

//     fetch(req).then((response) => {
//         return response.json();
//     }).then((data) => {
//         let newsData = data.news;
//         // console.log(newsData);

//         let newsHtml = "";
//         newsData.forEach((values) => {
//             news = `<div class="accordion" id="newsAccordion">
//                             <div class="accordion-item">
//                                 <h2 class="accordion-header" id="heading">
//                                     <div class="accordion-button" type=" " data-bs-toggle="collapse"
//                                         data-bs-target="#collapseOne" aria-expanded=" " aria-controls="collapse">
//                                         ${values.title}
//                                     </div>
//                                 </h2>
//                                 <div id="collapse" class="accordion-collapse collapse show" aria-labelledby="heading"
//                                     data-bs-parent="#accordionExample">
//                                     <div class="accordion-body"> ${values.description}. <a href="${values.url}" target="_blank">Read more hear</a> </div>
//                                 </div>
//                             </div>
//                         </div>`;

//             newsHtml += news;
//         })
//         document.getElementById("newsAccordion").innerHTML = newsHtml;
//     })

//     .catch ((err) => {
//         console.log(err);
//     })
// }

// getData();

function getData() {
    url = `https://api.currentsapi.services/v1/search?language=en&apiKey=YbO-TEYVZ2HkvjB4os_UupMXtTXQVj_t7YmEBKb0jxnMjX6w`;

    var req = new Request(url);

    fetch(req).then((response) => {
        return response.json();
    }).then((data) => {
        let newsData = data.news;
        // console.log(newsData);

        let newsHtml = "";
        newsData.forEach((values) => {
            news = `<div class="card text-center my-3 mx-3">
                        <div class="card-header">
                        Author : ${values.author}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${values.title}</h5>
                            <p class="card-text">${values.description}</p>
                            <a href="${values.url}" target="_blank" class="btn btn-primary">Read More...</a>
                        </div>
                        <img src="${values.image}" class="card-img-bottom" alt="...">
                    </div>`;
            

            newsHtml += news;
        })
        document.getElementById("displaytNews").innerHTML = newsHtml;
    })

    .catch ((err) => {
        console.log(err);
    })
}

getData();