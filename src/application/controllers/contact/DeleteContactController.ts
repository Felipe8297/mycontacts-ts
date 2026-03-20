import { IController, IRequest, IResponse } from '../../../interfaces/IController';
import { ContactNotFound } from '../../errors/ContactNotFound';
import { DeleteContactUseCase } from '../../useCases/contact/DeleteContactUseCase';
import { ListContactByIdUseCase } from '../../useCases/contact/ListContactByIdUseCase';

export class DeleteContactController implements IController {
  constructor(private readonly deleteContact: DeleteContactUseCase, private readonly listContactById: ListContactByIdUseCase) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { id } = request.params;

      if(!id) {
        return {
          statusCode: 400,
          body: { error: 'Contact id is required' },
        };
      }

      const contactExists = await this.listContactById.execute({ id });

      if(!contactExists) {
        return {
          statusCode: 404,
          body: { error: 'Contact not found' },
        };
      }

      const deletedContact = await this.deleteContact.execute({ id });

      if(!deletedContact) {
        return {
          statusCode: 500,
          body: { error: 'Failed to delete contact' },
        };
      }

      return {
        statusCode: 200,
        body: {
          id: deletedContact.id,
          name: deletedContact.name,
          email: deletedContact.email,
          phone: deletedContact.phone,
          message: 'Contact deleted successfully',
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
