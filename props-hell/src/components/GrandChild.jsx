import SuperGrandChild from "./SuperGrandChild";

const GrandChild = () => {
  return (
    <div>
      <div className="w-40 h-40 bg-purple-300">GrandChild : </div>
      <SuperGrandChild />
    </div>
  );
};

export default GrandChild;
