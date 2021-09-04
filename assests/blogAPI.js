/*-----------------------------------Goi API cua blog----------------------------------*/
fetch("https://613359847859e700176a36cb.mockapi.io/firstapi/v1/tintuc")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsons) {
    let arr = jsons.map(function (json) {
      return `<div class="blogImgMain">
                <img class="blogImgAnimationMain" src="${json.url}" alt="">
            </div>
            <div class="blog-textMain">
                <h3>${json.name}</h3>
                <i class="glyphicon glyphicon-user"></i><span> by</span><span> admin &nbsp;</span>
                <i class="glyphicon glyphicon-calendar"></i><span> ${json.dated}</span>
                <p>${json.description}</p>
                <a href="#"><span>Read more</span><i class="glyphicon glyphicon-chevron-right"></i></a>
            </div>`;
    });
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
      document.querySelector(".fetch" + (i + 1)).innerHTML = arr[i];
    }
  });




/*-----------------------------------Goi REST API cua binh luan blog (CRUD)----------------------------------*/
start();

// functions
function start() {
  getListComment(function (jsons) {
    displayListComment(jsons);
  });

  handleCreateForm();
}

function getListComment(callback) {
  fetch("https://613359847859e700176a36cb.mockapi.io/firstapi/v1/comment")
    .then(function (response) {
      return response.json();
    })
    // .then(function(jsons){
    //     return jsons;
    // })
    .then(callback);
}

function displayListComment(jsons) {
  let commented = document.querySelector(".blog-commented");
  let arr = jsons.map(function (json) {
    return `<div class="${json.id}" style="min-height: 80px;">
                <div class="col-md-1">
                    <img class="blog-userImg" src="images/user-icon.png" alt="">
                </div>
                <div class="col-md-11">
                    <p class="blog-user${json.id}" style="font-weight: bold;">${json.user}</p>
                    <p class="blog-userComment${json.id}">${json.comment}</p>
                    <input type="text" class="blog-userUpdateComment${json.id}" style="display: none; width: 100%;">
                    <p style="">
                        <button class="far fa-thumbs-up"></button><label for="">Thich</label>
                        <button class="far fa-thumbs-down"></button><label for="">Khong thich</label>
                    </p>
                    <p style="float: right;">
                        <button class="btn-blogUpdate${json.id}" onclick="clickUpdateForm(${json.id})">Sua binh luan</button>
                         <button class="btn-blogSaveUpdate${json.id}" onclick="saveUpdateForm(${json.id})" style="display:none;">Luu binh luan</button>
                        <button class="btn-blogDelete${json.id}" onclick="deleteUpdateForm(${json.id})">Xoa</button>
                    </p>
                </div>
            </div>`;
  });
  let length = arr.length;
  let text = "";
  for (let i = 0; i < length; i++) {
    text += arr[i];
  }
  commented.innerHTML = text;
}

function handleCreateForm() {
  let btn = document.querySelector(".btn-blogCreate");
  btn.onclick = function () {
    let comment = document.querySelector('textarea[name="comment"]').value;
    let data = {
      user: "guest",
      comment: comment,
    };
    createComment(data, function (jsons) {
      getListComment(function (jsons) {
        displayListComment(jsons);
      });
    });
  };
}

function createComment(data, callback) {
  fetch("https://613359847859e700176a36cb.mockapi.io/firstapi/v1/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function clickUpdateForm(id) {
  let userComment = document.querySelector(".blog-userComment" + id);
  let userUpdateComment = document.querySelector(
    ".blog-userUpdateComment" + id
  );
  let blogUpdate = document.querySelector(".btn-blogUpdate" + id);
  let blogSaveUpdate = document.querySelector(".btn-blogSaveUpdate" + id);

  userComment.style.display = "none";
  userUpdateComment.style.display = "block";
  blogUpdate.style.display = "none";
  blogSaveUpdate.style.display = "inline";
}

function saveUpdateForm(id) {
  let userComment = document.querySelector(".blog-userComment" + id);
  let userUpdateComment = document.querySelector(
    ".blog-userUpdateComment" + id
  );
  let blogUpdate = document.querySelector(".btn-blogUpdate" + id);
  let blogSaveUpdate = document.querySelector(".btn-blogSaveUpdate" + id);

  userComment.style.display = "block";
  userUpdateComment.style.display = "none";
  blogUpdate.style.display = "inline";
  blogSaveUpdate.style.display = "none";

  let user = document.querySelector(".blog-user" + id).innerHTML;
  let userUpdateCommentValue = document.querySelector(
    ".blog-userUpdateComment" + id
  ).value;

  let data = {
    user: user,
    comment: userUpdateCommentValue,
  };

  updateComment(id, data, function (jsons) {
    getListComment(function (jsons) {
      displayListComment(jsons);
    });
  });
}

function updateComment(id, data, callback) {
  fetch(`https://613359847859e700176a36cb.mockapi.io/firstapi/v1/comment/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function deleteUpdateForm(id) {
  let data = {
    id: id,
  };
  deleteComment(id, data, function (jsons) {
    getListComment(function (jsons) {
      displayListComment(jsons);
    });
  });
}

function deleteComment(id, data, callback) {
  fetch(`https://613359847859e700176a36cb.mockapi.io/firstapi/v1/comment/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}