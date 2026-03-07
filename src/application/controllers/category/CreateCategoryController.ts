import { IController, IRequest, IResponse } from '../../../interfaces/IController';
import { CreateCategoryError } from '../../errors/CreateCategoryError';
import { CreateCategoryUseCase } from '../../useCases/CreateCategoryUseCase';

export class CreateCategoryController implements IController {
  constructor(private readonly createCategory: CreateCategoryUseCase) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { name } = request.body;

      if (!name) {
        return {
          statusCode: 400,
          body: {
            error: 'Name is required',
          },
        };
      }

      const category = await this.createCategory.execute({ name });

      return {
        statusCode: 201,
        body: {
          id: category.id,
          name: category.name,
          message: 'Category created successfully',
        },
      };
    } catch (error) {
      if (error instanceof CreateCategoryError) {
        return {
          statusCode: 500,
          body: {
            error: 'Failed to create category',
          },
        };
      }
     throw error;
    }
  }
}
