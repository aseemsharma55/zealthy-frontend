import React, { useState } from 'react';
import axios from 'axios';

interface UserInput {
  name: string;
  email: string;
  description: string;
}

const Ticket: React.FC = () => {
  const [input, setInput] = useState<UserInput>({ name: '', email: '', description: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/zealthy/user_query', input);
        console.log(response)
        
        if (response.status === 200) {
            // Handle success - maybe clear the form or show a success message
            alert("Ticket submitted successfully!")
            console.log("Ticket submitted successfully!", response.data);
        } else {
            // Handle any non-200 HTTP status codes as you see fit
            console.error("Error submitting ticket:", response.data);
        }
    } catch (error) {
        // Handle errors, e.g., network error or invalid JSON response
        console.error("API call failed:", error);
    }
    
};


  const handleCheckUpdate = () => {
    // Logic to fetch the status of the problem for the user
    // This is a mockup, replace with actual fetch logic
    setStatus('in progress'); // replace with actual status
  };

  return (
    <div className="container mt-4">
      <h2>Submit a Ticket</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={input.name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={input.email} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={input.description} onChange={handleInputChange}></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>

      <div className="mt-4">
        <h3>Check your ticket status</h3>
        <button className="btn btn-info" onClick={handleCheckUpdate}>Show me update</button>
        {status && <p className="mt-2">Your ticket status: <strong>{status}</strong></p>}
      </div>
    </div>
  );
};

export default Ticket;
