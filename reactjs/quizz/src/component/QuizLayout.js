import { Button } from 'bootstrap'
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function QuizLayout() {
    const [quiz, setQuiz] = useState([])
    const [score, setScore] = useState(0)
    const [finalscore, setFinalScore] = useState(0)
    const [currentquestion, setCurrrentQuestion] = useState(0)

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=29&difficulty=easy&type=multiple')
            .then(response => response.json())
            .then(data => {
                setQuiz(data.results)
            })
        // question()
    },[])

    const question = () => {
        setCurrrentQuestion(quiz[0])
    }
    return (
        <Container className='bg-dark text-center text-light p-5'>
            <Row>
                <Col md={12}>
                    <h1>Question:</h1>
                    {
                        quiz[0]!== undefined ?
                            <p>{quiz[currentquestion].question}</p>
                            :
                            'over'
                    }
                   
                     <ul>
                        {
                         quiz[currentquestion].incorrect_answers.map(answer=>(
                        //    console.log(answer)   
                             <li>{answer}</li>
                         ))   
                        }
                    </ul> 
                   
                    {/* // console.log(quiz[currentquestion].incorrect_answers) */}
                    
                   
                </Col>
            </Row>


        </Container>
    )
}

export default QuizLayout