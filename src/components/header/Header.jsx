import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <header className='header'>
        <div className="container">
            <div className="nav_container">
                <div className="logo">
                    
                    <h2>Crud App</h2>
                </div>
                <div className="navigation">
                    <ul className='menu'>
    
                            
                               
                                <li className='nav-item'><Link to={'/'}>Home</Link></li>
                                <li className='nav-item'><Link to={'/add'}>Add Contact</Link></li>
                                
                            
                        
                          
                          
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header