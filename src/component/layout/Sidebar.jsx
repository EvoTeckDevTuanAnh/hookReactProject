import React, { useState } from 'react';
import {
    Link
  } from "react-router-dom";
function Sidebar(props) {
    return <>
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark w-100 " style={{ height:'100vh' }}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span class="fs-4">Sidebar</span>
            </a>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <Link to="/" class="nav-link active" >
                        Home
                    </Link>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        Customers
                    </a>
                </li>
            </ul>
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    </>;
}
export default Sidebar;