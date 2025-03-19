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
    const imgUrl2 = data[1].img;
    const imgTitle2 = data[1].title;
    const discardBtn = document.getElementById("discard-btn-1");

    discardBtn.addEventListener("click", () => {
      const card = discardBtn.closest(".card"); // Trova l'elemento card più vicino al pulsante
      card.parentElement.removeChild(card); // Rimuove la card dalla pagina
    });

    const img1 = document.getElementById("img-1");
    const title1 = document.getElementById("title-img-1");
    const img2 = document.getElementById("img-2");
    const title2 = document.getElementById("title-img-2");

    img1.src = imgUrl;
    img2.src = imgUrl2;
    img1.alt = imgTitle;
    img1.alt = imgTitle2;
    title2.innerText = imgTitle;
  })
  .catch((err) => {
    console.log("Si è verificato un errore:", err);
  });
