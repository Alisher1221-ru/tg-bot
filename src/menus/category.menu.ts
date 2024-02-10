import { Menu, MenuRange } from "@grammyjs/menu";
import { MyContext } from "../types/context.type";
import { categories } from "../data/category.data";
import { InputMediaBuilder } from "grammy";

export const categoryMenu = new Menu<MyContext>("category-menu").dynamic(
	(ctx) => {
		const range = new MenuRange<MyContext>();

		const category = categories[ctx.session.currentCategoryId];

		range.submenu(category.name, "product-menu");
		range.row();
		range.text(
			(ctx) => (ctx.session.currentCategoryId === 0 ? " " : "<"),
			async (ctx) => {
				if (ctx.session.currentCategoryId !== 0) {
					ctx.session.currentCategoryId--;

					const category = categories[ctx.session.currentCategoryId];

					const messagePhoto = InputMediaBuilder.photo(
						category.image
					);

					await ctx.editMessageMedia(messagePhoto);
					await ctx.editMessageCaption({
						caption: category.description,
					});

					ctx.menu.update();
				}
			}
		);
		range.text(
			(ctx) =>
				`${ctx.session.currentCategoryId + 1} / ${categories.length}`
		);
		range.text(
			(ctx) =>
				ctx.session.currentCategoryId === categories.length - 1
					? " "
					: ">",
			async (ctx) => {
				if (ctx.session.currentCategoryId !== categories.length - 1) {
					ctx.session.currentCategoryId++;

					const category = categories[ctx.session.currentCategoryId];

					const messagePhoto = InputMediaBuilder.photo(
						category.image
					);

					await ctx.editMessageMedia(messagePhoto);
					await ctx.editMessageCaption({
						caption: category.description,
					});

					ctx.menu.update();
				}
			}
		);

		return range;
	}
);
