import React from "react";  
import {useState} from "react";

function SearchBar(){
    const fruits = ["Banana","Apple","Orange","Mango","Pineapple","Watermelon"];
    const [search, setSearch] = useState("");
    const [result, setResult] = useState(fruits);
    
    function filtre(search){
        let val = fruits.filter(fruit => fruit.toLowerCase().includes(search.toLowerCase()));
        return val;
    }

    const handleChange = (e)=>{
        e.preventDefault();
        setSearch(e.target.value);
        setResult(filtre(search));
        console.log(result);
    };
    
    return(<div>
        <input id="searchbar" type="text" placeholder="Search" value={search} onChange={handleChange}></input>
        {result.map((element) => <p key={element} >{element}</p>)}
    </div>)
}

export default SearchBar;