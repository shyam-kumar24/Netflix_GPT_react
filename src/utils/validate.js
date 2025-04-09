
export const checkValidData = (email, password) => {

    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isValidEmail && !isValidPassword) return 'Email and password are both invalid'
    if(!isValidEmail) return 'Email is not valid'
    if(!isValidPassword) return 'Password is not valid'
    return null
}