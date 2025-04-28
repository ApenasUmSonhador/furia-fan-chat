const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const token = 'API_TOKEN'; // Substitua pelo seu token do BotFather

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

// Tratamento das mensagens
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    switch (text) {
        case '📈 Placar ao vivo':
            // TODO: Implementar a lógica para obter o placar ao vivo
            const placar = null;
            if (placar) {
                bot.sendMessage(chatId, '🔴 Placar ao vivo:\n' + placar);
            } else {
                bot.sendMessage(chatId, '🔴 Hoje não tem jogo ao vivo! Fique ligado!');
            }
            break;

        case '📰 Últimas notícias':
            // TODO: Implementar a lógica para obter as últimas notícias
            getNews().then(news => {
                if (news && news.length > 0) {
                    let message = '📰 Últimas notícias:\n';
                    news.forEach((item, index) => {
                        message += `${index + 1}. ${item.title}\n${item.link}\n\n`;
                    });
                    bot.sendMessage(chatId, message);
                } else {
                    bot.sendMessage(chatId, '📰 Não há notícias disponíveis no momento.');
                }
            });
            break;

        case '🎮 Próximo jogo':
            // TODO: Implementar a lógica para obter o próximo jogo
            // Exemplo de resposta fixa
            bot.sendMessage(chatId, '🎯 Próximo jogo: FURIA x Team XYZ\nData: 30/04, 19h');
            break;

        case '📊 Jogo mais recente':
            // TODO: Implementar a lógica para obter o jogo mais recente
            // Exemplo de resposta fixa
            bot.sendMessage(chatId, '🏁 Último jogo:\nFURIA 16 x 12 Team ABC\nMVP: yuurih');
            break;

        case '🧑‍🤝‍🧑 Equipe FURIA':
            // TODO: Implementar a lógica para obter informações da equipe
            // Exemplo de resposta fixa
            bot.sendMessage(chatId, '👥 Jogadores:\n- KSCERATO\n- yuurih\n- saffee\n- chelo\n- FalleN');
            break;

        case '🏆 Sobre a FURIA':
            //TODO: Escrever uma breve descrição da FURIA
            // Exemplo de resposta fixa
            bot.sendMessage(chatId, '🏆 Fundada em 2017, a FURIA é uma das maiores organizações de eSports da América Latina.');
            break;

        case '🔔 Notificações':
            //TODO: Implementar a lógica para ativar/desativar notificações
            bot.sendMessage(chatId, '🔔 Deseja ativar ou desativar notificações? (em breve)');
            break;

        case '🔥 Reações Rápidas':
            //TODO: Implementar a lógica para reações rápidas
            bot.sendMessage(chatId, '💥 GGWP! 🏆');
            break;

        case '⭐ Área de Fã Premium':
            //TODO: Implementar a lógica para área de fã premium
            bot.sendMessage(chatId, '🚀 Conteúdo premium: Quiz, playlist, cupons e pré-venda (em breve)');
            break;

        case '⚙️ Configurações':
            //TODO: Implementar a lógica para configurações
            bot.sendMessage(chatId, '⚙️ Atualizar perfil, Modo Silencioso, Horários de mensagens (em breve)');
            break;

        default:
            bot.sendMessage(chatId, '❓ Opção inválida. Por favor, escolha uma opção do menu.');
    }
});
