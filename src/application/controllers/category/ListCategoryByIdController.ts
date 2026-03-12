import { IController, IRequest, IResponse } from '../../../interfaces/IController';
import { CategoryNotFound } from '../../errors/CategoryNotFound';
import { ListCategoryByIdUseCase } from '../../useCases/category/ListCategoryByIdUseCase';

export class ListCategoryByIdController implements IController {
  constructor(private readonly listCategoryById: ListCategoryByIdUseCase) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { id } = request.params;

      if (!id) {
        return {
          statusCode: 400,
          body: { error: 'Category id is required' },
        };
      }
      const { category } = await this.listCategoryById.execute({ id });

      return {
        statusCode: 200,
        body: {
          id: category.id,
          name: category.name,
        },
      };
    } catch (error) {
      if (error instanceof CategoryNotFound) {
        return {
          statusCode: 404,
          body: {
            error: 'Category not found',
          },
        };
      }
      throw error;
    }
  }
}
