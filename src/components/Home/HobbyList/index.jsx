import React from "react";
import PropTypes from "prop-types";

import "./HobbyList.css";

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
  onDeleteHobby: PropTypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
  onDeleteHobby: null,
};

function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick, onDeleteHobby } = props;
  //   const { hobbyList, activeId, onDeleteHobby } = props;

  console.log("hobby list: ", hobbyList);

  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };

  const handleDeleteClick = (hobby) => {
    if (onDeleteHobby) {
      onDeleteHobby(hobby);
    }
  };

  const listHobby = hobbyList.map((item) => (
    <li
      key={item.id}
      className={item.id === activeId ? "active" : ""}
      onClick={() => handleClick(item)}
    >
      {item.title}
      <button onClick={() => handleDeleteClick(item)}>Delete</button>
    </li>
  ));

  return <ul className="hobby-list">{listHobby}</ul>;
}

export default HobbyList;
