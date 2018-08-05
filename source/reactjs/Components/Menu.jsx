import React from 'react'

export default function Menu(){
    return(
        <div className='admin'>
            <div className='admin__left-block'>
                <hr className='admin_line'/>
                <ul className='menu'>
                    <li className='menu_panel menu__home'>
                        <div className='menu__home-icon'></div>
                        <div className='text'>Главная</div>
                    </li>
                    <li className='menu_panel menu__works'>
                        <div className='menu__works-icon'></div>
                        <div className='text'>Работы</div>
                    </li>
                    <li className='menu_panel menu__jobs'>
                        <div className='menu__jobs-icon'></div>
                        <div className='text'>Вакансии</div>
                    </li>
                </ul>
            </div>
            <div className='admin__right-block'></div>
        </div>
    )

}