import React from 'react';
import Layout from './Components/Layoutcomponent/Layout'; 
import TicketBooking from './Components/Core/TicketBooking';

const App = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Conference Ticket Generator</h1>
        <TicketBooking />
        </div>
      </div>
    </Layout>
  );
};

export default App;