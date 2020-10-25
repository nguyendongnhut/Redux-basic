import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby, deleteHobby } from "../actions/hobby";
import HobbyList from "../components/Home/HobbyList";

HomePage.propTypes = {};

const randomId = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  const dispatch = useDispatch();

  console.log("home page: ", hobbyList);

  const handleAddHobbyClick = () => {
    const newId = randomId();
    // create new hobby to add in hobby list
    const newHobby = {
      id: newId,
      title: `hobby ${newId}`,
    };

    // dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };

  const handleDeleteHobby = (hobby) => {
    const action = deleteHobby(hobby);
    dispatch(action);
  };

  return (
    <div className="home-page">
      <h1>REDUX-HOOK home-page</h1>

      <button onClick={handleAddHobbyClick}>random hobby</button>

      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
        onDeleteHobby={handleDeleteHobby}
      />
    </div>
  );
}

export default HomePage;
