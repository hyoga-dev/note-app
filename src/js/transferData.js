const url = "http://localhost:3000/"
import fly from "./fly/fly-card.js"
import Menu from "./menu.js"


// =================================================
export async function getDb(uid) {
  const cm = new Menu("context-menu", ".box")
  const obj = {
    uid: uid
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
  container.innerHTML = data.content
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
    getDb(uid)
  }
}

// =================================================
export async function updateDb(uid, content) {
  const obj = {
    uid: uid,
    content: content
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
}

// =================================================
function refreshFly() {
  document.querySelectorAll('.box').forEach( box => {
    fly(box)
  })
}