import React from 'react'


const Menu = ({Items}) => {
  return (
   <main className='product-space'>
     <div className='container'>
        <div className='row'>
        {
            Items.map((Item) => {
                const {id, img, price, desc, title}=Item
                return (
                    <div className="col-6">
                    <article key={id} className='main-div'>
                     <div className='main-div'>
                     <div className='main-img'>
                            <img src={img} alt="" />
                        </div>
                           <div className="content">
                           <div className="title">
                           <h4>{title}</h4>
                           <h6>N{price}</h6>
                           </div>
                            <p>{desc}</p>
                           </div>
                           
                     </div>
                      </article>
                      </div>
                )
            })
        }
        </div>
    </div>
   </main>
  )
}

export default Menu