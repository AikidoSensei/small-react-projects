import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <main className='container h-screen flex items-center justify-center backdrop-blur'>
        <section className='to-do-container bg-white/30 w-auto h-64 py-5 px-5 rounded-xl backdrop-blur-sm shadow-2xl'>
          <div className='input-container space-x-[6rem] w-auto'>
            <input
              type='text'
              className=' px-3 w-64 h-8 rounded border-none outline-none bg-white/10 font-comic'
            />
            <button className='py-2 px-4 py-1 bg-green-600/60 rounded-lg shadow-xl text-white hover:bg-green-500/80 font-comic'>add</button>
          </div>
            <ul className="list-container list-none px-0">
              
              <li className='w-inherit  bg-white/30 list-outside h-10 flex items-center space mt-3 flex space-x-72 px-4'>
                <h2>item</h2>
                <div className='space-x-5'>
                  <button>i</button>
                  <button>c</button>
                </div>
                </li>
            </ul>
        </section>
      </main>
    </div>
  )
}

export default App;
