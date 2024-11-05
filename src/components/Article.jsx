import './article.css'
import './typografy.css'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
const Article = () => {
  return (
    <article className='article'>
        <div className='d-flex gap-2'>

          <img className='img-article' src="/pizza-margarita.jpg" alt="Pizza" />

        </div>
        <div className='d-flex flex-column justify-content-center align-items-center text-left gap-2'>

          <h2 className=' h2-article mt-4 alegreya'>Pizza Margherita</h2>
          <span className='w-100 ps-3'>Demora: 30 min</span>
          <div className='d-flex gap-5'>
           <span className='bebas-neue-regular text-white fs-1 ps-2'>$15000</span>
          <button className='btn btn-info border-bottom  mb-4 me-2'><AddShoppingCartRoundedIcon /></button> 
          </div>
          

        </div>
    </article>
  )
}

export default Article
