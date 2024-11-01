const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

// 1YD9dZF4ah47W2ZKAFODKdlN-NbUpRmQWPuSzAVa5ao
const accessKey = "1YD9dZF4ah47W2ZKAFODKdlN-NbUpRmQWPuSzAVa5ao";

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;


  try {
    const response = await fetch(url);
    const data = await response.json();
    // Your remaining code
  } catch (error) {
    console.error("Error fetching images:", error);
  }
  
//   const response = await fetch(url);
//   const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

//   console.log(data);
  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
