import './summary.sass';
const Summary = () => {
  return (
    <article className="summary__container">
      <main className="summary__main-content">
        <div className="summary__main-displayer">
          <div className="summary_main-description">
            <span>Arcade (Monthly)</span>
            <span>Change</span>
          </div>
          <span className="summary__main-price">$9/mo</span>
        </div>
        <hr />
        <div>
          <div className="summary__first-description"></div>
          <div className="summary__second-description"></div>
        </div>
      </main>
      <footer>
        <span>Total (per year)</span>
        <span>$120/yr</span>
      </footer>
    </article>
  );
};

export default Summary;
