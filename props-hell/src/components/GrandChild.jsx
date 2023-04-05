import SuperGrandChild from "./SuperGrandChild";

const GrandChild = ({ gift }) => {
  return (
    <div>
      <div className="w-40 h-40 bg-purple-300">GrandChild : {gift}</div>
      <SuperGrandChild gift={gift} />
    </div>
  );
};

export default GrandChild;
