const Chat = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center text-white">
      <form>
        <input type="text" className="text-black" />
        <input type="submit" value="검 색" />
      </form>
    </div>
  );
};

export default Chat;
