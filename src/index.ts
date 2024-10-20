import {Telegraf, Markup} from 'telegraf'
import {Settings} from "./settings";
import {MyContext} from "./models/common";


const bot = new Telegraf<MyContext>(Settings.token);


bot.use((ctx, next) => {
    ctx.session.myProp;
    ctx.scene.session.myProps;
});

// bot.action('1', (ctx) => {
//     console.log(ctx.callbackQuery.message)
// })
//
// bot.command('markup', (ctx) => {
//     ctx.replyWithMarkdownV2('*test*')
//     ctx.reply('mak', {
//         reply_markup: {
//             inline_keyboard: [
//                 [{ text: '1', callback_data: '1'}]
//             ]
//         }
//     })
// })
//
// bot.command('image', (ctx) => {
//     ctx.replyWithPhoto({url: 'C:\\Users\\rasul\\OneDrive\\Изображения\\документы\\photo_2023-11-06_17-50-45.jpg'})
// })
//
// bot.command('test', (ctx) => {
//     ctx.reply('test', Markup.keyboard(['/1', '/2']).oneTime().resize())
// })
//
// bot.hears('text',  (context) => {
//      context.reply(context.message.text)
// })

bot.launch()