"use client";
import React from 'react';
import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export   function Achievement() {
  return (
    <MDBListGroup className='px-4 shadow border mt-2 pt-4' light numbered style={{ minWidth: '22rem' }}>
      <h3>Achievement 🏆</h3>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start px-3'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Dean Lister</div>
          2023
        </div>
        <MDBBadge pill light>
          01
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start px-3'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Computer Virtuoso of the year</div>
            2019
         </div>
        <MDBBadge pill light>
          02 
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start px-3'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Loyaltee awardee</div>
          2018
        </div>
        <MDBBadge pill light>
          03
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
  );
}