import Message from "./Message";

const Messages = () => {
  return (
    <div className="messages">
      {/* {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))} */}
      <Message text="Hello" />
      <Message text="Hello" />
      <Message text="Hello" />
      <Message text="Hello" />
      <Message text="Hello" />
    </div>
  );
};

export default Messages;
