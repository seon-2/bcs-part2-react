const AnimalCard = ({animal}) => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`} alt="동물" />
    </div>
  );
};

export default AnimalCard;
