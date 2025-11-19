import { PrismaService } from './prisma.service';
import { Global, Module } from '@nestjs/common';

const prismaInstance = new PrismaService();

@Global()
@Module({
  providers: [{ provide: PrismaService, useValue: prismaInstance }],
  exports: [PrismaService],
})
export class PrismaModule {}
