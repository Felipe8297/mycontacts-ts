import { IController, IRequest, IResponse } from '../../../interfaces/IController';
import { ContactNotFound } from '../../errors/ContactNotFound';
import { ListContactByIdUseCase } from '../../useCases/contact/ListContactByIdUseCase';
import { UpdateContactUseCase } from '../../useCases/contact/UpdateContactUseCase';

export class UpdateContactController implements IController {
  constructor(private readonly updateContact: UpdateContactUseCase, private readonly listContactById: ListContactByIdUseCase) {}
  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { id } = request.params;
      const { name, email, phone, category } = request.body;

      if(!id) {
        return{
          statusCode: 400,
          body: { error: 'Contact id is required' },
        };
      }

      if (!name) {
        return {
          statusCode: 400,
          body: { error: 'Name is required' },
        };
      }

      const contactExists = await this.listContactById.execute({ id });

      if(!contactExists) {
        return{
          statusCode: 404,
          body: { error: 'Contact not found' },
        };
      }
      
      const { contact } = await this.updateContact.execute({ id, name, email, phone, category });

      return {
        statusCode: 200,
        body: {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          category: contact.category,
          message: 'Contact updated successfully',
        },
      };
      
    } catch (error) {
      if(error instanceof ContactNotFound) {
        return{
          statusCode: 404,
          body: { error: 'Contact not found' },
        };
      }
      throw error;
    }
  }
}
