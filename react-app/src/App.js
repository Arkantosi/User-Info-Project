import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

function App() {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const [newContact, setNewContact] = useState(0)

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  
  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, newContact, age: Number(newAge)});
  };
 const updateUser = async (id, age) => {
  const userDoc = doc(db, "users", id); 
  const newFields = {age: age + 1 };
  await updateDoc(userDoc, newFields);
  
 };

 const deleteUser = async (id) => {
  const userDoc = doc (db, "users", id);
  await deleteDoc(userDoc);
 };

  useEffect(() =>{
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id} )));
    };

    getUsers(); 
  }, []);

  return (
     <div className="App">
     <input 
        placeholder=" Full Name..."
        onChange={(event => {
          setNewName(event.target.value);
     })}>
     </input>
     <input 
     type="number"
      placeholder=" Age..."
      onChange={(event) => {
        setNewAge(event.target.value);
     }}></input>

<input 
     type="number"
      placeholder=" Contact..."
      onChange={(event) => {
        setNewContact(event.target.value);
     }}></input>

  
     <button href="#cbcbf3" class="button" onClick={createUser}>Create User info</button>
       {users.map((user) => {
          return (
            <div> 
              {" "}
               <h1>Name: {user.name}</h1>
               <h1>Age: {user.age}</h1>
               <h1>Contact: Classified{user.contact}</h1>
               <button href="#cbcbf3" class="button" onClick={()=> { updateUser(user.id, user.age
               )}}> Increase Age </button>
               <button href="#cbcbf3" class="button" onClick={() => {deleteUser(user.id
               )} }> Delete User </button>
            
          </div>
          );
        })}
    </div>
  );
}

export default App;