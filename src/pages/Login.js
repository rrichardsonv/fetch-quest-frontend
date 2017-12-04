import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

class Login extends Component {
  render(){
    return(
      <div className="page page--login p-2"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/fq_bookcover.png)`
        }}
      >
        <div className="c-menu pb-2 test">
          <div
            className="menu-bg"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/parch3.png)`
            }}
          >
            <div>
              <div>
                <img
                  className="badge"
                  src={`${process.env.PUBLIC_URL}/fq_icon512.png`}
                  alt="fetch quest logo"
                />
              </div>
            </div>
            <div className="pb-2">
              <Link to='/search'>
                <Button
                 primary
                >
                  Login as Guest
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
