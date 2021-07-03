import { useState } from "react";
import StateCard from "./StateCard";
import Search from "./Search";

function FunFacts({ states, updateLikes } ) {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")


    //set search state upon input in search box
    function handleSearchChange(e) {
        setSearch(e.target.value)
    }
    //return states that start with search state value
    const searchStates = states.filter((state) => state.name.toLowerCase().startsWith(search.toLowerCase()))
    
    //set sort state to value to option selected
    function handleSortChange(e) {
        setSort(e.target.value)
    }

    //sort states by option value
    function sortStates() {
        if (sort === "all") {
            return states
        }
        if (sort === "abc") {
            return states.sort((a,b) => {
                return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
            })
        } else if (sort === "likes") {
            return states.sort((a,b) => {
                return a.likes - b.likes
            })
        }
    }


    const displayStates = searchStates.map((state) => {
        return <StateCard
                key={state.name}
                state={state}
                updateLikes={updateLikes}
                />
    })

    return (
        <div>
            <Search 
            search={search}
            handleSearchChange={handleSearchChange}
            handleSortChange={handleSortChange}
            />
            {displayStates}
        </div>
    )
}

export default FunFacts;