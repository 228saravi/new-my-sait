import React from 'react'

export default function MenuList({params}){
    const MenuElements=params.map((element)=> <li className={'menu_panel menu__'+element.name} key={element.key}>
                                                <div className={'menu__'+element.name+'-icon'}></div>
                                                <div className='text'>{element.name}</div>
                                            </li>);
    return(
        <ul className='menu'>
            {MenuElements}
        </ul>
    )
}