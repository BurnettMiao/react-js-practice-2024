import PropTypes from 'prop-types';

function UserGreeting(props) {
  // 方法一
  // if (props.isLoggedIn) {
  //   return <h2>Welcome {props.userName}</h2>;
  // } else {
  //   return <h2>Please log in to continue</h2>;
  // }

  // 方法二
  // return props.isLoggedIn ? (
  //   <h2 className="welcome-message">Welcome {props.userName}</h2>
  // ) : (
  //   <h2 className="login-prompt">Please log in to continue</h2>
  // );

  // 方法三
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.userName}</h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: 'Guest',
};

export default UserGreeting;
