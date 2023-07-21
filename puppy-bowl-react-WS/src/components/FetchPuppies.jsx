import { useEffect, useState } from 'react'



const FetchPuppies = () => {
  const [puppyList, setPuppyList] = useState([]);

  const cohortName = "2306-FSA-ET-WEB-FT-SF";
  const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

  useEffect(() => {
    const fetchPuppies = async () => {
      const response = await fetch(`${API_URL}/players`);
      const puppyData = await response.json();
      setPuppyList(puppyData.data.players)
    }
    fetchPuppies();
  })

  return(
    <>
      <h1>Puppy Bowl</h1>
      <ul>
        {
          puppyList.map((puppies) => {
            return <li key={puppies.id}>{puppies.name}</li>
          })
        }
      </ul>
    </>
  )
}



export default FetchPuppies;