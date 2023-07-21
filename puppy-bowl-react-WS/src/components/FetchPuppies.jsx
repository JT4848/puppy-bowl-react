



const FetchPuppies = ({ handleClick, puppyList, setPuppyList }) => {

  
  const cohortName = "2306-FSA-ET-WEB-FT-SF";
  const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

  const removePuppy = async (id) => {
    
    try{
      const response = await fetch(`${API_URL}/players/${id}`,{
        method: "DELETE",
      })
      const result = response.json();
      if(result.success){
        setPuppyList((prevPuppies) => prevPuppies.filter((puppy) => puppy.id !== id))
      }
      
    }catch(err){
      console.error(`Failed to delete :/`, err)
    }

  }

  return(
    <>
      <h1>Puppy Bowl</h1>
          {
          puppyList.map((puppy) => (
            <section key={puppy.id}>
              <h2>Name: {puppy.name}</h2>
              <h2>Breed: {puppy.breed}</h2>
              <img src={puppy.imageUrl} alt={puppy.name} />
              <h2>Id: {puppy.id}</h2>
              <button onClick={() => handleClick(puppy)}>Details</button>
              <button onClick={() => removePuppy(puppy.id)}>Delete</button>
            </section>
          ))}
    </>
  )
}



export default FetchPuppies;
