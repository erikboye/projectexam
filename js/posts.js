const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("title");

const apiwof = "https://noroffcors.herokuapp.com/https://api.erikboye.tech/wp-json/wp/v2/posts";

async function getPosts() {
  try {
    const response = await fetch(apiwof);
    const details = await response.json();

    let count = 0

details.forEach(element => {
count++ 
if(count % 2 === 0){
       document.querySelector(".wof__container").innerHTML+= `
       <div class="wof__div">
            <h2 class="post_title">${element.title.rendered}</h2>
            <div class="wrap"></div>
            <img src="${element.better_featured_image.media_details.sizes.medium.source_url}" class="wofpic"></img>
            <div class="wofinfo">${element.excerpt.rendered}</div>
        </div>
       `
}
else{
    document.querySelector(".wof__container").innerHTML+= `
    <div class="wof__div">
        <h2 class="post_title">${element.title.rendered}</h2>
        <div class="wrap">
        <div class="wofinfo">${element.excerpt.rendered}</div>
        <img src="${element.better_featured_image.media_details.sizes.medium.source_url}" class="wofpic"></img>
    </div>
    `
}
});
  } catch {
  } finally {
  }
}
getPosts();

