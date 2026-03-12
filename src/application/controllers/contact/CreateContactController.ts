import { IController, IRequest, IResponse } from '../../../interfaces/IController';
import { CreateContactError } from '../../errors/CreateContactError';
import { CreateContactUseCase } from '../../useCases/contact/CreateContactUseCase';

export class CreateContactController implements IController {
  constructor(private readonly createContact: CreateContactUseCase) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { name, email, phone, category } = request.body;

      if (!name) {
        return {
          statusCode: 400,
          body: { error: 'Name is required' },
        };
      }

      if (!email) {
        return {
          statusCode: 400,
          body: { error: 'Email is required' },
        };
      }

      const contact = await this.createContact.execute({
        name,
        email,
        phone,
        category,
      });

      return {
        statusCode: 201,
        body: {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          category_id: contact.category_id,
          message: 'Contact created successfully',
        },
      };
    } catch (error) {
      if (error instanceof CreateContactError) {
        return {
          statusCode: 500,
          body: { error: 'Failed to create contact' },
        };
      }
      throw error;
    }
  }
}
