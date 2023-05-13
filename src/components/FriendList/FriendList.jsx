import PropTypes from 'prop-types';
import f from './FriendList.module.css';

const bgcColor = variant => {
  switch (variant) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const FriendList = ({ friends }) => (
  <>
    <ul className={f.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={f.item} key={id}>
          <span
            className={f.status}
            style={{ backgroundColor: bgcColor(isOnline) }}
          ></span>
          <img className={f.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={f.name}>{name}</p>
        </li>
      ))}
    </ul>
  </>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};
