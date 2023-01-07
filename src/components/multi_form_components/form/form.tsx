import './form.sass';
const Form = () => {
  return (
    <form className="form__group-container">
      <div className="form__group">
        <label className="form__label" htmlFor="name">
          Name
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="email">
          Email Address
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="form__input"
          type="text"
          id="phone"
          name="phone"
          required
        />
      </div>
    </form>
  );
};

export default Form;
