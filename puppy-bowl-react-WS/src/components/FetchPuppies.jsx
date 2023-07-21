



const FetchPuppies = ({ handleClick, puppyList }) => {

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
              <button>Delete</button>
            </section>
          ))}
    </>
  )
}



export default FetchPuppies;
