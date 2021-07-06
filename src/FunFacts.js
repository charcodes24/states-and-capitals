import { useState } from "react";
import StateCard from "./StateCard";
import Search from "./Search";

function FunFacts({ states, updateLikes } ) {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("all")
  
  
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
            <Search 
            search={search}
            handleSearchChange={handleSearchChange}
            handleSortChange={handleSortChange}
            />
            </div>
            <div className="ui grid">
                <div className="two column row">
                {displayStates}
                </div>
            </div>
        </div>
    )
}

export default FunFacts;