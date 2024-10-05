import React from 'react'

const Categories = ({filterItems, category}) => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col=md-8 mx-auto'>
             <div className="category-tabs">
             {
                    category.map((category,index) => {
                        return (
                            <button onClick={()=> filterItems(category)} className='filterItems'> {category} </button>
                        )
                    })
                }
             </div>
            </div>

        </div>
        </div>
      

  )
}

export default Categories
