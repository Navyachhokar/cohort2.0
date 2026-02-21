import { useState } from 'react'
import './App.css'

function App() {
  const[title, setTitle] = useState('');
  const[email, setEmail] = useState('');
  const[allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setAllUsers([...allUsers, {title,email}])
    setTitle('');
    setEmail('');
  }

  return (
    <>
      <div className=" flex flex-col justify-center bg-amber-200 h-screen p-8 ">
        <form
          className="flex flex-col h-[80%] w-[50%] bg-white justify-evenly rounded-2xl p-3 self-center"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            className="p-4 m-4 rounded-2xl border bg-amber-50"
            type="text"
            placeholder="Enter name"
            value={title}
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            className="p-4 m-4 rounded-2xl border bg-amber-50"
            type="text"
            placeholder="Enter email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button className="flex flex-col bg-amber-300 border rounded-xl self-center px-2 font-light mx-10 ">
            Submit
          </button>
        </form>
        <h2 className=" text-4xl font-bold text-white text-center mt-3">
          Users List
        </h2>
        {allUsers.map(function (elem, idx) {
          return (
            <div
              className="flex flex-col h-[15%] w-[50%] justify-center self-center "
              key={idx}
            >
              <div className="bg-white px-4 rounded-2xl text-s font-light ">
                <h4 className="">{elem.title}</h4>
                <p className="">{elem.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App
