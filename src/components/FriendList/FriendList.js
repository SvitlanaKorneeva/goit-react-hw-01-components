import React from 'react';
import FriendListItem from './FriendListItem'
import s from './FriendList.module.css';
import PropTypes from "prop-types";

const FriendList = ( {friends} ) => (
    <ul>
        {friends.map((el) => {
            const { avatar, name, isOnline, id } = el;
            return (
            <FriendListItem
            key={el.id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
            id={id}
            className={s.item}
          />
            );
        })}
    </ul>

);

export default FriendList;

