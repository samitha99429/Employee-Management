import React from 'react'
import AdminDashboard from '../components/adminDashboard';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Addemployee from '../components/addEmployee';
import UpdateEmployee from '../components/updateEmployee';

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <section>
          <Routes>

            <Route path="/" element={<AdminDashboard />} />
            <Route path="/add" element={<Addemployee />} />
            <Route path="/update/:id" element={<UpdateEmployee />} />


          </Routes>
        </section>
      </div>
    </Router>
  )
}
export default AppRoutes;
