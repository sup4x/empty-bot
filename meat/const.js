const GROUP_TOKEN = 'СЮДА ТОКЕН ГРУППЫ';

const BUGTRACE_ID = 'СЮДА СВОЙ АЙДИ ЧТОБЫ ЛОВИТЬ ОШИБКИ'

const VIDEO_ATTACH_EXAMPLE = 'video-[GROUP_ID]_[ATTACH_ID]' // Можно спиздить прямо из браузера
const PHOTO_ATTACH_EXAMPLE = 'photo-[GROUP_ID]_[ATTACH_ID]' // Можно спиздить прямо из браузера

// PROD BASE
// const CHAT_NUMBER = 0 // Число, обычно мелкое 0-50
// const CHAT_ID = +`20000000${CHAT_NUMBER}`;

// DEVELOP BASE
const CHAT_NUMBER = 0 // Число, обычно мелкое 0-50
const CHAT_ID = +`20000000${CHAT_NUMBER}`;

module.exports = {
    GROUP_TOKEN,
    // Service
    BUGTRACE_ID,
    CHAT_NUMBER,
    CHAT_ID
}