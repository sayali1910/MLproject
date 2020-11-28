
import React from 'react';
import TopBar from "./header"
import Footer from "./footer"
import CssBaseline from '@material-ui/core/CssBaseline';


function Layout(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar {...props} />
            <div>
                {props.children}
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default Layout