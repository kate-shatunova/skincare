import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApplication(): string {
    return 'SkinCare - лучший помощник в поиске идеального ухода!';
  }
}
