'use strict'

let storage = window.localStorage;
let buttonAddComment = document.getElementById("addComment");
buttonAddComment.onclick = onClick;

checkLocalStorage();
window.addEventListener('online',  unloadData);


function isOnline() {
    return window.navigator.onLine;
}


function onClick() {
    let commentsRow = document.getElementById("comments");
    let commentInput = document.getElementById("commentFormControlTextarea");

    if (commentInput.value == "" || commentInput.value == " " || commentInput.value.length == 0) {
        alert("Чистий комментар")
    } else {

        if (!isOnline()) {
            sendDataToServer();
        } else {

            let comment = document.createElement('div');
            let date = new Date();

            comment.className = "col-12 fan-comment";
            comment.innerHTML = `${commentInput.value}
                    <br>
                    <div class="info">
                        <span class="date">
                            ${date}
                        </span>
                        <span class="nickname">
                            user
                        </span>
                    </div>
                    <hr>`;

            commentsRow.appendChild(comment);            
            storage.setItem("comments", storage.getItem("comments").push(comment));
        }
        commentInput.value = "";
    }
}

function sendDataToServer(comment) {
    //next time :)
}

function checkLocalStorage() {
    let comments = storage.getItem("comments");

    if(comments == null) {
        storage.setItem("comments", []);
    }

    if(comments.length > 0) {
        comments.forEach(comment => {
            commentsRow.appendChild(comment);
        });
    }
}

function unloadData() {
    comments = storage.getItem("comments");

    if(comments.length > 0) {
        sendDataToServer(comments);
        storage.setItem("comments", []);
    }
}