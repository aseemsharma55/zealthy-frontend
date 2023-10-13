import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UserTicket {
  name: string;
  email: string;
  desc: string;
  status: string;
  reply?: string;
};

const AdminPanel: React.FC = () => {
  const [tickets, setTickets] = useState<UserTicket[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
        try {
            const response = await axios.get('https://zealthy-backend.azurewebsites.net/zealthy/fetch_users');
            console.log(response.data.data);
            setTickets(response.data.data);
            setIsLoading(false);  // Set loading to false once data is fetched
        } catch (err) {
            console.error('Error fetching tickets:', err);
            setIsLoading(false);  // Also set loading to false in case of error
        }
    };

    fetchTickets();
  }, []);

  const updateTicketStatus = (index: number, status: string) => {
    const updatedTickets = [...tickets];
    updatedTickets[index].status = status;
    setTickets(updatedTickets);
  };

  const handleReplyChange = (index: number, reply: string) => {
    const updatedTickets = [...tickets];
    updatedTickets[index].reply = reply;
    setTickets(updatedTickets);
  };

  const handleSubmit = async (index:number,row: UserTicket) => {
    try {
      console.log(row)
      const response = await axios.post('https://zealthy-backend.azurewebsites.net/zealthy/update', {'email':row.email,'status':row.status});
      console.log(response)
      
      if (response.status === 200) {
          // Handle success - maybe clear the form or show a success message
          alert("Status Updated successfully!")
          console.log("Status Updated successfully!", response.data);
      } else {
          // Handle any non-200 HTTP status codes as you see fit
          console.error("Error submitting ticket:", response.data);
      }
  } catch (error) {
      // Handle errors, e.g., network error or invalid JSON response
      console.error("API call failed:", error);
  }
    // Logic to submit the reply and the updated status
    console.log(`Would normally send email here with body: ${tickets[index].reply}`);
    // Update your backend with the new status and the reply, if necessary
  };

  return (
    <div className="container mt-4">
      <h2>Admin Panel</h2>
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Reply</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.name}</td>
              <td>{ticket.email}</td>
              <td>{ticket.desc}</td>
              <td>
                <select value={ticket.status} onChange={(e) => updateTicketStatus(index, e.target.value)}>
                  <option value="new">New</option>
                  <option value="in progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </td>
              <td>
                <textarea onChange={(e) => handleReplyChange(index, e.target.value)} />
              </td>
              <td>
                <button onClick={() => handleSubmit(index,ticket)}>Submit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
