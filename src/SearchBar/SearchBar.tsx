import './SeachBar.css'

function SearchBar(){

    

    return(
        <div className="SearchBarContainer">
            <input className="searchBar" type="text" placeholder="Search" />
            <button className="LoginBtn">Connect</button>

        </div>
    )
}

export default SearchBar