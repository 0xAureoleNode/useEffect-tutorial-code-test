import React from 'react';

const App = () => {
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return <Toggle toggle={toggle} onToggle={handleToggle} />;
};

const Toggle = ({ toggle, onToggle }) => {
  const calledOnce = React.useRef(false);
  // bez init value is false, 所以一旦掉用完之后，calledOnce be true，直接就一直处于return，不会执行接下来的函数
  React.useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    if (toggle === false) {
      console.log('I run only once if toggle is false');
      calledOnce.current = true;
    }
  }, [toggle]);

  return (
    <div>
      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};

export default App;
