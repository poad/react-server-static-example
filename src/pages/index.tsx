// 'use client';

import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import Counter from '../counter/';
import './index.css';
import { Link } from '@lazarv/react-server/navigation';

export function Home() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Cannot Dynamic routing without static data */}
      <div className="card">
        <Link to="/test/1" rollback={5000}>test</Link>
      </div>
    </>
  );
}

export default Home;
