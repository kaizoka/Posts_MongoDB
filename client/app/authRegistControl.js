class AuthRegist {
    registration(body) { //отправляет данные для регистрации на сервер 
        const urlRegist = 'http://localhost:5000/auth/registration'
        return fetch(urlRegist, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    login(body) { // отправляет данные для получения токена на сервер 
        const urlLogin = 'http://localhost:5000/auth/login'
        return fetch(urlLogin, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    }
}

const authRegist = new AuthRegist()