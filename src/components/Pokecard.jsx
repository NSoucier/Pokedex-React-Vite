const Pokecard = ({id, name, type, base_experience}) => {
    return (
        <div className="Pokecard">
            <p className="Pokecard-name">{name}</p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Image of pokemon" className="Pokecard-image"></img>
            <p className="Pokecard-type">Type: {type}</p>
        </div>
    )
};

export default Pokecard;