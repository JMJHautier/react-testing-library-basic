import { useState } from 'react';

const Home = ({ isUser }) => {
  const [toggleWelcomeText, setToggleWelcomeTest] = useState(false);
  return (
    <div data-testid='home-div' style={isUser && { backgroundColor: 'green' }}>
      <div data-testid='welcome-div' onClick={() => setToggleWelcomeTest(prev => !prev)}>
        {!toggleWelcomeText ? 'This is my home component' : 'Alternate text'}
      </div>
      {isUser && <div>User is logged in</div>}
    </div>
  );
};

export default Home;
