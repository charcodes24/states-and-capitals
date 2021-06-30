import StateCard from "./StateCard";

function FunFacts({ states} ) {


    const displayStates = states.map((state) => {
        return <StateCard
                key={state.name}
                state={state}
                />
    })

    return (
        <div>
            {displayStates}
        </div>
    )
}

export default FunFacts;