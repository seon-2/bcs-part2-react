const Chat = () => {
  // form 태그의 onSubmit 안에 들어가서, 엔터로 검색 시 새로고침 막음.
  const onSubmitChat = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-black min-h-screen flex justify-center items-center text-white">
      <form onSubmit={onSubmitChat}>
        <input type="text" className="text-black" />
        <input type="submit" value="검 색" />
      </form>
    </div>
  );
};

export default Chat;
