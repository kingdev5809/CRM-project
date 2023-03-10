import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHomework } from "../../../../Redux/Actions/StudentAction";
import HomeworksItem from "./HomeworksItem";
function Homeworks({ group_id }) {
  const dispatch = useDispatch();
  const { token } = useParams();
  console.log(token);

  const getHomeworks = useSelector((state) => state.homeworks);
  const { homeworkData } = getHomeworks;

  useEffect(() => {
    if (!group_id) {
      dispatch(getHomework(token));
    } else {
      dispatch(getHomework(group_id));
    }
  }, [group_id]);

  return (
    <div className="homework messages-cards">
      <div className="flex">
        <h1>Homeworks</h1>
      </div>
      <div className="items">
        {group_id || token ? "" : <h1>Choose group</h1>}
        {homeworkData?.map((item) => (
          <HomeworksItem item={item} />
        ))}
      </div>
    </div>
  );
}

export default Homeworks;
