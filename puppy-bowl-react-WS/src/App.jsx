
import { useState, useEffect } from 'react'
import './App.css'
import FetchPuppies from './components/FetchPuppies'
import SinglePuppyDetails from './components/SinglePuppyDetails';

const App = () => {
  const [puppyList, setPuppyList] = useState([]);
  const [singlePuppy, setSinglePuppy] = useState(null);
  const [createdPuppy, setCreatedPuppy] = useState("");

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

const formSubmit = (e) => {
  e.preventDefault();
  setCreatedPuppy(createdPuppy)
}
  return (
    <>
    <form onSubmit={formSubmit}>
      <label>
        Name: <input value={createdPuppy} onChange={e => setCreatedPuppy(e.target.value)}/>
      </label>
      <label>
        Breed: <input value={createdPuppy} onChange={e => setCreatedPuppy(e.target.value)}/>
      </label>
      <label>
        Image: <input value={createdPuppy} onChange={e => setCreatedPuppy(e.target.value)}/>
      </label>
      <button>Submit</button>
    </form>
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
