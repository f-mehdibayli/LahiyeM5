const baseUrl="http://localhost:3001"

const getCategories = async() => {
    const res=await fetch(`${baseUrl}/categories`)
    const data=await res.json()
    return data
}
 
export default getCategories;