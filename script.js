function addItem() {

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let location = document.getElementById("location").value;
    let contact = document.getElementById("contact").value;
    let status = document.getElementById("status").value;

    let itemsList = document.getElementById("itemsList");

    let newItem = document.createElement("div");

    newItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p>Location: ${location}</p>
        <p>Contact: ${contact}</p>
        <p>Status: ${status}</p>
        <hr>
    `;

    itemsList.appendChild(newItem);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("location").value = "";
    document.getElementById("contact").value = "";
}