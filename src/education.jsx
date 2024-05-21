"use client";
import React from 'react';
import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export   function Education() {
  return (
    <MDBListGroup className='px-4 shadow border mt-2 pt-4' light numbered style={{ minWidth: '22rem' }}>
      <h3>Education 🎓</h3>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start px-3'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Palaming Elementary School</div>
          2007
        </div>
        <MDBBadge pill light>
          01
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start px-3'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Saint Charles Academy</div>2014
        </div>
        <MDBBadge pill light>
          02 
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start px-3'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>San Carlos Preparatory School</div>2018
        </div>
        <MDBBadge pill light>
          03
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start px-3'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Universidad de Dagupan</div>2020
        </div>
        <MDBBadge pill light>
          04
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
  );
}