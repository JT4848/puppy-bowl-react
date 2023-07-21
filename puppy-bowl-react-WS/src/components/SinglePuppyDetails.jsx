





const SinglePuppyDetails = ({ singlePuppy, backToPuppies }) => {
  return(
    <>
      {
        singlePuppy &&
        <section>
          <h1>Name: {singlePuppy.name}</h1>
          <h1>Breed: {singlePuppy.breed}</h1>
          <img src={singlePuppy.imageUrl}/>
          <h1>Id: {singlePuppy.id}</h1>
          <button onClick={backToPuppies}>Back to puppies</button>
        </section>
      }
    </>
  )
}


export default SinglePuppyDetails;
