import React,{Component} from 'react'
import Menu from './Menu'

export default class MenuList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            openMenuId: null
        } 
        
    }
    
    
    
    render() {
        const _menuTitle=[{name:'home', key:1},{name:'works', key:2},{name:'jobs', key:3}];
        const MenuElements=_menuTitle.map((element)=> <Menu menu={element} toggleOpen = {this.toggleOpenMenu(element.key)}/>);
        return (
            <div className='admin'>
                <div className='admin__left-block'>
                    <hr className='admin_line'/>          
                        <ul className='menu'>      
                            {MenuElements}
                        </ul>
                </div>
                <div className='admin__right-block'>
                    {this.getBody()}
                </div>
            </div>
        );
    }
    toggleOpenMenu=openMenuId=>ev=>{
        console.log(openMenuId);
        this.setState({openMenuId})
    }
}






















// export default class Menu extends Component(){
//     state = {
//         openArticleId: null
//     }
    
//     _menuTitle=[{name:'home', key:1},{name:'works', key:2},{name:'jobs', key:3}];
//     render(){
//         <div className='admin'>
//             <div className='admin__left-block'>
//                 <hr className='admin_line'/>                
//                     <MenuList params={_menuTitle} />
//             </div>
//             <div className='admin__right-block'>
//                 {this.getBody()}
//             </div>
//         </div>
//     }
//     getBody(){

//     }

// }