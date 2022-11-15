import React from 'react';

const App = () => {
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return <Toggle toggle={toggle} onToggle={handleToggle} />;
};

const Toggle = ({ toggle, onToggle }) => {
  const [title, setTitle] = React.useState('Hello React');

  React.useEffect(() => {
    console.log('I still run only if toggle changes (and on mount).');
  }, [toggle, title]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div>
      <input type="text" value={title} onChange={handleChange} />
      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>{title}</div>}
    </div>
  );
};

export default App;
