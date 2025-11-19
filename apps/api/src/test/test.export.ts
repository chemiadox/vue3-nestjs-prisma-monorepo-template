import { TestController } from './test.controller';

export type TestUsers = Awaited<ReturnType<TestController['users']>>;
