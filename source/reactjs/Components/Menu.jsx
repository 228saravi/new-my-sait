import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class Menu extends Component{
    static propTypes = {
        menu: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    }
    render() {
        const {menu,toggleOpen}=this.props
        return (
                <li className={'menu_panel menu__'+menu.name} key={menu.key} onClick={toggleOpen}>
                    <div className={'menu__'+menu.name+'-icon'}></div>
                    <div className='text'>{menu.name}</div>
                </li>
        );
    }
}




// export default function MenuList({params}){
//     const MenuElements=params.map((element)=> <li className={'menu_panel menu__'+element.name} key={element.key}>
//                                                 <div className={'menu__'+element.name+'-icon'}></div>
//                                                 <div className='text'>{element.name}</div>
//                                             </li>);
//     return(
//         <ul className='menu'>
//             {MenuElements}
//         </ul>
//     )
// }