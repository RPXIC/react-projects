export const checkBudget = (budget, remaining) => {
    let style

    if ((budget / 4) > remaining) {
        style = 'alert alert-danger'
    } else if ((budget / 2) > remaining) {
        style = 'alert alert-warning'
    } else {
        style = 'alert alert-success'
    }

    return style
}