import React from 'react'

import { CDBSidebar, CDBSidebarHeader, CDBSidebarMenuItem,CDBContainer, CDBSidebarContent, CDBSidebarMenu,  CDBSidebarFooter } from "cdbreact";


const SideBar = () => {

    return (
          <CDBContainer>
            <CDBSidebar
              textColor="#fff"
              backgroundColor="#000"
            >
              <CDBSidebarHeader
                prefix={
                  <i className="fa fa-bars" />
                }
              >
                Contrast Free
              </CDBSidebarHeader>

              <CDBSidebarContent>
                <CDBSidebarMenu>
                  <CDBSidebarMenuItem
                    icon="th-large"
                  >
                    Dashboard
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    icon="sticky-note"
                  >
                    Components
                  </CDBSidebarMenuItem>
                </CDBSidebarMenu>
                <CDBSidebarMenu>
                  <CDBSidebarMenuItem icon="th">Menu Item</CDBSidebarMenuItem>
                </CDBSidebarMenu>
              </CDBSidebarContent>

              <CDBSidebarFooter style={{ textAlign: "center" }}>
                <div
                  className="sidebar-btn-wrapper"
                  style={{
                    padding: "20px 5px"
                  }}
                >
                  Sidebar Footer
                </div>
              </CDBSidebarFooter>
            </CDBSidebar>
          </CDBContainer>
    );
};

export default  SideBar;




