import {Telegraf, Markup, Scenes} from 'telegraf'
import {Settings} from "./settings";
import {MyContext, MySessionScene} from "./models/common";
import LocalSession from "telegraf-session-local"

const { leave, enter } = Scenes.Stage;
const testScene = new Scenes.BaseScene<MyContext>('empty')
testScene.enter((ctx => ctx.reply('Привет!')));
testScene.command('back',leave<MyContext>() )
testScene.hears('text', ctx => ctx.reply(ctx.message.text));
testScene.leave((ctx => ctx.reply('Пока!')))

const stage = new Scenes.Stage<MyContext>([testScene])

const bot = new Telegraf<MyContext>(Settings.token);
bot.use(new LocalSession({ database: 'session.json' }).middleware());
bot.use(stage.middleware());
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