{
  
  const handleClickShow = e => {
    const $article = e.currentTarget;
    const data = extractShowData($article);
    showData(data);
  };
  
  const extractShowData = $article => {
    const number = $article.querySelector(`.number`).textContent;
    const title = $article.querySelector(`.title`).textContent;
    const airdate = $article.querySelector(`.airdate`).textContent;
    const quote = $article.querySelector(`.quote`).textContent;
    return {
      number,
      title,
      airdate,
      quote,
    };
  };
  
  const showData = ({number, title, airdate}) => {
    const info = `Aflevering ${number} is getiteld '${title}' en verscheen op ${airdate} `;
    document.querySelector(`.selected-show`).textContent = info;
  }; 
  
  const init = () => {
    const shows = document.querySelectorAll(`.show`);
    shows.forEach($show => $show.addEventListener(`click`, handleClickShow));
  };

  init();
  
}

