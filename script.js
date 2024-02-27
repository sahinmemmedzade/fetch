const table = document.getElementById("table");
const thead = document.getElementById("thead");
const theadtr = document.getElementById("theadtr");
const tbody = document.getElementById("tbody");

fetch('https://northwind.vercel.app/api/products')
  .then(response => response.json())
  .then(data => {
    for (const key in data[0]) {
      const th = document.createElement("th");
      th.innerHTML = key;
      theadtr.appendChild(th);
    }

    data.forEach(item => {
      const tr = document.createElement("tr");

      for (const key in item) {
        const td = document.createElement("td");
        td.innerHTML = item[key];
        tr.appendChild(td);
      }

      tbody.appendChild(tr);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
fetch('https://api.tvmaze.com/shows')
.then(response => response.json())
.then(data => {
  const cardsContainer = document.getElementById('cardsContainer');

  data.forEach(show => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = show.image ? show.image.medium : 'placeholder.jpg'; 
    image.alt = show.name;

    const title = document.createElement('h2');
    title.textContent = show.name;

    const language = document.createElement('p');
    language.textContent = 'Language: ' + (show.language ? show.language : 'Unknown');

    const rating = document.createElement('p');
    rating.textContent = 'Rating: ' + (show.rating && show.rating.average ? show.rating.average : 'Unknown');

    const genres = document.createElement('p');
    genres.textContent = 'Genres: ' + (show.genres ? show.genres.join(', ') : 'Unknown');
    const status = document.createElement("p")
    status.innerHTML = `Status : ${show.status}`
    const runtime = document.createElement("p")
            const premiered = document.createElement("p")
            const ended = document.createElement("p")
            const network = document.createElement("p")
            network.innerHTML = `Country : ${show.network && show.network.country.name}`
            ended.innerHTML =` Ended : ${show.ended}`
            premiered.innerHTML = `Premier : ${show.premiered}`
            runtime.innerHTML = `Runtime : ${show.runtime} min`
            
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(language);
    card.appendChild(rating);
    card.appendChild(genres);
    card.append(status)
    card.append(runtime)
    card.append(premiered)
    card.append(ended)
    card.append(network)
    cardsContainer.appendChild(card);
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
});