const movieInput = document.getElementById("movieInput");
const searchBtn = document.getElementById("searchBtn");
const resultContainer = document.getElementById("resultContainer");



async function searchMovies() {
    const query = movieInput.value;

    const response = await fetch(`https://www.omdbapi.com/?apikey=6a04d675&s=${query}`);
    const data = await response.json();
    console.log(data);

    if (data.Response === "False") {
    resultContainer.textContent = "No movies found";
    return;
    }

    resultContainer.innerHTML = "";

    for (let i = 0; i < data.Search.length; i++) {
        const resultDiv = document.createElement("div");

        const img = document.createElement("img");
        img.src = data.Search[i].Poster;

        const title = document.createElement("p");
        title.textContent = `${data.Search[i].Title} (${data.Search[i].Year})`;

        resultDiv.appendChild(img);
        resultDiv.appendChild(title);
        resultContainer.appendChild(resultDiv);

    }

}

searchBtn.addEventListener("click", searchMovies);