import TelegramBusinessMessage from './TelegramBusinessMessage.js';
import TelegramInlineQuery from './TelegramInlineQuery.js';
import TelegramMessage from './TelegramMessage.js';

interface PartialTelegramUpdate {
	update_id?: number;
	message?: TelegramMessage;
	edited_message?: TelegramMessage;
	channel_post?: TelegramMessage;
	edited_channel_post?: TelegramMessage;
	inline_query?: TelegramInlineQuery;
	business_message?: TelegramBusinessMessage;
}
export default PartialTelegramUpdate;
