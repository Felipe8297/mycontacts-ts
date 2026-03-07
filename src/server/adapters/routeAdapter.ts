import { Context } from 'hono';
import { IController } from '../../interfaces/IController';

export function routeAdapter(controller: IController) {
  return async (c: Context) => {
    let requestBody: Record<string, any> = {};
    try {
      requestBody = (await c.req.json()) as Record<string, any>;
    } catch {
      // do nothing
    }

    const { statusCode, body } = await controller.handle({
      body: requestBody,
      params: c.req.param() as Record<string, string>,
    });

    return c.json(body, statusCode as 200 | 201 | 400 | 404 | 500);
  };
}
