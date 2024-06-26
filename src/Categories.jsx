export const Categories = ({categories, filterItems}) => {
    return (
        <div className='btn-container'>
            {categories.map(category =>
                <button type='button' className='btn' key={category} onClick={() => filterItems(category)}>
                    {category}
                </button>
            )}
        </div>
    )
}