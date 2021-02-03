import React from 'react';

class About extends React.Component{
    render(){
        return(
            <div>
                <div className="acontainer">
                    <div className="apagetitle">
                        <div className="about">
                            <ul>
                                <li><h1>About</h1></li>
                                <li><h1 className="us">Us</h1></li>
                                <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                            </ul>
                        </div>
                        
                    </div>
                </div>

                <div className="sportcontainer">
                    <div className="item">
                        <ul>
                            <h2>Best sport item shop our</h2>
                            <p>There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration in some form, by injected<br/> randomised words which don't look even slightly believable</p>
                        </ul>
                    </div>

                    <div className="playimg">
                        <img src="assests/img/child-image.png" alt="child"/>
                    </div>

                    <div className="button">
                            <a href="" class="btn">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;