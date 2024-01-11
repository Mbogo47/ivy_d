const Message = (props) => {
  return (
    <>
      <div className=" message owner">
        <div className="messageContent">
          <p>Hello</p>
        </div>
        <div className="messageInfo">
          <span>just now</span>
        </div>
      </div>

      
      <div className="message ">
        <div className="messageContent">
          <p>Hy</p>
          
        </div>
  
        <div className="messageInfo">
          <span>just now</span>
        </div>
      </div>
    </>
  );
};

export default Message;
