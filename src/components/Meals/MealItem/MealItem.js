import classes from './MealItem.module.css'


const MealItem = props => {
  const price = `${props.price}원`

  return(
    <li className={classes.meal}>
      {/* 음식 정보 */}
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>  
        <div className={classes.price}>{price}</div>  
      </div>

      {/* 수량 */}
      <div>

      </div>
    </li>
  )
}

export default MealItem