'use strict'

Storage.prototype.setObj = function (key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key) {
    return JSON.parse(this.getItem(key))
}

let storage = window.localStorage;
let newsList = document.getElementById("newsList");
window.addEventListener('online', checkLocalStorage);

loadData()
checkLocalStorage();

function loadData() {
    //loadDataFromServer
}

function isOnline() {
    return window.navigator.onLine;
}

function checkLocalStorage() {

    if (isOnline()) {
        let localNews = storage.getObj("news");

        if (localNews == null) {
            storage.setObj("news", new Array());
        }

        if (localNews.length > 0) {
            localNews.forEach(newsValue => {


                newsValue = JSON.parse(newsValue);
                let news = document.createElement('div');

                news.className = "col-xl-3 col-md-6 col-sm-12";
                news.innerHTML = `
                <div class="card">
                    <img src="https://svirtus.cdnvideo.ru/D74Box_RBQEgQ3j4UUcI2KVMQNA=/0x0:1280x720/355x200/filters:quality(90)/https://s3.eu-central-1.amazonaws.com/esforce-media/85/854438f0521464fcdad70a93d36a8e61.jpg?m=33feb0c11dcb0ad4d31b0f217f19cce9" alt="">
                    <div class="card-content">
                        <h5>${newsValue.titleInput}</h5>
                        ${newsValue.newsInput}
                    </div>
                </div>`;
                newsList.appendChild(news);



            });

            storage.setObj("news", new Array());
        }

    }
}
