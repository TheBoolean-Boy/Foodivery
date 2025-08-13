import { useContext } from 'react'
import './FoodDisplay.jsx'
import {StoreContext} from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem.jsx'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext)
  return(
    <div className='food-display' id='food-display'>
    <h2>Top dishes near you</h2>
    <div className="food-display-list">
      {food_list.map( (item, index) => {
        return(
          <FoodItem />
        )
      })}
    </div>
    </div>
  )
}

export default FoodDisplay