function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      let ul = document.getElementById("data");
      ul.innerHTML = "";

      data.forEach(user => {
        let li = document.createElement("li");
        li.innerText = user.name;
        ul.appendChild(li);
      });
    });
}