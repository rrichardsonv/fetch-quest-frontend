import React, { Component } from 'react';

const asPage = (WrappedComponent) => {
  return class Page extends Component {
    render(){
      return(
        <div className="page page--search"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/fq_bookcover.png)`
          }}
        >
          <div className="page-left">
            <div className="menu-bg"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/parch2.png)`,
                height: '98vh',
                margin: '-8px 8px 0px',
                position: 'absolute',
                width: '96%',
              }}
            >
              <WrappedComponent {...this.props} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default asPage;
