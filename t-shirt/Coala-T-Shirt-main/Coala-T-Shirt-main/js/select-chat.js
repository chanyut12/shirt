let new_msg_btn = document.getElementById("new-message")
let new_chat_btn = document.getElementById("new-chat")
// let new_msg_count = document.querySelectorAll("span.new-msg-count")

// New MSG-btn: click
new_msg_btn.addEventListener("click", () => {
    let chats = document.querySelectorAll("div.chat");
    const chat_count = chats.length;
    let random_num = getRandomInt(chat_count);

    // console.log(chats[1].querySelector("span.new-msg-count"));

    chats.forEach((chat, index) => {
        setOrder(chat, index, random_num)
    })
})

// New Chat-btn: click
new_chat_btn.addEventListener("click", () => {
    `<div class="chat" new-msg="false"></div>`
    let node = document.createElement("div");
    node.classList.add("chat");
    node.setAttribute("data-new-msg", "true")

    let chat_group = document.querySelector(".chat-group")
    let child_count = chat_group.childElementCount;
    node.innerHTML = `<div class="shop-logo"></div>
                        <div class="shop-desc">
                            <h3 class="shop-name">Shop #${child_count + 1}</h3>
                            <span class="new-msg-count"></span>
                        </div>`;

    setOrder(node, child_count, child_count);

    document.querySelectorAll(".chat").forEach(chat => {
        chat.style.order = Number(chat.style.order) + 1;
    })
    node.addEventListener("click", () => {
        node.setAttribute("data-new-msg", "false")
    })

    chat_group.appendChild(node);
})

document.querySelectorAll(".chat").forEach(chat => {
    chat.addEventListener("click", () => {
        chat.setAttribute("data-new-msg", "false")
        chat.querySelector("span.new-msg-count").innerText = "";
    })
})

function setOrder(chat, index, random_num) {
    if (index === random_num) {
        chat.setAttribute("data-new-msg", "true")
        chat.style.order = 0;

        chat.querySelector("span.new-msg-count").innerText = Number(chat.querySelector("span.new-msg-count").innerText) + 1
    }
    else {
        chat.style.order = Number(chat.style.order) + 1;
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
