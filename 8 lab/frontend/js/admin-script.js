'use strict'

let storage = window.localStorage;
let buttonAddNews = document.getElementById("addNews");
buttonAddNews.onclick = onClick;


checkLocalStorage();
window.addEventListener('online',  unloadData);

function isOnline() {
    return window.navigator.onLine;
}


function onClick() {

    let newsInput = document.getElementById("newsInput");
    let titleInput = document.getElementById("titleInput");

    if (newsInput.value == "" || titleInput.value == "") {
        alert("Наявні пусті поля!")
    } else if (titleInput.value.length > 50) {
        alert("Занадто довгий заголовок!");
    } else {

        if (!isOnline()) {
            sendDataToServer();
        } else {

               let news = document .createElement('div');
        
               news.className = "col-xl-3 col-md-6 col-sm-12";
               news.innerHTML = `
                <div class="card">
                    <img src="https://svirtus.cdnvideo.ru/D74Box_RBQEgQ3j4UUcI2KVMQNA=/0x0:1280x720/355x200/filters:quality(90)/https://s3.eu-central-1.amazonaws.com/esforce-media/85/854438f0521464fcdad70a93d36a8e61.jpg?m=33feb0c11dcb0ad4d31b0f217f19cce9" alt="">
                    <div class="card-content">
                        <h5>${titleInput}</h5>
                        ${newsInput}
                    </div>
                </div>`;
        
                storage.setItem("news", storage.getItem("news").push(news));
        
        }
        
        newsInput.value = "";
        titleInput.value = "";
    }
}

function sendDataToServer(news) {
    //next time :)
}


function unloadData() {
    news = storage.getItem("news");

    if(news.length > 0) {
        sendDataToServer(comments);
        storage.setItem("news", []);
    }
}

function checkLocalStorage() {
    let news = storage.getItem("news");

    if(news == null) {
        storage.setItem("news", []);
    }
}

