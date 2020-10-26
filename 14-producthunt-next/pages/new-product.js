import React, { useState, useContext } from 'react'
import Router from 'next/router'
import { FirebaseContext } from '../firebase'
import FileUploader from 'react-firebase-file-uploader'
import { Error404 } from 'components'
import { Form, Container, InputSubmit, H1, Error } from 'components/ui/Form'
import useValidation from 'hooks/useValidation'
import validateNewProduct from 'utils/validateNewProduct'

const INITIAL_STATE = {
  name: '',
  company: '',
  url: '',
  description: ''
}

const NewProduct = () => {
  const [error, setError] = useState(false)
  const [imageName, setImageName] = useState('')
  const [uplading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [urlImage, setUrlImage] = useState('')

  const { user, firebase } = useContext(FirebaseContext)
    
  const newProduct = async() => {
    if(!user) return Router.push('/')

    const product = {
      name,
      company,
      url,
      urlImage,
      description,
      votes: 0,
      comments: [],
      created: Date.now(),
      owner: {
        id: user.uid,
        name: user.displayName
      },
      voters: []
    }

    firebase.db.collection('products').add(product)
    return Router.push('/')
  }

  const handleUploadStart = () => { 
    setProgress(0)
    setUploading(0)
  }

  const handleProgress = progress => setProgress({ progress })

  const handleUploadError = error => {
    setUploading(error)
    console.error(error)
  }

  const handleUploadSuccess = name => {
    setProgress(100)
    setUploading(false)
    setImageName(name)
    firebase
      .storage
      .ref("products")
      .child(name)
      .getDownloadURL()
      .then(url => setUrlImage(url))
  }
  
  const { values ,errors, handleSubmit, handleChange, handleBlur } = useValidation(INITIAL_STATE, validateNewProduct, newProduct)
  
  const { name, company, url, description } = values

  return (
    <div>
    { !user ? <Error404 /> : ( <>
        <H1>New Product</H1>
  
        <Form onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>General information</legend>
            <Container>
              <label htmlFor="name">Name</label>
              <input 
                type="text"
                id="name"
                placeholder="name"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Container>
  
            {errors.name && <Error>{errors.name}</Error>}
  
            <Container>
              <label htmlFor="company">Company</label>
              <input 
                type="text"
                id="company"
                placeholder="Company"
                name="company"
                value={company}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Container>
  
            {errors.company && <Error>{errors.company}</Error>}
  
            <Container>
              <label htmlFor="image">Image</label>
              <FileUploader
                accept="image/*"
                id="image"
                name="image"
                randomizeFilename
                storageRef={firebase.storage.ref("products")}
                onUploadStart={handleUploadStart}
                onUploadError={handleUploadError}
                onUploadSuccess={handleUploadSuccess}
                onProgress={handleProgress}
              />
            </Container>
  
            <Container>
              <label htmlFor="url">URL</label>
              <input 
                type="url"
                id="url"
                placeholder="URL"
                name="url"
                value={url}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Container>
  
            {errors.url && <Error>{errors.url}</Error>}
          </fieldset>
  
          <fieldset>
            <legend>About your product</legend>
            <Container>
              <label htmlFor="description">Description</label>
              <textarea 
                id="description"
                name="description"
                value={description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Container>
            {errors.description && <Error>{errors.description}</Error>}
          </fieldset>
  
          {error && <Error>{error}</Error>}
  
          <InputSubmit type="submit" value="Create Product" />
        </Form>
      </> )}
    </div>
  )
}

export default NewProduct