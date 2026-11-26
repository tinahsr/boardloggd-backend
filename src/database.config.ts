import { TypeOrmModule } from '@nestjs/typeorm';
// @ts-ignore
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

export const typeOrmEntities: EntityClassOrSchema[] = [];

export const databaseConfig = () =>
  TypeOrmModule.forRoot({
    // @ts-ignore
    type: process.env.DATABASE_TYPE || undefined,
    host: process.env.DATABASE_HOST || undefined,
    port: Number(process.env.DATABASE_PORT) || undefined,
    username: process.env.DATABASE_USERNAME || undefined,
    password: process.env.DATABASE_PASSWORD || undefined,
    database: process.env.DATABASE_DATABASENAME || undefined,
    entities: typeOrmEntities,
    // @ts-ignore
    synchronize: JSON.parse(process.env.DATABASE_SYNCHRONIZE) || false,
  });

export const databaseConfigForFeature = () =>
  TypeOrmModule.forFeature(typeOrmEntities);
