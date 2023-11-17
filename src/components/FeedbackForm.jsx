import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext,useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    //these are the states
    const [text,setText] = useState('')//text is the state variable and setText is the function to update the state variable

    const [btnDisabled,setBtnDisabled] = useState(true)//btnDisabled is the state variable and setBtnDisabled is the function to update the state variable
    const [message,setMessage] = useState('')//message is the state variable and setMessage is the function to update the state variable
    const [rating,setRating] = useState(10)//rating is the state variable and setRating is the function to update the state variable

    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    },[feedbackEdit])
    const handleTextChange = (e) => {
        if(text ===''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !=='' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters long')
            setBtnDisabled(true)
        } else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length> 10){
            const newFeedback ={text,rating}

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            } else{
                addFeedback(newFeedback)
            }
            setText('')


            
        }
        
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating)=> setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
