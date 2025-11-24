

function SearchBar({searchTerm, setSearchTerm}){

    return (
        <>
            <p>Search:</p>
            <input value = {searchTerm} onChange = {function(e){setSearchTerm(e.target.value)}} />
        </>
    )
}

export {SearchBar};