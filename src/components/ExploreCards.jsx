function ExploreCards(cards) {
  return (
    <div>
        <div className="card">
          <img src={cards.bestObj.image} alt={cards.bestObj.title} className="card-image" />
              <div className="card-overlay">
                <p className="card-subtitle">{cards.bestObj.subtitle}</p>
                <h2 className="card-title">{cards.bestObj.title}</h2>
              </div>
        </div>
    </div>
  )
}

export default ExploreCards;