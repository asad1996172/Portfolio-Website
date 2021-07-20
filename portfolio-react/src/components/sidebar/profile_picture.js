import React from 'react'
import data from '../../data/about.json';
import Image from 'react-bootstrap/Image'

const ProfilePicture = () => {
    return (
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">{data["first_name"]} {data["last_name"]}</span>
            <span className="d-none d-lg-block">
                <Image className="img-fluid img-profile rounded-circle mx-auto mb-2" src={data["profile_picture"]}></Image>
            </span>
        </a>
    )
}

export default ProfilePicture
