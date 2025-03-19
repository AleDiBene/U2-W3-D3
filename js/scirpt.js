fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore nella richiesta");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Libri ricevuti:", data);
    const imgUrl = data[0].img;
    const imgTitle = data[0].title;

    // Seleziona gli elementi HTML
    const img1 = document.getElementById("img-1");
    const title1 = document.getElementById("title-img-1");

    // Assegna i valori agli elementi
    img1.src = imgUrl;
    img1.alt = imgTitle; // Puoi aggiungere anche il titolo come alt dell'immagine
    title1.innerText = imgTitle; // Aggiungi il titolo nell'elemento h5
  })
  .catch((err) => {
    console.log("Si è verificato un errore:", err);
  });
