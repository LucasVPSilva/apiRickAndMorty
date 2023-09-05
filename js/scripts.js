const showListCharacter = document.querySelector('.characters-list');
// const cardCharacter = document.querySelector('.character-card');
// const divImgCharacter = document.querySelector('.character-img');
async function listCharacters() {
  try {
    const response = await api.get("/character");
    const characters = response.data.results;


    console.log(response);
    console.log(characters);

    characters.forEach(character => {
      // div principal
      const showCharacter = document.createElement("div");
      showCharacter.classList.add('character-card');

      // div no qual vai ter o card de img e texto
      const cardCharacter = document.createElement("div");
      cardCharacter.classList.add('character-card');

      // section da img:
      const sectionImg = document.createElement("section");
      sectionImg.classList.add('character-img');

      sectionImg.innerHTML = `<img src="${character.image}"/>`

      // section dos textos:

      const sectionText = document.createElement("section");
      sectionText.classList.add('character-text');
      sectionText.innerHTML = `
        <h3>${character.name}</h3>
        <h5>${character.status} - ${character.species}</h5>
        <p>Última localização conhecida:</p>
        <h4>${character.location.name}</h4>
        <p>Ultima aparição nos episodios:</p>
        <h4>${character.episode.length}</h4>
      `


      // fazendo os appendChild

      cardCharacter.appendChild(sectionImg);
      cardCharacter.appendChild(sectionText)
      showListCharacter.appendChild(cardCharacter);



      // showCharacter.innerHTML = `
      // <img src="${character.image}"/>
      // <h3>${character.name}</h3>
      // <h5>${character.status}</h5>
      // `

    });



  } catch (error) {
    console.log(`Erro ao buscar: ${error} `);
  }


}

listCharacters()