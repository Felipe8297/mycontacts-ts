import { IController, IResponse } from '../../../interfaces/IController';
import { ContactsNotFound } from '../../errors/ContactsNotFound';
import { ListAllContactsUseCase } from '../../useCases/ListAllContactsUseCase';

export class ListAllContactsController implements IController {
  constructor(private readonly listAllContacts: ListAllContactsUseCase) {}

  async handle(): Promise<IResponse> {
    try {
      const { contacts } = await this.listAllContacts.execute();

      return {
        statusCode: 200,
        body: {
          contacts, 
        },
      };
    } catch (error) {
      if (error instanceof ContactsNotFound) {
        return {
          statusCode: 404,
          body: {
            message: 'Contacts not found',
          },
        };
      }
      throw error;
    }
  }
}
