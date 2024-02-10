import { Bot, Keyboard } from "grammy";
import { MyContext } from "./types/context.type";
import { sessionMiddleware } from "./middlewares/session.middleware";
import { Menu } from "@grammyjs/menu";
import { startMenu } from "./menus/start.menu";
// import { notificationMenu } from "./menus/notification.menu";
import { categoryMenu } from "./menus/category.menu";
import { categories } from "./data/category.data";

const bot = new Bot<MyContext>(
  "6433019525:AAHhOxGUgZYUuMjqKc1RPYboHqMc74LRN1Q"
);

let notification = true;

const notificationMenu = new Menu("notification__menu")
  .text(
    (ctx) => (notification ? "1" : "2"),
    (ctx) => {
      (notification = !notification), ctx.menu.update();
    }
  )
  .submenu("move", "farosat");

const menuCategory = new Menu("menuCategory")
  .text("<", (ctx) => ctx.reply("<"))
  .text(">", (ctx) => ctx.reply(">"))
  .row();
// Middlewares
const farosat = new Menu("farosat")
  .text("asd", (ctx) => ctx.reply("wassap"))
  .back("back");

bot.use(menuCategory);

bot.use(sessionMiddleware());
// Menus
bot.use(startMenu);
bot.use(notificationMenu);
notificationMenu.register(farosat);
bot.use(categoryMenu);

// Set commands
export async function setCommands(bot: any) {
  await bot.api.setMyCommands([
    {
      command: "start",
      description: `Добро пожаловать в наш бот 😊`,
    },
    {
      command: "location",
      description: `где мы находимся 🚩`,
    },
    {
      command: "shopping_pay",
      description: `наш сайт 🍱`,
    },
    {
      command: "search",
      description: `поиск 🔍`,
    },
  ]);
}
setCommands(bot);

bot.command("location", (ctx) => {
  ctx.api.sendLocation(ctx.chat.id, 41.560067458778754, 60.60795898367056);
});

bot.command("shopping_pay", (ctx) => {
  ctx.reply("наш сайт 🍱", {
    reply_markup: new Keyboard()
      .webApp("shopping-pay", "https://shopping-pay.netlify.app/")
      .resized(),
  });
});

bot.command("search", (ctx) => {
  ctx.reply("что ищите 🔍");
});

bot.command("start", async (ctx) => {
  ctx.reply("Добро пожаловать в наш бот с чем могу помочь 😃", {
    reply_markup: new Keyboard()
      .text("популярные товары")
      .text("категории")
      .resized(),
  });
  // await ctx.conversation.enter("greetingConvesation");
});

bot.on("message", async (ctx) => {
  // await ctx.replyWithPhoto(categories[0].image, {
  //   caption: categories[0].description,
  //   reply_markup: categoryMenu,
  // });
  await ctx.reply("category", {
    reply_markup: notificationMenu,
  });
});

bot.catch((error) => {
  console.log(error?.message);
});

bot.start({
  onStart(botInfo) {
    console.log("Bot has started!");
  },
});
