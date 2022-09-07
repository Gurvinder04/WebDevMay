
import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Form,Button } from 'react-bootstrap'

function QuizLayout() {
    const [quiz, setQuiz] = useState([])
    const [score, setScore] = useState(0)
    const [finalscore, setFinalScore] = useState(0)
    const [currentquestion, setCurrrentQuestion] = useState(0)
    const [allanswers, setAllAnswers] = useState([])

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=29&difficulty=easy&type=multiple')
            .then(response => response.json())
            .then(data => {
                setQuiz(data.results)
                let correct_answer = data.results[currentquestion].correct_answer
                let incorrect_answer = data.results[currentquestion].incorrect_answers
                setAllAnswers([correct_answer, ...incorrect_answer])
                { console.log(allanswers) }


            })

        // question()
    }, [currentquestion])

    const formRef = useRef();
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function NextQuestion(e) {
        console.log(formRef.current.elements['user_answer'].value)
        if(formRef.current.elements['user_answer'].value !==""){
            if (quiz[currentquestion].correct_answer === formRef.current.elements['user_answer'].value) {
                setFinalScore(finalscore + 1)
            }
            setCurrrentQuestion(currentquestion + 1)
        }else{
            alert('You need to pick an option')
        }
       
    }
    return (
        // <Container className='bg-dark text-center text-light p-5'>
        //     <Row>
        //         <Col md={12}>
        //             <h1>Question:</h1>
        //             {
        //                 quiz[currentquestion] !== undefined ?
        //                     <p>{quiz[currentquestion].question}</p>
        //                     :
        //                     'over'
        //                     <div>
        //                     allanswers.map(answer => {
        //                         <li>{answer}</li>
        //                     })
        //                     </div>
        //                     <ul>
        //                     {
        //                         allanswers.map(answer => {
        //                             <li>{answer}</li>
        //                         })
        //                     }
        //                    </ul> 
        //                 }
        //     </Col>
        // </Row>
        // </Container >


        <Container className='bgcontainer text-center text-light p-5'>
        <Col md={8}>
        {
            quiz[currentquestion] !== undefined && quiz.length > 0 ?
                (
                    <div>
                        <h1 className="lead">{quiz[currentquestion].question}</h1>
                        <Form ref={formRef} className='text-center'>
                            <ul>
                            {
                                shuffle(allanswers).map(option => (
                                   <li>
                                     <Form.Check
                                        reverse
                                        label={option}
                                        name="user_answer"
                                        type={'radio'}
                                        value={option}
                                        id={`reverse-2`}
                                    />
                                   </li>
                                ))
                            }
                            </ul>

                        </Form>
                        <Button onClick={NextQuestion}>Next Question</Button>
                    </div>
                ) :
                'Loading...'
        }
        </Col>
        <Col md={4}>
            <h5>Your score is {finalscore}</h5>
        </Col>
    </Container>
    )
}

export default QuizLayout