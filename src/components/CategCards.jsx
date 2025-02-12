function CategCards(cards) {
    return (
      <div>
          <div className="category-card">
            <img src={cards.categObj.photoName} alt={cards.categObj.title} />
            <span>{cards.categObj.title}</span>
          </div>
      </div>
    )
  }

  export default CategCards;