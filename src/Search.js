

function Search({ search, handleSearchChange, handleSortChange }) {


    return (
        <div className="ui form searchbar">
            <input 
                type="text" 
                placeholder="Search..." 
                name="search" value={search} 
                onChange={handleSearchChange} 
            />
            <select onChange={handleSortChange} className="ui dropdown">
                <option value="all">Select sort option...</option>
                <option value="abc">A to Z</option>
                <option value="cba">Z to A</option>
                <option value="loToHi">Likes: Low to High</option>
                <option value="hiToLo">Likes: High to Low</option>
                <option value="oldestToYoungest">Oldest to Youngest</option>
                <option value="YoungestToOldest">Youngest to Oldest</option>
            </select>
        </div>
    )
}

export default Search;