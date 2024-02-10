import { session } from "grammy";
import { SessionData } from "../types/interfaces/session.interface";

function initial(): SessionData {
	return {
		currentCategoryId: 0,
	};
}

export function sessionMiddleware<MyContext>() {
	return session({
		initial,
	});
}
