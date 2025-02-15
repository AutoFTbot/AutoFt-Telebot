import TelegramInlineQueryResult from './TelegramInlineQueryResult.js';
import TelegramInputMessageContent from './TelegramInputMessageContent.js';

export default class TelegramInlineQueryResultArticle extends TelegramInlineQueryResult {
	title: string;
	input_message_content: TelegramInputMessageContent;
	thumb_url: string;
	constructor(data: { content: string; title?: string; parse_mode?: string; thumb_url?: string }) {
		super('article');
		this.title = data.title ?? '';
		this.input_message_content = {
			message_text: data.content.toString(),
			parse_mode: data.parse_mode ?? '',
		};
		this.thumb_url = data.thumb_url ?? '';
	}
}
