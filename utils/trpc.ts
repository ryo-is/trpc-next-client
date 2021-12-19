import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '@ryo-is/trpc-node-server/dist/router';

export const trpc = createReactQueryHooks<AppRouter>();
