import React from 'react';
import {Link} from 'react-router-dom';


class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="main">
                        <div className="logo">
                            <img src="assests/img/logo.png" alt="logo"/>
                        </div>
                        <ul>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="testmonial">TESTMONIAL</Link>
                            </li>
                            <li>
                                <Link to="shop">SHOP</Link>
                            </li>
                            <li>
                                <Link to="contact">CONTACT US</Link>
                            </li>
                            <li><a href=""><img src="assests/img/search_icon.png" alt="serach icon"/></a></li>
                        </ul>
                    </div>

                <section>
                        <div className="title">
                            <h1>Welcome to</h1>
                        </div>
                        <div className="stitle">
                            <h1>Our Shop</h1>
                        </div>

                        <div className="describe">
                            <p>There are many variations of passages of Lorem Ipsum available,<br/>
                            but the majority have suffered alteration in some form, by<br/> 
                            injected humour</p>
                        </div>

                        <div className="button">
                            <a href="" class="btn">Buy Now</a>
                            <Link to="about" class="btn">About</Link>
                        </div>

                        <img src="assests/img/boksing-gloves.png" alt="gloves" class="center"/>
                        
                </section>
            </div>
        )
    }
}

export default Home;