const url = "https://note-app-server-production.up.railway.app/"
import fly from "./fly/fly-card.js"
import Menu from "./menu.js"

// =================================================
export async function getDb(uid, room) {
  const cm = new Menu("context-menu", ".box")
  const obj = {
    uid: uid,
    room: room
  }

  const option = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(obj)
  }

  const send = await fetch(url + "get_db", option)
  const data = await send.json()
  container.innerHTML = data["room" + room]
  container.style.opacity = "1"
  container.style.filter = "blur(0)"
  cm.refreshEvent()
  refreshFly()
}

// =================================================
export async function sendDb(uid, name, content) {

  const obj = {
    uid: uid,
    name: name,
    content: content
  }

  const option = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(obj)
  }

  const send = await fetch(url + "send_db", option)
  const data = await send.json()

  if (data.msg == "user exist") {
    getDb(uid, 0)
  }
}

// =================================================
export async function updateDb(uid, content, room) {
  const obj = {
    uid: uid,
    content: content,
    room: room
  }

  const option = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(obj)
  }
  
  const send = await fetch(url + "update_db", option)
  const data = await send.json()
  console.log(data)
}

// =================================================
function refreshFly() {
  document.querySelectorAll('.box').forEach( box => {
    fly(box)
  })
}