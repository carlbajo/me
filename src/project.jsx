"use client";
import React from 'react';
import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export   function Project() {
  return (
    <MDBListGroup className='px-4 shadow border mt-2 pt-4' light numbered style={{ minWidth: '22rem' }}>
      <h3>Project 📁</h3>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start px-3'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Portfolio of Excellence</div>
          A capstone project for showcasing students skills and achievements in Universidad de Dagupan campus
        </div>
        <MDBBadge pill light>
          01
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start px-3'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Todo Task</div>
          A simple project that inserts task directly to the database
        </div>
        <MDBBadge pill light>
          02 
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start px-3'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Basic Hotel Spa management system</div>
          An old project of mine that used php and mysql
        </div>
        <MDBBadge pill light>
          03
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
  );
}