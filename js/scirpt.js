fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore nella richiesta");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Libri ricevuti:", data);

    // Seleziona gli elementi della card
    const img1 = document.getElementById("img-1");
    const title1 = document.querySelector(".card-title");
    const desc1 = document.querySelector(".card-text");

    // Imposta immagine, titolo e descrizione
    img1.src = data[0].img;
    img1.alt = data[0].title;
    title1.textContent = data[0].title;
    desc1.textContent = `Prezzo: €${data[0].price}`;
  })
  .catch((err) => {
    console.log("Si è verificato un errore:", err);
  });
