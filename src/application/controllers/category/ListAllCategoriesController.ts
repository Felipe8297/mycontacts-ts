import { IController, IResponse } from '../../../interfaces/IController';
import { CategoriesNotFound } from '../../errors/CategoriesNotFound';
import { ListAllCategoriesUseCase } from '../../useCases/category/ListAllCategoriesUseCase';

export class ListAllCategoriesController implements IController {
  constructor(private readonly listAllCategories: ListAllCategoriesUseCase) {}

  async handle(): Promise<IResponse> {
    try {
      const { categories } = await this.listAllCategories.execute();

      return {
        statusCode: 200,
        body: {
          categories,
        },
      };
    } catch (error) {
      if (error instanceof CategoriesNotFound) {
        return {
          statusCode: 500,
          body: {
            error: 'Error fetching categories',
          },
        };
      }
      throw error;
    }
  }
}
