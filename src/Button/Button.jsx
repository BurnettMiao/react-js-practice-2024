// 使用 module 的方式 import使用 module 的方式 import
// import styles from './Button.module.css';

function Button() {
  // 使用 module 的方式 import使用 module 的方式 import
  // return <button className={styles.button}>Click me</button>;

  // 使用 object 的方式
  const styles = {
    backgroundColor: 'hsl(200, 100%, 50%)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  return <button style={styles}>Click Me</button>;
}

export default Button;
