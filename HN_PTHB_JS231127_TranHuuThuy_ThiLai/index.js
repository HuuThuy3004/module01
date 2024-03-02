renderCard()

// Cau2
function onSave() {
    let card = getDataForm()
    
    let error = validateCard(card)

    renderError(error)

    if (error.isError) {
        
    }
    else{
        let cards = JSON.parse(localStorage.getItem('list-card')) || []
        cards.push(card)
        localStorage.setItem('list-card' , JSON.stringify(cards))
        renderCard()
    
        document.getElementById('card-number').value = ''
        document.getElementById('expiry-date').value = ''
        document.getElementById('cvc').value = ''
    }
}

function getDataForm(){
    let card = {
        image: '',
        name: '',
        cardNumber: document.getElementById('card-number').value,
        expiryDate: document.getElementById('expiry-date').value,
        cvc: document.getElementById('cvc').value,
    }

    let arrayCard = document.getElementsByName('card')
    for (let i = 0; i < arrayCard.length; i++) {
        if (arrayCard[i].checked) {
            card.image = arrayCard[i].dataset.urlimage
            card.name = arrayCard[i].value
        }
    }

    return card
}

function renderCard() {
    let cards = JSON.parse(localStorage.getItem('list-card')) || []
    let cardHTML = ""
    cards.map((value , index) => {
//Cau3
        cardHTML += 
        `
            <tr>
                <td>
                    <img src=${value.image} alt="" />
                </td>
                <td>${value.cardNumber.slice(0,8) + '* **** **' + value.cardNumber.slice(17,19)}</td>
                <td>${value.expiryDate}</td>
                <td>${(value.cvc).replace(value.cvc , '***')}</td>
                <td>
                    <button class="btn-view" onclick="viewCard(${index})">View</button>
                    <button class="btn-edit" onclick="editCard(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteCard(${index})">Delete</button>
                </td>
            </tr>
        `
    });
    document.querySelector('.list-body').innerHTML = cardHTML;
}

function renderError(error) {
    let cardNumber , expiryDate , cvc
    cardNumber = document.getElementById('error-cardNumber')
    expiryDate = document.getElementById('error-expiryDate')
    cvc = document.getElementById('error-cvc')

    cardNumber.innerHTML = error.cardNumber
    expiryDate.innerHTML = error.expiryDate
    cvc.innerHTML = error.cvc
}

//Cau4
function deleteCard(index) {
    let cards = JSON.parse(localStorage.getItem('list-card')) || []
    cards.splice(index,1)
    localStorage.setItem('list-card' , JSON.stringify(cards))
    renderCard()
}

//Cau5
function editCard(index) {
    let cards = JSON.parse(localStorage.getItem('list-card')) || []

    //Hien thi du lieu tren form card
    document.getElementById('card-number').value = cards[index].cardNumber
    document.getElementById('expiry-date').value = cards[index].expiryDate
    document.getElementById('cvc').value = cards[index].cvc
    document.getElementById('index').value = index
    let arrayCard = document.getElementsByName('card')
    for (let i = 0; i < arrayCard.length; i++) {
        if (cards[index].name == arrayCard[i].value) {
            arrayCard[i].checked = true
        }
    }
    
    document.querySelector('.btn-save').style.display = 'none'
    document.querySelector('.btn-update').style.display = 'inline-block'
}

function updateCard() {
    let cards = JSON.parse(localStorage.getItem('list-card')) || []
    let index = document.getElementById('index').value

    let card = getDataForm()

    let error = validateCard(card)

    renderError(error)

    if (error.isError) {
        
    }
    else{ 
        let card = {
            image: '',
            name: '',
            cardNumber: '',
            expiryDate: '',
            cvc: ''
        }
    
        let arrayCard = document.getElementsByName('card')
        for (let i = 0; i < arrayCard.length; i++) {
            if (arrayCard[i].checked) {
                card.image = arrayCard[i].dataset.urlimage
                card.name = arrayCard[i].value
            }
        }
    
        cards[index] = {
            image: card.image,
            name: card.name,
            cardNumber: document.getElementById('card-number').value,
            expiryDate: document.getElementById('expiry-date').value,
            cvc: document.getElementById('cvc').value,
        }
        
        console.log(11111 , cards[index]);
    
        localStorage.setItem('list-card' , JSON.stringify(cards))
        renderCard()
    
        document.querySelector('.btn-save').style.display = 'inline-block'
        document.querySelector('.btn-update').style.display = 'none'
    
        document.getElementById('card-number').value = ''
        document.getElementById('expiry-date').value = ''
        document.getElementById('cvc').value = ''
    }

   
}

//Cau6
function viewCard(index) {
    let cards = JSON.parse(localStorage.getItem('list-card')) || []
  

    let cardHTML = ""
    cards.map((value , index) => {
    cardHTML += 
        `
            <tr>
                <td>
                    <img src=${value.image} alt="" />
                </td>
                <td>${value.cardNumber}</td>
                <td>${value.expiryDate}</td>
                <td>${value.cvc}</td>
                <td>
                    <button class="btn-view" onclick="viewCard2(${index})">View</button>
                    <button class="btn-edit" onclick="editCard(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteCard(${index})">Delete</button>
                </td>
            </tr>
        `
    });
    document.querySelector('.list-body').innerHTML = cardHTML;
    
}

function viewCard2() {
    let cards = JSON.parse(localStorage.getItem('list-card')) || []

    let cardHTML = ""
    cards.map((value , index) => {
        cardHTML += 
        `
            <tr>
                <td>
                    <img src=${value.image} alt="" />
                </td>
                <td>${value.cardNumber.slice(0,8) + '* **** **' + value.cardNumber.slice(17,19)}</td>
                <td>${value.expiryDate}</td>
                <td>${(value.cvc).replace(value.cvc , '***')}</td>
                <td>
                    <button class="btn-view" onclick="viewCard(${index})">View</button>
                    <button class="btn-edit" onclick="editCard(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteCard(${index})">Delete</button>
                </td>
            </tr>
        `
    });
    document.querySelector('.list-body').innerHTML = cardHTML;
}
//Cau7
function validateCard(card) {
    let error = {
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        isError: false
    }

    //Phan card-number
    if (!card.cardNumber) {
        error.cardNumber = 'Khong duoc de trong !'
        error.isError = true
    }
    else{
        if (card.cardNumber.length != 19) {
            console.log(card.cardNumber.length);
            error.cardNumber = 'Nhap du 16 so (vd: 1234 568* **** **96)!'
            error.isError = true
        }
        else{
            error.isError = false
        }
    }

    //Phan expiry-date
    if (!card.expiryDate) {
        error.expiryDate = 'Khong duoc de trong !'
        error.isError = true
    }

    //Phan cvc
    if (!card.cvc) {
        error.cvc = 'Khong duoc de trong !'
        error.isError = true
    }
    else{
        if (card.cvc.length != 3) {
            error.cvc = 'Nhap du qua 3 so !'
            error.isError = true
        }
        else{
            error.isError = false
        }
    }


    return error
}
