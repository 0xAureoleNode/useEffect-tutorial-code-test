import React from 'react';

const App = () => {
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(
      () => setTimer((currentTimer) => currentTimer + 1),
      1000
    );
    console.log(interval);
    return () => clearInterval(interval);
  }, [timer]);
  return <div>{timer}</div>;
};

export default App;
