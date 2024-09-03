const socket = io("ws://localhost:8080");


document.querySelector("#btn-name").onclick = () => {
    let uName = document.querySelector("#txt-name").value;
    localStorage.setItem("user", uName);

    $('#myModal').modal('hide');

}


// document.querySelector("#noiDung")


document.querySelector("#btn-send").onclick = () => {
    let uName = localStorage.getItem("user");
    let content = document.querySelector("#txt-send").value
    let roomId = localStorage.getItem("roomId")
    socket.emit("client-message", { uName: uName, message: content, roomId: roomId });
}

socket.on("server-message", (data) => {

    let html = "";

    let uName = localStorage.getItem("user");

    if (data.uName === uName) {
        html = `
            <li class="clearfix">
                <div class="message-data text-right">
                    <span class="message-data-time">${data.uName}</span>
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
                </div>
                <div class="message other-message float-right">${data.message}</div>
            </li>
        `
    }
    else {
        html = `
             <li class="clearfix">
                <div class="message-data">
                    <span class="message-data-time">${data.uName}</span>
                </div>
                <div class="message my-message">${data.message}</div>
            </li>
        `
    }


    document.querySelector("#noiDung").innerHTML += html;
})


document.querySelector("#room-1").onclick = () => {
    localStorage.setItem("roomId", "room-1")
    socket.emit("join-room", "room-1")
    alert("Join room 1")
}
document.querySelector("#room-2").onclick = () => {
    localStorage.setItem("roomId", "room-2")
    socket.emit("join-room", "room-2")
    alert("Join room 2")
}
document.querySelector("#room-3").onclick = () => {
    localStorage.setItem("roomId", "room-3")
    socket.emit("join-room", "room-3")
    alert("Join room 3")
}
