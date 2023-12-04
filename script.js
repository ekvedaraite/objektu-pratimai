// 1
function addRow() {
    const fullNameInput = document.getElementById('fullName');
    const fullName = fullNameInput.value.trim();
    let name = ""
    let surname = ""

    const nameArray = fullName.split(' ')
    if (nameArray.length > 0) {
        name = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1).toLowerCase()
        surname = nameArray.slice(1).join(' ').charAt(0).toUpperCase() + nameArray.slice(1).join(' ').slice(1).toLowerCase()
    }

    const table = document.getElementById('table')
    const row = table.insertRow(-1)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    cell1.innerHTML = name
    cell2.innerHTML = surname

    fullNameInput.value = ""
}
// 2
function Car(brand, model, mileage, price, image) {
    this.brand = brand,
    this.model = model
    this.mileage = mileage
    this.price = price
    this.image = image
}

function addCar(car) {
    const carBlock = document.createElement('div')
    carBlock.classList.add('car-block')
    carBlock.innerHTML = 
    `<img src="${car.image}" alt="${car.brand} ${car.model}">
    <h3>${car.brand} ${car.model}</h3>`

    carBlock.addEventListener('click', function() {
        alert(`Kaina: ${car.price} Є`)
    })

    document.body.appendChild(carBlock)
}

function submitForm() {
    const brandInput = document.getElementById('brand')
    const modelInput = document.getElementById('model')
    const mileageInput = document.getElementById('mileage')
    const priceInput = document.getElementById('price')
    const imageInput = document.getElementById('image')

    const brand = brandInput.value
    const model = modelInput.value
    const mileage = mileageInput.value
    const price = priceInput.value
    const image = imageInput.value

    const car = new Car(brand, model, mileage, price, image)

    addCar(car)

    brandInput.value = ""
    modelInput.value = ""
    mileageInput.value = ""
    priceInput.value = ""
    imageInput.value = ""
}
