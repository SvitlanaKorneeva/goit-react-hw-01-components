import React from 'react';
import s from './FriendListItem.module.css';
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  console.log(isOnline)
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline} ></span>
      <img className={s.avatar } src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
   
};