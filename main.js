document.getElementById('message-form').addEventListener('submit', function (event) {
    event.preventDefault()   //останавливает выполнение

    const author = document.getElementById('author').value;
    const text = document.getElementById('message-text').value;
    const date = new Date()

    const messageDiv = document.createElement('div')
    messageDiv.className = 'message'
    const authorDiv = document.createElement('div')
    authorDiv.className = 'message-author'
    authorDiv.textContent = author

    const messageHeadDiv = document.createElement('div')
    messageHeadDiv.className = 'message-head'

    const textDiv = document.createElement('div')
    textDiv.className = 'message-content'
    textDiv.textContent = text

    const dateDiv = document.createElement('div')  // создание нового блока
    dateDiv.className = 'message-date'  //присвоение имени класса

    // let newYear1 = new date()
    // console.log(newYear1)
    // newYear1.toLocaleString()
    let newDate = new Date()
    dateDiv.textContent = newDate



    messageDiv.appendChild(messageHeadDiv)
    messageDiv.appendChild(textDiv)

    messageHeadDiv.appendChild(authorDiv)  // помещаем блоки в родительский блок
    messageHeadDiv.appendChild(dateDiv)


    const container = document.getElementById('messages_container')
    container.insertBefore(messageDiv, container.firstChild) //новое сообщение вставили вверх

    document.getElementById('author').value = ''
    document.getElementById('message-text').value = ''

})
