const TelegramBot = require('node-telegram-bot-api');

const token = 'APIKEY';

const bot = new TelegramBot(token, { polling: true });

// Mensagem de boas-vindas
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "👋 Bem-vindo ao Bot Oficial da FURIA!\nEscolha uma opção:", {
        reply_markup: {
            keyboard: [
                ['📈 Placar ao vivo', '📰 Últimas notícias'],
                ['🎮 Próximo jogo', '📊 Jogo mais recente'],
                ['🧑‍🤝‍🧑 Equipe FURIA', '🏆 Sobre a FURIA'],
                ['🔔 Notificações', '🔥 Reações Rápidas'],
                ['⭐ Área de Fã Premium', '⚙️ Configurações']
            ],
            resize_keyboard: true,
            one_time_keyboard: false
        }
    });
});

// Exemplo de respostas para os botões
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    switch (text) {
        case '📈 Placar ao vivo':
            bot.sendMessage(chatId, '🔴 Hoje não tem jogo ao vivo! Fique ligado!'); 
            break;
        case '📰 Últimas notícias':
            bot.sendMessage(chatId, '📰 Últimas notícias:\n- Notícia 1\n- Notícia 2\n- Notícia 3');
            break;
        case '🎮 Próximo jogo':
            bot.sendMessage(chatId, '🎯 Próximo jogo: FURIA x Team XYZ\nData: 30/04, 19h');
            break;
        case '📊 Jogo mais recente':
            bot.sendMessage(chatId, '🏁 Último jogo:\nFURIA 16 x 12 Team ABC\nMVP: yuurih');
            break;
        case '🧑‍🤝‍🧑 Equipe FURIA':
            bot.sendMessage(chatId, '👥 Jogadores:\n- KSCERATO\n- yuurih\n- saffee\n- chelo\n- FalleN');
            break;
        case '🏆 Sobre a FURIA':
            bot.sendMessage(chatId, '🏆 Fundada em 2017, a FURIA é uma das maiores organizações de eSports da América Latina.');
            break;
        case '🔔 Notificações':
            bot.sendMessage(chatId, '🔔 Deseja ativar ou desativar notificações? (em breve)');
            break;
        case '🔥 Reações Rápidas':
            bot.sendMessage(chatId, '💥 GGWP! 🏆');
            break;
        case '⭐ Área de Fã Premium':
            bot.sendMessage(chatId, '🚀 Conteúdo premium: Quiz, playlist, cupons e pré-venda (em breve)');
            break;
        case '⚙️ Configurações':
            bot.sendMessage(chatId, '⚙️ Atualizar perfil, Modo Silencioso, Horários de mensagens (em breve)');
            break;
        default:
            bot.sendMessage(chatId, '❓ Por favor, escolha uma opção do menu.');
    }
});
