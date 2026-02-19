function Review({ formData, prevStep }) {
  return (
    <>
      <div className="review-box">
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>Country:</strong> {formData.country}</p>
      </div>

      <button onClick={prevStep}>Previous</button>
    </>
  );
}

export default Review;

