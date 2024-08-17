import { DynamicModule, Module } from '@nestjs/common';
import { BricksetApiClient } from '@brakbricks/brickset-api';

@Module({})
export class BricksetApiModule {
  public static register({ apiKey }: { apiKey: string }): DynamicModule {
    return {
      module: BricksetApiModule,
      providers: [
        {
          provide: BricksetApiClient,
          useValue: new BricksetApiClient(apiKey)
        }
      ],
      exports: [BricksetApiClient]
    }
  }
}
