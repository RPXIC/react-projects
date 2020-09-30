export const calcByYear = year => new Date().getFullYear() - year

export const calcByBrand = brand => {
    let increase

    switch (brand) {
        case 'european': return increase = 1.30
        case 'american': return increase = 1.15
        case 'asian': return increase = 1.05

        default: break
    }
    return increase
}

export const calcByCoverage = coverage => (coverage === 'basic') ? 1.20 : 1.50

export const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)
