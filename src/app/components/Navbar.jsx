import  React from 'react'

import Nav from  './Nav'
import { render } from 'react-dom'
export default class Navbar extends React.Component {
    render() {
        let flexStyle = {
            flexContainer: {
                // 容器需要添加direction才能变成让子元素flex
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            },

        };

        const msg = [
            {
                'icon': 'icon-home',
                'name': '首页',
            },
            {
                'icon': 'icon-bulb',
                'name': 'APP下载',
            },
            {
                'icon': 'icon-person',
                'name': '合作加盟',
            },
        ];


        const $nodes = msg.map((v)=>{
            return (<Nav className="footer-nav" icon={v.icon} style={[flexStyle.flexContainer]}> {v.name} </Nav>);
        });
        return (
            <div>
                { $nodes}
            </div>

        )


    }
}

