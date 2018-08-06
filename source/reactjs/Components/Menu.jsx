import React from 'react'
import MenuList from './MenuList'
export default function Menu(){
    const _menuTitle=[{name:'home', key:1},{name:'works', key:2},{name:'jobs', key:3}];
    return(
        <div className='admin'>
            <div className='admin__left-block'>
                <hr className='admin_line'/>                
                    <MenuList params={_menuTitle} />
            </div>
            <div className='admin__right-block'></div>
        </div>
    )

}