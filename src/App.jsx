import {Title} from "./Title.jsx";
import {useState} from "react";
import menu from './data.js';
import {Menu} from "./Menu.jsx";
import {Categories} from "./Categories.jsx";

const allCategories = ['all', ...new Set(menu.map(item => item.category))];

const App = () => {
    const [menuItems, setMenuItems] = useState(menu);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(menu);
            return;
        }
        setMenuItems(menu.filter(item => item.category === category));
    };

    return (
        <main>
            <section className='menu'>
                <Title text='our menu'/>
                <Categories categories={categories} filterItems={filterItems}/>
                <Menu menuItems={menuItems}/>
            </section>
        </main>
    );
};

export default App;
