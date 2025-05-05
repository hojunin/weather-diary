"use client";

import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/server/trpc/router";

export const api = createTRPCReact<AppRouter>();

export { type RouterInputs, type RouterOutputs } from "@/generated/trpc-types";
