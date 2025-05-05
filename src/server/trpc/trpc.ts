import { initTRPC } from "@trpc/server";
import { prisma } from "../db";

// tRPC 컨텍스트 타입 정의
export const createTRPCContext = () => {
  return {
    prisma,
  };
};

export type TRPCContext = ReturnType<typeof createTRPCContext>;

const t = initTRPC.context<TRPCContext>().create();

export const router = t.router;
export const procedure = t.procedure;
