"use client";

import React from 'react';
import { useQuery } from '@apollo/client';

// GraphQL Query to fetch all tasks
import { GET_ALL_TASKS_QUERY } from '@/app/gql/gql_Tasks';


export default function showTask() {
  const { data, loading, error } = useQuery(GET_ALL_TASKS_QUERY);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <h2 className="text-3xl font-semibold text-center text-gray-900">All Tasks</h2>
      
      {/* Table */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-gray-700 font-bold">Title</th>
              <th className="py-3 px-6 text-left text-gray-700 font-bold">Description</th>
              <th className="py-3 px-6 text-left text-gray-700 font-bold">Completed</th>
              <th className="py-3 px-6 text-left text-gray-700 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllTasks.map((task: any) => (
              <tr key={task._id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 text-gray-900">{task.title}</td>
                <td className="py-4 px-6 text-gray-700">{task.description}</td>
                <td className="py-4 px-6 text-gray-700">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                      task.completed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {task.completed ? 'Completed' : 'Pending'}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                  <button className="ml-4 text-red-500 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
