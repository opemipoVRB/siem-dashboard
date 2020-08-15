import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class BreadcrumbHistory extends Component {


  
  render() {
    return (
      <>
        { this.props.url !== '/app/chat' ?
          <div>
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem>SIEM</BreadcrumbItem>
              <BreadcrumbItem>Dashboard</BreadcrumbItem>
            </Breadcrumb>
          </div>
        :null}
      </>
    )
  };
};

export default BreadcrumbHistory;