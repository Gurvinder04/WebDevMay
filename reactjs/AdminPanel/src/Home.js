import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { UserContext } from './App'
import { User } from './Login'
import Header from './Component/Header'
import {FaMale,FaBell,FaClipboardCheck,FaUserFriends,FaPeopleCarry} from 'react-icons/fa'

function Home() {

  return (

    <>
      <Header />
      <div className='body-divide container-fluid'>
        <div className='d-flex p-5 card1'>
        <Card style={{ width: '18rem','text-align': 'center' ,boxShadow:'0px 4px 4px 4px #495057bd'}}>
          <Card.Body>
            <Card.Title>CUSTOMER</Card.Title>
            <Card.Text>
              <FaUserFriends style={{'font-size': '70px',color: 'lightseagreen'}}></FaUserFriends>
            </Card.Text>
            <Card.Link href="#">See All Customer</Card.Link> 
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem','text-align': 'center',boxShadow:'0px 4px 4px 4px #495057bd' }}>
          <Card.Body>
            <Card.Title>SELLER</Card.Title>
            <Card.Text>
              <FaPeopleCarry style={{'font-size': '70px',color: 'lightseagreen'}}></FaPeopleCarry>
            </Card.Text>
            <Card.Link href="#">See All Seller</Card.Link> 
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem','text-align': 'center',boxShadow:'0px 4px 4px 4px #495057bd' }}>
          <Card.Body>
            <Card.Title>ORDERS</Card.Title>
            <Card.Text>
              <FaClipboardCheck style={{'font-size': '70px',color: 'lightseagreen'}}></FaClipboardCheck>
            </Card.Text>
            <Card.Link href="#">See All Orders</Card.Link> 
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem','text-align': 'center',boxShadow:'0px 4px 4px 4px #495057bd' }}>
          <Card.Body>
            <Card.Title>NOTIFICATION</Card.Title>
            <Card.Text>
              <FaBell style={{'font-size': '70px',color: 'lightseagreen'}}></FaBell>
            </Card.Text>
            <Card.Link href="#">See All Notifications</Card.Link> 
          </Card.Body>
        </Card>
        </div>





      </div>
      {/* <div class="container1">
              <div class="header">
               <div class="header-logo">
                 <svg class="site-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                   <path d="M512 256a15 15 0 00-7.1-12.8l-52-32 52-32.5a15 15 0 000-25.4L264 2.3c-4.8-3-11-3-15.9 0L7 153.3a15 15 0 000 25.4L58.9 211 7.1 243.3a15 15 0 000 25.4L58.8 301 7.1 333.3a15 15 0 000 25.4l241 151a15 15 0 0015.9 0l241-151a15 15 0 00-.1-25.5l-52-32 52-32.5A15 15 0 00512 256zM43.3 166L256 32.7 468.7 166 256 298.3 43.3 166zM468.6 346L256 479.3 43.3 346l43.9-27.4L248 418.7a15 15 0 0015.8 0L424.4 319l44.2 27.2zM256 388.3L43.3 256l43.9-27.4L248 328.7a15 15 0 0015.8 0L424.4 229l44.1 27.2L256 388.3z" />
                 </svg>
                <span class="site-title">Shopify</span>
                
                 </div>
                 <div class="header-search">
                   <button class="button-menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 385">
                        <path d="M12 120.3h361a12 12 0 000-24H12a12 12 0 000 24zM373 180.5H12a12 12 0 000 24h361a12 12 0 000-24zM373 264.7H132.2a12 12 0 000 24H373a12 12 0 000-24z" /> 
                     </svg></button>
                   <input type="search" placeholder="Search Documentation..." /> 
                 </div>
                 <Button className='AdminLogout'>LogOut</Button>
               </div>
               <div class="main">
                 <div class="sidebar">
                   <ul>
                    <li><a href="/" class="active"><i class="lni lni-home"></i><span>Dashboard</span></a></li>
                     <li><a href="/addproduct"><i class="lni lni-text-format"></i><span>Add Product</span></a></li>
                    <li><a href="#"><i class="lni lni-bar-chart"></i><span>Customer</span></a></li>
                     <li><a href="#"><i class="lni lni-grid"></i><span>Events</span></a></li>
                     <li><a href="#"><i class="lni lni-bullhorn"></i><span>Notifications</span></a></li>
                     <li><a href="#"><i class="lni lni-support"></i><span>Help & Support</span></a></li>
                   </ul>
                 </div>
                <div class="page-content">
                   <h1>Welcome back, Gurvinder!</h1>
                 </div>
               </div>
             </div> */}
    </>
  )
}

export default Home