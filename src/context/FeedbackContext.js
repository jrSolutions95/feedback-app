import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {id:1, text: 'This is feedback item 1', rating: 10},
        {id:2, text: 'This is feedback item 2', rating: 8},
        {id:3, text: 'This is feedback item 3', rating: 9},
        
    ]);

    const [feedbackEdit,setFeedbackEdit] = useState({//holds the item to be updated and the edit state
        item: {},
        edit: false
    });
    //Delete feedback item
    const deleteFeedBack = (id) => {
        if(window.confirm("Are you sure you want to delete this feedback?")){
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    //Add new feedback item
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback]);
    };

    //Update feedback item

    const updateFeedback = (id,updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item,...updItem} : item)))

    }
    //Set item to be utpadted and set edit to true
    const editFeedBack = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        });
    }
    return <FeedbackContext.Provider value ={{feedback,deleteFeedBack,addFeedback,editFeedBack,feedbackEdit,updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;