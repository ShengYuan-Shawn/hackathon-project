import React from "react";

// Comment Styling
const messageBox = {
  border: "2px solid #1b262c",
  padding: "10px",
  width: "80%",
  margin: "0 auto 30px",
};

const Forum = () => {
  const [comments, setComments] = React.useState([]);

  // Form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    //get the form
    let form = e.target.elements; //get the name keyed element list
    // get comments
    setComments([
      ...comments, //append the original
      {
        name: form["name"].value,
        comment: form["comments"].value,
      },
    ]);
  };

  return (
    <div className="forum-content">
      <div className="form" onSubmit={handleSubmit}>
        <h4>Throw Your Opinion!</h4>
        <form>
          <input
            className="comments-box"
            name="comments"
            placeholder="Comments"
          ></input>
          <br />
          <br />
          <input className="name-box" name="name" placeholder="Name"></input>
          <br />
          <button>Submit Comment</button>
        </form>

        <div className="show-comments">
          {comments.map((comment, i) => (
            <div style={messageBox} key={i}>
              <p>Comment: {comment.comment}</p>
              <p>Name: {comment.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
