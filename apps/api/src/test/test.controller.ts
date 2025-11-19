import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TestUser } from '@common/test-user';
import { formatDate } from '@utils/date';
import { LoggerService } from '@shared/logger/logger.service';
import { PrismaService } from '@shared/prisma/prisma.service';

@Controller()
export class TestController {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('test')
  async testEndpoint() {
    const createdAt = formatDate(new Date());

    const user: TestUser = {
      id: 'id',
      email: 'name',
      createdAt,
    };

    this.loggerService.log('Hello World');
    this.loggerService.log(this.configService.get('TEST_VARIABLE') ?? 'not found');

    return user;
  }

  @Get('users')
  async users() {
    return this.prisma.user.findMany({
      include: { wallet: true },
    });
  }
}
