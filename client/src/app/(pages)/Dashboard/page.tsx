import React from 'react'

export default function Dashboard() {
  return (
    <>

      <div className="p-6">
         <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
         <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius magni deserunt quae quasi accusantium ipsa sunt fugit explicabo odio! Quod voluptates explicabo libero in rerum culpa, neque atque nihil illo.
         </p>
         <div className="space-y-4 space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
               <a href="/Dashboard/add-task">Add Task</a>
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
               <a href="/Dashboard/show-task">Show Task</a>
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
               <a href="/Dashboard/add-user">Add User</a>
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
               <a href="/Dashboard/remove-user">Remove User</a>
            </button>
         </div>
      
      </div>


    </>
  )
}
