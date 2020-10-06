import React, { useContext, useState } from 'react'
import { ModalContext } from 'context'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'

const getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 'auto',
        height: '80%',
        overflow: 'scroll',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

const Recipe = ({ recipe }) => {

    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const styles = useStyles()

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    const { infoRecipe, setId, setInfoRecipe } = useContext(ModalContext)

    const { strDrink, strDrinkThumb } = recipe

    const showIngredients = infoRecipe => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            if (infoRecipe[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={i}>{infoRecipe[`strIngredient${i}`]} - {infoRecipe[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{strDrink}</h2>
                <img className="card-img-top" src={strDrinkThumb} alt={strDrink} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setId(recipe.idDrink)
                            handleOpen()
                        }}
                    >
                        See Recipe</button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setId(null)
                            setInfoRecipe({})
                            handleClose()
                        }}
                    >
                        <div style={modalStyle} className={styles.paper}>
                            <h2>{infoRecipe.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>{infoRecipe.strInstructions}</p>
                            <img className="img-fluid my-4 w-100" src={infoRecipe.strDrinkThumb} alt={infoRecipe.strDrink} />
                            <h3>Ingredients and quantities</h3>
                            <ul>
                                {showIngredients(infoRecipe)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Recipe