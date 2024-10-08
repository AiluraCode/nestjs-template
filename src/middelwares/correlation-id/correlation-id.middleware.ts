import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { NextFunction, Response, Request } from 'express';

export const CORRELATION_ID_HEADER = 'x-Correlation-Id';

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const id = randomUUID();
    req[CORRELATION_ID_HEADER] = id;
    res.setHeader('CORRELATION_ID_HEADER', id);
    next();
  }
}
