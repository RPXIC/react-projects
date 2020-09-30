import React from 'react'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`

const TotalContainer = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`

const Total = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const Result = ({ quotation }) => {

    return (
        (quotation === 0)
            ? <Message>Select brand, year and coverage</Message>
            : (
                <TotalContainer>
                    <TransitionGroup
                        component="span"
                        className="result"
                    >
                        <CSSTransition
                            classNames="result"
                            key={quotation}
                            timeout={{ enter: 500, exit: 500 }}
                        >
                            <Total>Total: $ <span>{quotation}</span></Total>
                        </CSSTransition>
                    </TransitionGroup>
                </TotalContainer>
            )
    )
}

Result.propTypes = {
    quotation: PropTypes.number.isRequired
}

export default Result