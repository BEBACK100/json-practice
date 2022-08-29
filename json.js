const random = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => display(data.results))
}
const display = users => {

    const userContainer = document.getElementById('user-container')
    for (const user of users) {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h2>user Name : ${user.name.title} ${user.name.first} ${user.name.last}</h2 >
        <h3>Addres: </h3>
        <p>User Location: ${user.location.country}</p>

        <button>Description</bitton> 

    `
        userContainer.append(userDiv)
    }
}
random();