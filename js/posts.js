const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("title");

const apiwof = "https://noroffcors.herokuapp.com/https://api.erikboye.tech/wp-json/wp/v2/posts";

async function getPosts() {
  try {
    document.querySelector(".loading").innerHTML = `
    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_Stt1R6.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
    `
    const response = await fetch(apiwof);
    const details = await response.json();

    let count = 0

details.forEach(element => {
count++ 
if(count % 2 === 0){
       document.querySelector(".wof__container").innerHTML+= `
        <div class="wof__div">
        <a href="details.html?id=${element.id}"><h2 class="post_title">${element.title.rendered}</h2>
            <div class="wrap">
              <img src="${element.better_featured_image.media_details.sizes.medium.source_url}" class="wofpic"></img>
              <div class="wofinfo">${element.excerpt.rendered}</div>
            </div>
        </a>
        </div>
       `
}
else{
    document.querySelector(".wof__container").innerHTML+= `
    <div class="wof__div">
    <a href="details.html?id=${element.id}"><h2 class="post_title">${element.title.rendered}</h2>
        <div class="wrap">
          <div class="wofinfo">${element.excerpt.rendered}</div>
          <img src="${element.better_featured_image.media_details.sizes.medium.source_url}" class="wofpic"></img>
        </div>
    </a>
    </div>
    `
}
});
  } catch {
  } finally {
    document.querySelector('.loading').innerHTML =``;
  }
}
getPosts();

