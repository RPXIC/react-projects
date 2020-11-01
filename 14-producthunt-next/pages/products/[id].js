import React, { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { FirebaseContext } from '../../Firebase/index'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Error404, Button } from 'components'
import { Container, InputSubmit } from 'components/ui/Form'
import { H1, ProductContainer, CommentsTitle, Votes, Comment, Bold, Owner } from 'styles/productsStyles'

const Product = () => {
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)
    const [comment, setComment] = useState({})
    const [retrieveDB, setRetrieveDB] = useState(true)

    const router = useRouter()
    const { query: { id } } = router

    const { firebase, user } = useContext(FirebaseContext)

    useEffect(() => {
        if (id && retrieveDB) {
            const unsubsribe = async() => {
                const productQuery = await firebase.db.collection('products').doc(id)
                const product = await productQuery.get();
                if (product.exists) {
                    setProduct(product.data())
                    setRetrieveDB(false)
                } else {
                    setError(true)
                    setRetrieveDB(false)
                }

            }
            return unsubsribe()
        }
    },[id, retrieveDB])

    if(Object.keys(product).length === 0 && !error) return 'Loading...'

    const { comments, created, description, company, name, url, urlImage, votes, owner, voters } = product

    const voteProduct = () => {
        if (!user) return router.push('/')

        if (voters.includes(user.uid)) return
        
        const result = votes + 1

        const addNewVoters = [...voters, user.uid]

        firebase.db.collection('products').doc(id).update({ votes: result, voters: addNewVoters })

        setProduct({
            ...product,
            votes: result
        })
        setRetrieveDB(true)
    }

    const commentChange = e => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    }

    const isOwner = id => {
        if (owner.id === id) return true
    }

    const addComment = e => {
        e.preventDefault()

        if (!user) return router.push('/')

        comment.userId = user.uid
        comment.userName = user.displayName

        const newComments = [...comments, comment]

        firebase.db.collection('products').doc(id).update({ comments: newComments })

        setProduct({
            ...product,
            comments: newComments
        })
        setRetrieveDB(true)
    }

    const canDelete = () => {
        if (!user) return false
        if (owner.id === user.uid) return true
    }

    const deleteProduct = async() => {
        if (!user || owner.id !== user.uid) return router.push('/')

        try {
            await firebase.db.collection('products').doc(id).delete()
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {error ? <Error404 /> : (
                <div className="container">
                    <H1>{name}</H1>
    
                    <ProductContainer>
                        <div>
                            <p>Published: { formatDistanceToNow(new Date(created)) }</p>
                            <p>By: {owner.name}, from {company}</p>
                            <img src ={urlImage} />
                            <p>{description}</p>
    
                            { user && ( <>
                                <h2>Add comment</h2>
                                <form
                                    onSubmit={addComment}
                                >
                                    <Container>
                                        <input
                                            type="text"
                                            name="msg"
                                            onChange={commentChange}
                                        />
                                    </Container>
                                    <InputSubmit 
                                        type="submit"
                                        value="Add Comment"
                                    />
                                </form>
                            </> )}
    
                            <CommentsTitle>Comments</CommentsTitle>
                            {comments.length === 0 ? "No comments" : (
                                <ul>
                                    {comments.map((comment, i) => (
                                        <Comment key={i}>
                                            <p>{comment.msg}</p>
                                            <p>Written by: <Bold>{comment.userName}</Bold></p>
                                            { isOwner(comment.userId) && <Owner>Owner</Owner>}
                                        </Comment>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <aside>
                            <Button
                                target="_blank"
                                bgColor="true"
                                href={url}
                            >Web page</Button>
    
                            <Votes>{votes} Votes</Votes>
    
                            { user && (
                                <Button
                                    onClick={voteProduct}
                                >Vote</Button> 
                            )}
                        </aside>
                    </ProductContainer>

                    { canDelete() && 
                        <Button
                            onClick={deleteProduct}
                        >Delete Product</Button>
                    }
                </div>
            )}
        </>
    )
}

export default Product