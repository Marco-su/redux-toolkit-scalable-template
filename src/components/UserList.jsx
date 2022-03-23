import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosCall } from "../store/actions/list.actions";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.myReducer.elements);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(axiosCall());
    }
  }, [dispatch, users.length]);

  return (
    <div>
      <ul>
        {users.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
