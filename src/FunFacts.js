import { useState } from "react";
import StateCard from "./StateCard";
import Search from "./Search";

function FunFacts({ states, updateLikes } ) {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("all")

    function handleSearchChange(e) {
        setSearch(e.target.value)
    }
      
    const searchStates = states.filter((state) => state.name.toLowerCase().startsWith(search.toLowerCase()))
    
    function handleSortChange(e) {
        setSort(e.target.value)
    }

    const sortedStates = searchStates.sort((state1, state2) => {
        if (sort === "all") {
            return searchStates
        }
        if (sort === "abc") {
            return state1.name.toLowerCase() < state2.name.toLowerCase() ? -1 : 1
        } else if (sort === "cba") {
            return state2.name.toLowerCase() < state1.name.toLowerCase() ? -1 : 1 
        } else if (sort === "loToHi") {
            return state1.likes - state2.likes
        } else if (sort === "hiToLo") {
            return state2.likes - state1.likes
        } else if (sort === "oldestToYoungest") {
            return state1.est - state2.est
        } else if (sort === "youngestToOldest") {
            return state2.est - state1.est
        }
    })


    const displayStates = sortedStates.map((state) => {
        return <StateCard
                key={state.name}
                state={state}
                updateLikes={updateLikes}
                />
    })

    return (
        <div>
            <div>
                <h1 style={{textAlign: 'center'}}>Fun Facts...</h1>
            </div>
            <div style={{textAlign: 'center'}}>
            <Search 
            search={search}
            handleSearchChange={handleSearchChange}
            handleSortChange={handleSortChange}
            />
            </div>
            <div className="ui grid" style={{padding: '10px'}}>
                <div className="two column row">
                {displayStates}
                </div>
            </div>
        </div>
    )
}

export default FunFacts;