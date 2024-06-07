import {MenuItem} from "./MenuItem.jsx";

export const Menu = ({menuItems}) => {
    return (
        <div className='section-center'>
            {menuItems.map((menuItem) => {
                return <MenuItem key={menuItem.id} {...menuItem}/>
            })}
        </div>
    )
}