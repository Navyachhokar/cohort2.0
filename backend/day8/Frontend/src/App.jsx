import { useState , useEffect} from 'react'
import axios from "axios"


function App() {

  const [notes, setNotes] = useState([]);
  const [editTitle, setEditedTitle] = useState("")
  const [editDesc, setEditedDesc] = useState("")
  const [edit, setEdit] = useState("");
  function fetchNotes(){
    axios.get("https://cohort2-0-frsh.onrender.com/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNotes()
  }, []);

  function handleSubmit(e){
    e.preventDefault()

    if(edit === ""){
      axios
        .post("https://cohort2-0-frsh.onrender.com/api/notes", {
          title: editTitle,
          description: editDesc,
        })
        .then((res) => {
          console.log(res.data);
          fetchNotes();
          resetForm()
          
        });
    }
    else{
      axios.patch("https://cohort2-0-frsh.onrender.com/api/notes/"+edit,{
        title: editTitle,
        description: editDesc
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes()
        setEdit('')
        resetForm()
        
      })
    }
    
  }

  function handleDelete(noteId){
    axios.delete("https://cohort2-0-frsh.onrender.com/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data)
      fetchNotes()
    }) 
  }

  function handleUpdate(noteId,noteTitle,noteDesc){
    setEditedTitle(noteTitle)
    setEditedDesc(noteDesc)
    setEdit(noteId)
  
  }
  function resetForm(){
    setEditedTitle("");
    setEditedDesc("");
    setEdit("")
  }

  function cancelUpdate(){
    resetForm()
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-100 mb-8 text-center">
          My Notes
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all flex flex-col gap-3">
            <input
              name="title"
              type="text"
              className="w-full p-3 bg-[#121212] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={editTitle}
              placeholder="Enter Title"
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              name="description"
              className="w-full p-3 bg-[#121212] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={editDesc}
              placeholder="Write your description here..."
              onChange={(e) => setEditedDesc(e.target.value)}
            />

            <div className="flex gap-2">
              <button
                className={`flex-1 py-3 px-6 rounded-lg font-semibold text-white transition-all 
                ${edit === "" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"}`}
              >
                {edit === "" ? "Create Note" : "Update"}
              </button>
              {edit !== "" && (
                <button
                  type="button"
                  onClick={cancelUpdate}
                  className="px-6 py-3 rounded-lg font-semibold bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note) => {
            return (
              <div
                className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
                key={note._id}
              >
                <div>
                  <h2 className="text-xl font-bold text-gray-100 mb-2 truncate">
                    {note.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {note.description}
                  </p>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-50">
                  <button
                    className="text-sm font-medium text-red-500 hover:text-red-700"
                    onClick={() => {
                      handleDelete(note._id);
                    }}
                  >
                    delete
                  </button>
                  <button
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      handleUpdate(note._id, note.title, note.description);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App
