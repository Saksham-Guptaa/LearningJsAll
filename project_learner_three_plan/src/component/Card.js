import React , {useState} from 'react'

const Card = ({id , image , info , price , name , removeTours}) => {
    const [readMore , setReadMore] = useState(false)
    const description = readMore ? info :  `${info.substring(0,200)}....`
    // read more vale variable ko true or false mein switch krra he 
    // function readmoreHandler() {
    //     readMore(!readMore);
    // }
    
  return (
    <div className='card'>
        <img src={image} alt='' className='image'  />
        <div>
            <div className='tour-details'>
                <h4 className='tour-price'>{price}</h4>
                <h4 className='tour-name'>{name}</h4>
            </div>
            <div>
                <p className='description'>{description} <span className='read-more' onClick={() => setReadMore(!readMore)}>{readMore ? `show less` : `read more`}</span></p>
            </div>
        </div>
        <button onClick={() => removeTours(id)}>
            Not Interested
        </button>
    </div>
  )
}

export default Card