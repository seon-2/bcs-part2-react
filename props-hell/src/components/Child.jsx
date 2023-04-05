import GrandChild from "./GrandChild";

const Child = ({ gift }) => {
  return (
    <div>
      <div className="w-40 h-40 bg-pink-300">Child : {gift}</div>
      <GrandChild gift={gift} />
    </div>
  );
};

export default Child;
