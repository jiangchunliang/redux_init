 import React from 'react';

 import { render } from 'react-dom'

 export default class Nav extends React.Component {

     render() {
         return (

                 <a className={this.props.status}   >
                     <i className={this.props.icon + ' iconfont'}> </i>
                     {this.props.children}
                 </a>

         )
     }
 }
