<template>
    <div class="chatpage">
        <header>
            <h2>FURIA Fan Chat 🢁</h2>
            <div class="live">LIVE 🔴 {{ liveStatus }}</div>
        </header>

        <div class="chat-feed">
            <div
                v-for="(message, index) in messages"
                :key="index"
                :class="['message', message.type]"
            >
                {{ message.sender }}: {{ message.text }}
            </div>
        </div>

        <div class="reactions">
            <button @click="sendReaction('🔥 Ace!')">🔥 Ace!</button>
            <button @click="sendReaction('🎯 Clutch!')">🎯 Clutch!</button>
            <button @click="sendReaction('🚀 Destaque!')">🚀 Destaque!</button>
        </div>

        <div class="send-message">
            <input
                v-model="newMessage"
                type="text"
                placeholder="Digite sua mensagem..."
                @keyup.enter="sendMessage"
            />
            <button @click="sendMessage">Enviar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChatPage",
    data() {
        return {
            liveStatus: "FURIA 13 x 11 NAVI",
            messages: [
                { sender: "Torcedor1", text: "VAMO FURIAAA!!!", type: "other" },
                { sender: "Eu", text: "💪🔥", type: "self" },
            ],
            newMessage: "",
        };
    },
    methods: {
        sendMessage() {
            if (this.newMessage.trim() !== "") {
                this.messages.push({
                    sender: "Eu",
                    text: this.newMessage,
                    type: "self",
                });
                this.newMessage = "";
                this.simulateResponse();
            }
        },
        sendReaction(reaction) {
            this.messages.push({
                sender: "Eu",
                text: reaction,
                type: "self",
            });
            this.simulateResponse();
        },
        simulateResponse() {
            setTimeout(() => {
                const responses = [
                    "Torcedor2: É ISSO FURIA!",
                    "Torcedor3: QUE JOGÃO!",
                    "Torcedor4: NÃO PARA!!!",
                ];
                const randomResponse =
                    responses[Math.floor(Math.random() * responses.length)];
                this.messages.push({ sender: "Bot", text: randomResponse, type: "other" });
            }, 1000);
        },
    },
};
</script>

<style scoped>
.chatpage {
    background: #000;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #111;
}

.live {
    color: #f74a4b;
    font-weight: bold;
}

.chat-feed {
    flex: 1;
    padding: 15px;
    overflow-y: auto;
}

.message {
    margin: 8px 0;
}

.self {
    text-align: right;
}

.reactions {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px 0;
}

.reactions button {
    background: #f74a4b;
    border: none;
    border-radius: 20px;
    padding: 8px 15px;
    color: white;
    cursor: pointer;
}

.send-message {
    display: flex;
    padding: 10px;
    background: #111;
}

.send-message input {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-right: 8px;
}

.send-message button {
    background: #f74a4b;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}
</style>