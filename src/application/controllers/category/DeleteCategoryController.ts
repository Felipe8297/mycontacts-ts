import { IController, IRequest, IResponse } from '../../../interfaces/IController';
import { CategoryNotFound } from '../../errors/CategoryNotFound';
import { DeleteCategoryUseCase } from '../../useCases/DeleteCategoryUseCase';
import { ListCategoryByIdUseCase } from '../../useCases/ListCategoryByIdUseCase';

export class DeleteCategoryController implements IController {
  constructor(private readonly deleteCategory: DeleteCategoryUseCase, private readonly listCategoryById: ListCategoryByIdUseCase) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { id } = request.params;
      
      if (!id) {
        return {
          statusCode: 400,
          body: { error: 'Category id is required' },
        };
      }
      const categoryExists = await this.listCategoryById.execute({ id });

      if (!categoryExists) {
        return {
          statusCode: 404,
          body: { error: 'Category not found' },
        };
      }

      const deletedCategory = await this.deleteCategory.execute({ id });

      if (!deletedCategory) {
        return {
          statusCode: 500,
          body: { error: 'Failed to delete category' },
        };
      }

      return {
        statusCode: 200,
        body: {
          id: deletedCategory.id,
          name: deletedCategory.name,
          message: 'Category deleted successfully',
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
