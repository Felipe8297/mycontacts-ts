import { IController, IRequest, IResponse } from '../../../interfaces/IController';
import { ContactNotFound } from '../../errors/ContactNotFound';
import { ListContactByIdUseCase } from '../../useCases/contact/ListContactByIdUseCase';

export class ListContactByIdController implements IController {
  constructor(private readonly listContactById: ListContactByIdUseCase){}

  async handle(request: IRequest): Promise<IResponse>{
    try {
      const { id } = request.params;

      if(!id) {
        return {
          statusCode: 400,
          body: { error: 'Contact id is required' },
        };
      }

      const { id: contactId, name, email, phone, category } = await this.listContactById.execute({ id });

      return {
        statusCode: 200,
        body: {
          id: contactId,
          name,
          email,
          phone,
          category,
        },
      };
    } catch (error) {
      if (error instanceof ContactNotFound) {
        return {
          statusCode: 404,
          body: { error: 'Contact not found' },
        };
      }
      throw error;
    }
  }
}
