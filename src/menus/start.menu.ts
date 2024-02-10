import { Menu } from "@grammyjs/menu";
import { MyContext } from "../types/context.type";

export const startMenu = new Menu<MyContext>("start")
	.text("^", (ctx) => ctx.reply("Forward!"))
	.row()
	.text("<", (ctx) => ctx.reply("Left!"))
	.text(">", (ctx) => ctx.reply("Right!"))
	.row()
	.text("v", (ctx) => ctx.reply("Backwards!"));
