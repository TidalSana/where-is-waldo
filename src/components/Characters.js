import "../styles/Character.css";

const Characters = (props) => {
  const { kirby } = props;

  return (
    <div className="characters flex">
      <div className="images">
        <img className="ability-img" src={kirby.abilityOne} alt="" />
      </div>
      <div className="images">
        <img className="ability-img" src={kirby.abilityTwo} alt="" />
      </div>
      <div className="images">
        <img className="ability-img" src={kirby.abilityThree} alt="" />
      </div>
    </div>
  );
};

export default Characters;
