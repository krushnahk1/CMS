import React, { useState } from 'react'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import "../DoctorCSS/Receptionist_view.css"
import SideNavContent from '../DoctorComponents/SideNavContent';
import DashboardOverview from '../DoctorComponents/DashboardOverview';
import AddPatient from '../DoctorComponents/AddPatient';
import CreateAppointment from '../DoctorComponents/CreateAppointment';
import AddEnquiry from '../DoctorComponents/AddEnquiries';
import AllPatients from '../DoctorComponents/AllPatients';
import Room from '../RoomComponents/Rooms'

function ReceptionistView() {

    const [sideNavStatus, setSideNavStatus] = useState(false);
 
    let list1 = [
        {
          number: '1',
          name: 'Dashboard',
          icon: 'fas fa-home', 
          url: '/DoctorDashboard/dashboard-overview',
        },
        {
          number: '2',
          name: 'All patient',
          icon: 'fas fa-user', 
          url: '/DoctorDashboard/AllPatient',
        },
        {
          number: '3',
          name: 'Create Appointment',
          icon: 'fas fa-calendar-check', 
          url: '/DoctorDashboard/create-appointment',
        },
        {
          number: '4',
          name: 'view Appointment',
          icon: 'fas fa-calendar-check', 
          url: '/DoctorDashboard/view-appointment',
        },
        {
          number: '5',
          name: 'Add Enquiries',
          icon: 'fas fa-question-circle', 
          url: '/DoctorDashboard/AddEnquiry',
        },
        {
          number: '6',
          name: 'Add patient',
          icon: 'fas fa-user-plus', 
          url: '/DoctorDashboard/add-patient',
        },
        {
          number: '7',
          name: 'room',
          icon: 'fa-solid fa-hospital',
          url: '/DoctorDashboard/room',
        },
      ];
    

      const changeSideNavStatus=()=>{
        setSideNavStatus(!sideNavStatus);
        console.log(sideNavStatus);
      }



    return (
        <>
            <Navbar changeSideNavStatus={changeSideNavStatus}></Navbar>
            <div className='main-view'>
                <div className='main-container'>
                    <div className='side-navbar'>
                        <SideNavContent list={list1} sideNavStatus={sideNavStatus}></SideNavContent>
                    </div>
                    <div className='main-content'>
                    <div className='main-content-routes'>
                        <Routes>
                            <Route path="/" element={< DashboardOverview />} />
                            <Route path="/DashboardOverview" element={< DashboardOverview />} />
                            <Route path="/AllPatient" element={< AllPatients />} />
                            <Route path="/add-patient" element={<AddPatient />} />
                            <Route path="/create-appointment" element={<CreateAppointment />} />
                            <Route path="/AddEnquiry" element={<AddEnquiry />} />
                            <Route path="/Room" element={<Room />} />
                        </Routes>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReceptionistView;