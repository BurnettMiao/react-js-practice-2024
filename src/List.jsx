function List(props) {
  // const fruits = [
  //   { id: 1, name: 'apple', calories: 95 },
  //   { id: 2, name: 'orange', calories: 45 },
  //   { id: 3, name: 'banana', calories: 105 },
  //   { id: 4, name: 'coconut', calories: 159 },
  //   { id: 5, name: 'pineapple', calories: 37 },
  // ];

  // ALPHABETICAL
  // fruits.sort((a, b) => a.name.localeCompare(b.name));

  // REVERSE ALPHABETICAL
  // fruits.sort((a, b) => b.name.localeCompare(a.name));

  // NUMERIC
  // fruits.sort((a, b) => a.calories - b.calories);

  // REVERSE NUMERIC
  // fruits.sort((a, b) => b.calories - a.calories);

  // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  // const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  // 使用 props 方式
  const category = props.category;
  const itemList = props.items;

  console.log(itemList);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
    </>
  );
}

export default List;
