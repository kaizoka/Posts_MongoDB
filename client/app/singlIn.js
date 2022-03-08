const button = document.getElementById('button')
const userName = document.getElementById('name')
const userPassword = document.getElementById('password')

button.addEventListener('click', async () => {
    const user = userSend(userName, userPassword)
    await authRegist.login(user) // отправляем данные на сервер 
        .then(data => console.log(data.token)) // получаям токен для пользвателя  
        .catch(err => console.log(err)) // вывод ошибки 
})