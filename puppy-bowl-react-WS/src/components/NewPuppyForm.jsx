import { useState } from "react";




const NewPuppyForm = ({ onFormSubmit }) => {
const[name, setName] = useState('');
const [breed, setBreed] = useState('');
const [imageUrl, setImageUrl] = useState('');

const handleFormSubmit = (e) => {
  e.preventDefault();

  const newPuppy = {
    name,
    breed,
    imageUrl,
  }

  onFormSubmit(newPuppy);

  setName('');
  setBreed('');
  setImageUrl('');
}

  return(
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name: <input type='text' id='name' name='name' defaultValue={name} onChange={(e) => setName(e.target.value)} required/>
        </label>
        <label>
          Breed: <input type='text' id='breed' name='breed' defaultValue={breed} onChange={(e) => setBreed(e.target.value)} required/>
        </label>
        <label>
          Image: <input type='text' id='image' name='image' defaultValue={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}



export default NewPuppyForm;
