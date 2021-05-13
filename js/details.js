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

  } catch (error) {}
}
  getblogPosts();