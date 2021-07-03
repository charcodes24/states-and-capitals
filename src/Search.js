function Search({ search, handleSearchChange, handleSortChange }) {

    return (
        <div>
            <input type="text" placeholder="Search..." name="search" value={search} onChange={handleSearchChange}/>
            <select onChange={handleSortChange}>
                <option value="all">Select sort option...</option>
                <option value="abc">A to Z</option>
                <option value="likes">Likes: Low to High</option>
            </select>
        </div>
    )
}

export default Search;