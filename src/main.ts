import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT: number = 8000;
  await app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);
  });
}
bootstrap();
