import './services.sass';
const Services = () => {
  return (
    <div className="services__container">
      <ServicesCard
        title="Online Services"
        subtitle="Access to multiplayer games"
        price={1}
      />
      <ServicesCard
        title="Larget storage"
        subtitle="Extra 1TB of cloud save"
        price={2}
      />
      <ServicesCard
        title="Customizable Profile"
        subtitle="Custom theme on your profile"
        price={2}
      />
    </div>
  );
};

export default Services;
interface IServicesCard {
  title: string;
  subtitle: string;
  price: number;
}
const ServicesCard = ({ title, subtitle, price }: IServicesCard) => {
  return (
    <div className="services__card">
      <input
        className="services__checkbox"
        type="checkbox"
        name="check"
        id=""
      />
      <div className="services-title__container">
        <h3 className="services__title">{title}</h3>
        <h4 className="services__subtitle">{subtitle}</h4>
      </div>
      <div className="servicess__amount">
        <span>+{price}/mo</span>
      </div>
    </div>
  );
};
