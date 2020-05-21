import React from "react";
import Image from 'react-bootstrap/Image'
// Home page component
function Home() {
  return (
    <div className="container" >
      <div className="jumbotron">
        <h1 className="cover-heading">Welcome to <span>stock market statista <img src={require('../images/graph.svg')} alt="home pahe svg icon" style={{ position: 'relative', width: 40, height: 40 }}></img></span></h1>
        <p className="lead">Stock Market Satatista (SMS) is a free online application designed to help users who are interested in stock market statistics to easily
        search and analyse stock market data. The application will be under continous developent to provide users with the best possible experience.
      </p>
      </div>
      <Image src={require('../images/hom-page-image.jpg')} fluid alt="home page image" />
    </div>
  );
}

export default Home;
