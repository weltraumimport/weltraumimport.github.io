import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>I am a {greeting}!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        Click Here!
      </button>
    </div>
  );
}