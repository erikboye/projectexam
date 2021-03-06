function exam_slider() {
    $(".blogs").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ]
    });
}

async function getPics() {
try {
const response = await fetch(
        'https://api.erikboye.tech/wp-json/wp/v2/posts'
    );
    const jsonResults = await response.json();
    const postArray = jsonResults;
    postArray.forEach(function (value) {
    
        if (value.better_featured_image.media_details.sizes.thumbnail.source_url) {
        document.querySelector('#examposts').innerHTML += `
        <div class="slide">
            <img src="${value.better_featured_image.media_details.sizes.thumbnail.source_url}">
            <div class="h1undertitle">
                <h3 class="value_title">${value.title.rendered}</h3>
            </div>
        </div>
        `;
        } else {
        document.querySelector('#examposts').innerHTML += `
            <div class="h2undertitle">   
                <h2>${value.title.rendered}</h2>
            </div>
        `;
        }
    });
    exam_slider();
} catch (error) {   
} finally {
}
}

getPics();