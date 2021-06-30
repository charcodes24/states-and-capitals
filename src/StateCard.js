function StateCard({ state }) {
    const {abbr, name, capital, image, fact} = state
    return (
        <div>
            <h2>{name}</h2>
            <h3>{capital}</h3>
            <img src={image}/>
            <p>{fact}</p>
        </div>
    )
}

export default StateCard;