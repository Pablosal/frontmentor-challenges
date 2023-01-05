const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" name="phone" required />
      </div>
    </form>
  );
};

export default Form;
