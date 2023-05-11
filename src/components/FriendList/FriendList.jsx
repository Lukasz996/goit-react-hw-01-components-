import PropTypes from 'prop-types';
import f from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  <>
    <ul className={f.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={f.item}>
          <span className={f.status}>
            
          </span>
          <img className={f.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={f.name}>{name}</p>
        </li>
      ))}
    </ul>
  </>;
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
