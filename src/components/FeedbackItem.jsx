/* import { useState } from "react" */
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"


function FeedbackItem({item}){
    /* const [rating,setRating] = useState(7)
    const [text,setText] = useState('This is an example of a feedback item')
 */
   /*  const handleClick = () => {
        /* have to use set functions we made 
        setRating((prev) => {
            return prev + 1
        })
        setText(text + '!')
    } */
    const {deleteFeedBack,editFeedBack} = useContext(FeedbackContext)

    return (
        <Card> 
            <div className="num-display">{item.rating}</div>
            <button  onClick ={() => deleteFeedBack(item.id)}className="close">
                <FaTimes color='purple'/>
            </button>
            <button className="edit" onClick={()=>editFeedBack(item)}>
                <FaEdit color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
            {/* <button onClick = {handleClick}>Click Me</button> */}
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}



export default FeedbackItem