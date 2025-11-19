import { TestModule } from './test/test.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import path from 'path';
import { LoggerModule } from '@shared/logger/logger.module';
import { PrismaModule } from '@shared/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: path.resolve(process.cwd(), '.env') }),
    PrismaModule,
    LoggerModule,
    TestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
