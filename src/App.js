import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";
function App(){

    /* <> this is a fragment */
    return (
        <FeedbackProvider>
            <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                            <AboutIconLink />
                        </>
                    } />
                    <Route path='/about' element={<AboutPage />} />
                    
                </Routes>
                
            </div>
            
        </Router>

        </FeedbackProvider>
        
    );
}

export default App;


/* import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackdata from "./data/feedbackdata";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";//uuidv4 is a function that generates a random id
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router,Route} from 'react-router-dom';
/* state must be single source of trouth 

function App(){
    const [feedback, setFeedback] = useState(feedbackdata)
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])//spread operator and newFeedback is the new object in the array
    }


    const deleteFeedBack = (id) => {
        if(window.confirm("Are you sure you want to delete this feedback?")){
            setFeedback(feedback.filter((feedback) => feedback.id !== id))}
    }
    return (
        <Router>
            <Header/>
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedBack}/>

                <Route path='/about'component={AboutPage}/>
            </div>
        </Router>
        
    )
}

export default App; */

 /*    const title = "Blog Post"
    const body = "This is a blog post"
    const comments = [
        {id:1, text: "Love this!"},
        {id:2, text: "Nice post!"},
        {id:3, text: "Interesting. . ."}
    ]

    const loading = false;
    const showcomments = true;

    const commentblock = (
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
        </div>
    )
    if(loading){
        return <h1>Loading...</h1>
    }

    return (
    <div className ="container">
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>
        {/* Ternary operator below {showcomments ? "yes":"no"}, now we put everything in a variable, could also be inside of yes/no }
        {showcomments && commentblock}
        
    </div>
    ) */