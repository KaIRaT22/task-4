async function submit() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (response.ok) {
    var result = await response.json();
    show(result);
  } else {
    alert("Ошибка HTTPS: " + response.status);
  }
  
  console.log(result);
}

function show(array) {

  var posts = document.querySelector("#posts");

  array.forEach((post) => {
    var title = document.createElement("H2");
    var bodyText = document.createElement("DIV");
    var breakLine = document.createElement("br");
    
    title.innerHTML = post.title;
    bodyText.innerHTML = post.body;

    posts.appendChild(title);
    posts.appendChild(bodyText);
    posts.appendChild(breakLine);
  });
}