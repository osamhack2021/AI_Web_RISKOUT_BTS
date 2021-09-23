import React from 'react';
import Helmet from 'react-helmet';
// import '../css//normalize.css';
import '../css/style_tab.css';
import '../css/style_mob.css';
import '../css/slick.css';
import '../css/jquery.fullpage.css';
import '../css/style.css';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content="my-layout" />
        </Helmet>
        {children}
      </div>
    );
  }
}
