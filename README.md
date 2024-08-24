# Brakbricks BricksetAPI for NestJS

A module wrapping @brakbricks/brickset-api for NestJS.

## Usage

### Installing

`npm i @brakbricks/nest-brickset-api`

### Usage

Register the module.

```
import { Module } from '@nestjs/common';
import { BricksetApiModule } from '@brakbricks/nest-brickset-api';

@Module({
  imports: [
    BricksetApiModule.register({ apiKey: 'your-secret-api-key' }),
  ]
})
export class AppModule {}
```

inject `BricksetApiClient` into any service

```
import { BricksetApiClient } from '@brakbricks/brickset-api';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private readonly bricksetApi: BricksetApiClient,
  ) {}
}
```

### async register function?

Soon

## Documentation

See https://brakbricks.github.io/nest-brickset-api/

## Report bugs

https://github.com/brakbricks/nest-brickset-api/issues
