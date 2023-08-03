let send_btn = document.getElementById("send-text-btn");
let text_input = document.getElementById("sending-text-input");
let chat_space = document.querySelector(".chat-space")

chat_space.scrollTo(0, chat_space.scrollHeight)
send_btn.addEventListener("click", () => {
    if (text_input.value !== "") {
        const node = text_sending_node(text_input.value);
        chat_space.appendChild(node)

        text_input.value = ""
        chat_space.scrollTo(0, chat_space.scrollHeight)
    }
})

text_input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        send_btn.click()
    }
})

function text_sending_node(text) {
    let node = document.createElement("div");
    node.classList.add("text-group", "sender-me")

    let first_child = document.createElement("div");
    first_child.classList.add("user-logo")

    let second_child = document.createElement("span")
    second_child.classList.add("text")
    second_child.innerText = text

    node.appendChild(first_child)
    node.appendChild(second_child)

    return node;
}





`
<div class="text-group sender-me">
    <div class="user-logo"></div>
    <span class="text"></span>
</div>
`