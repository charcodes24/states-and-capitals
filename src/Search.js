

function Search({ search, handleSearchChange, handleSortChange }) {

    const searchStyles= {
        width: "400px"
    }

    return (
        <div className="ui form">
            <input type="text" placeholder="Search..." name="search" value={search} onChange={handleSearchChange} style={searchStyles}/>
            <div className="field">
                <select onChange={handleSortChange} className="ui dropdown" style={searchStyles}>
                    <option value="all">Select sort option...</option>
                    <option value="abc">A to Z</option>
                    <option value="cba">Z to A</option>
                    <option value="loToHi">Likes: Low to High</option>
                    <option value="hiToLo">Likes: High to Low</option>
                </select>
            </div>
        </div>
    )
}

export default Search;