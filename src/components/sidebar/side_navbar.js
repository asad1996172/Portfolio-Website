import React from 'react'
import Nav from 'react-bootstrap/Nav';
import ProfilePicture from './profile_picture';
import SidebarContent from './sidebar_content';

const SideNavbar = () => {
    return (
        <Nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <ProfilePicture />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <SidebarContent />
        </Nav>
    )
}

export default SideNavbar
