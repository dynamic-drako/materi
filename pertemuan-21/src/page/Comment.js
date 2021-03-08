import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComment } from "../redux/actions/comment.action";

import { Spinner } from "react-bootstrap";

function Comment() {
  // use selector untuk ambil data
  const comment = useSelector((state) => state.Comment);
  console.log(comment);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComment());
  }, [dispatch]);

  return (
    <div>
      <h1>Comments</h1>

      {comment.isLoading === true ? (
        <Spinner animation="border" />
      ) : (
        comment.data.map((item, index) => (
          <div key={index}>
            <h1>Name :{item.name}</h1>
            <h1>Email: {item.email}</h1>
            <h1>Body: {item.body}</h1>
          </div>
        ))
      )}
    </div>
  );
}

export default Comment;
