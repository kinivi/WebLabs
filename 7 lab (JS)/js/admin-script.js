'use strict'

let buttonAddNews = document.getElementById("addNews");
buttonAddNews.onclick = onClick;


function onClick() {

    let newsInput = document.getElementById("newsInput");
    let titleInput = document.getElementById("titleInput");

    if (newsInput.value == "" || titleInput.value == "") {
        alert("Наявні пусті поля!")
    } else if (titleInput.value.length > 50) {
        alert("Занадто довгий заголовок!");
    } else {
        //        let news = document.createElement('div');
        //        let date = new Date();
        //
        //        comment.className = "col-12 fan-comment";
        //        comment.innerHTML = `${newsInput.value}
        //                    <br>
        //                    <div class="info">
        //                        <span class="date">
        //                            ${date}
        //                        </span>
        //                        <span class="nickname">
        //                            user
        //                        </span>
        //                    </div>
        //                    <hr>`;
        //
        //        commentsRow.appendChild(comment);
        newsInput.value = "";
        titleInput.value = "";
    }
}
