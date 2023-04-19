import { useEffect, useState } from "react";
import getCategories from "../../api/getCategories";
import "./style.css"


const HomePage = () => {
    const [search,setSearch]=useState("")
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        getCategories().then(data=>{
            setCategories(data)
        })
    },[])

    const searchHandler=(e)=>{
        const searchValue=e.target.value
        setSearch(searchValue)
    }
    const submitFormHandler=(e)=>{
        e.preventDefault()
        console.log("submit: ",e)
    }

    return ( 
        <div>
            <h1>Home Page</h1>
            <form className="form">
                    <p>Input Field</p>
                <input className="category-input" name="search" value={search} onChange={searchHandler}/>
                <input className="search-btn" type="submit" onClick={submitFormHandler}/>
            </form>
            <div className="categories">
                {
                    categories.map(item=>{
                        return(
                             <div className="category" key={item.id}>
                            <p className="category -name">{item.name}</p>
                            <div>
                                <img className="category-img" src={item.image} alt="category_picture"/>
                            </div>
                        </div>
                        )
                       
                })
                }
             </div>
        </div>
     );
}
 
export default HomePage;