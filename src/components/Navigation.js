import React from 'react';
import {withRouter, Link} from 'react-router'
import sectionsList from '../sectionsList';


const styles = {
  link:{
    padding:"10px",
    textDecoration:"none",
    display:"block",
    color:"#666"
  },
  linkActive:{
    color:"#000",
    fontWeight:"bold"
  }
}

const Navigation = (props) => (
  <div style={{textAlign:"left"}} >
    {sectionsList.map((m, idx) => (
      <div key={idx} >
        <Link to={m.link} style={styles.link}  activeStyle={styles.linkActive}  >{m.label}</Link>
      </div>
    ))}
  </div>
)

export default withRouter(Navigation)
