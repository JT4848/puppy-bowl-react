
import { useState, useEffect } from 'react'
import './App.css'
import FetchPuppies from './components/FetchPuppies'
import SinglePuppyDetails from './components/SinglePuppyDetails';
import NewPuppyForm from './components/NewPuppyForm';

const App = () => {
  const [puppyList, setPuppyList] = useState([]);
  const [singlePuppy, setSinglePuppy] = useState(null);
  const [createdPuppy, setCreatedPuppy] = useState({
    name: '',
    breed: '',
    imageUrl : ''
  });



  const cohortName = "2306-FSA-ET-WEB-FT-SF";
  const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

  useEffect(() => {
    const fetchPuppies = async () => {
      const response = await fetch(`${API_URL}/players`);
      const puppyData = await response.json();
      setPuppyList(puppyData.data.players)
      console.log(puppyData.data.players)
    }
    fetchPuppies();
  },[])


const handleClick = (clickedPuppy) => {
  console.log(clickedPuppy)
  setSinglePuppy(clickedPuppy);

}

const handleFormSubmit = async (newPuppy) => {
  try{
    const response = await fetch(`${API_URL}/players`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newPuppy)
    })
    const result = await response.json();
    if(result.success){
      setPuppyList([...puppyList, result.data.newPlayer])
      setCreatedPuppy({ name: '', breed: '', imageUrl: '' })
    }
    else{
      console.error(`Could not create new puppy :/`)
    }
  }catch(err){
    console.error(`Error while submitting form :/`, err)
  }

}
  return (
    <>
    <NewPuppyForm onFormSubmit={handleFormSubmit}/>
    {
      singlePuppy ? (
        <SinglePuppyDetails singlePuppy={singlePuppy}/>
      ) : (
        <FetchPuppies handleClick={handleClick} puppyList={puppyList} setPuppyList={setPuppyList}/>
      )
    }
    </>
  )
}

export default App
