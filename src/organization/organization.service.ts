import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OrganizationService {
  constructor(private prismaService: PrismaService) {}

  async addTestOrg() {
    const org = await this.prismaService.organization.create({ data: {} });
    return org;
  }
}
