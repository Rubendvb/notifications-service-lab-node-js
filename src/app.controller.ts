import { PrismaService } from './prisma.service';
import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Você tem uma nova amizade',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
