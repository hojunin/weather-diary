import { router } from "../trpc";
import { weatherRouter } from "./weather";
import { diaryRouter } from "./diary";

export const appRouter = router({
  weather: weatherRouter,
  diary: diaryRouter,
});

export type AppRouter = typeof appRouter;
