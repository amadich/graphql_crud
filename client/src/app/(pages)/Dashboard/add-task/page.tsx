"use client";

import React, { FormEvent, useState } from 'react';
import { useMutation } from '@apollo/client';

// Define the GraphQL mutation for creating a task
import { CREATE_TASK_MUTATION } from '@/app/gql/gql_Tasks';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  // Use the mutation hook
  const [createTask, { loading, error }] = useMutation(CREATE_TASK_MUTATION);

  const handleSubmit = async (e : FormEvent) => {
    e.preventDefault();

    const taskInput = {
      title,
      description,
      completed,
    };

    try {
      // Call the mutation to create the task
      await createTask({ variables: { taskInput } });

      // Log the task input
      console.log('Task created successfully!' , taskInput);

      // Optionally, reset form fields
      setTitle('');
      setDescription('');
      setCompleted(false);

      // You can add any success handling here (like a notification or redirect)
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-32"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="completed" className="block text-gray-700 font-bold mb-2">
            Completed:
          </label>
          <input
            type="checkbox"
            id="completed"
            name="completed"
            checked={completed}
            onChange={() => setCompleted(!completed)}
            className="mr-2 leading-tight"
          />
          <span className="text-gray-700">Yes</span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        >
          {loading ? 'Adding Task...' : 'Add Task'}
        </button>

        {error && <p className="mt-4 text-red-500">Error: {error.message}</p>}
      </form>
    </>
  );
}
