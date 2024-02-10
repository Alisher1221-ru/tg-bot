import { Menu } from "@grammyjs/menu";
import { MyContext } from "../types/context.type";

export const notificationMenu = new Menu<MyContext>("toggle")
	.text(
		(ctx) => (ctx.session.notification ? "🔔" : "🔕"),
		(ctx) => {
			ctx.session.notification = !ctx.session.notification;
			ctx.menu.update(); // update the menu!
		}
	)
	.text("❌", async (ctx) => {
		await ctx.deleteMessage();
	});
