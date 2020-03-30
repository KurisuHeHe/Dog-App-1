function getDogPicture() {
  const pictureCount = document.getElementById("count").value;
  fetch(`https://dog.ceo/api/breeds/image/random/${pictureCount}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function handleForm() {
  $("form").submit(event => {
    event.preventDefault();
    getDogPicture();
  });
}

$(function() {
  console.log("Lets go!");
  handleForm();
});
