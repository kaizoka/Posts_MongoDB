function userSend(name, password) { // создаем обьект из полученых данных для отправки на сервер 
    const user = {
        username: name.value,
        password: password.value
    }
    return user
}
