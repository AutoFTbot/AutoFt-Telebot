interface TelegramInlineKeyboardButton {
	text: string;
	url?: string;
	callback_data?: string;
}

interface TelegramInlineKeyboardMarkup {
	inline_keyboard: TelegramInlineKeyboardButton[][];
}

export default TelegramInlineKeyboardMarkup; 