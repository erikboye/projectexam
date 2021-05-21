const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const apiBlogs = "https://noroffcors.herokuapp.com/https://api.erikboye.tech/wp-json/wp/v2/posts/" + id;

async function getblogPosts() {
  try {
    const response = await fetch(apiBlogs);
    const jsonResults = await response.json();
    console.log(jsonResults)
    console.log(id);

      document.querySelector(".details_container").innerHTML += `
      <h1 class="headphones_title">${jsonResults.title.rendered}</h1>
        <div class="different_headphones">
          ${jsonResults.content.rendered}
        </div>
      `;

       //POPUP MODAL//

      document.querySelector(".modal_container").innerHTML = `<img class="modalBig" src="${jsonResults.better_featured_image.source_url}" alt="Skriv noe smart her">`
      const module = document.querySelector(".wp-image-1")

      module.onclick = function () {
      document.querySelector(".blogOverlay").classList.remove("hide")
  }
  document.querySelector(".blogOverlay").onclick = function () {
    document.querySelector(".blogOverlay").classList.add("hide")
  }
} catch (error)   { console.log(error)}
}
  getblogPosts();