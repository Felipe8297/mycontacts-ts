import {
  IController,
  IRequest,
  IResponse,
} from '../../../interfaces/IController';
import { CategoryNotFound } from '../../errors/CategoryNotFound';
import { UpdateCategoryUseCase } from '../../useCases/category/UpdateCategoryUseCase';

export class UpdateCategoryController implements IController {
  constructor(private readonly updateCategory: UpdateCategoryUseCase) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { id } = request.params;
      const { name } = request.body;

      if (!id) {
        return {
          statusCode: 400,
          body: { error: 'Category id is required' },
        };
      }

      if (!name) {
        return {
          statusCode: 400,
          body: { error: 'Category name is required' },
        };
      }

      const category = await this.updateCategory.execute({ id, name });

      return {
        statusCode: 200,
        body: {
          id: category.id,
          name: category.name,
          message: 'Category updated successfully',
        },
      };
    } catch (error) {
      if (error instanceof CategoryNotFound) {
        return {
          statusCode: 404,
          body: { error: 'Category not found' },
        };
      }
      throw error;
    }
  }
}
