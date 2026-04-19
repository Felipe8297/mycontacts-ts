import { IContactRepository } from '../../../interfaces/IContactRepository';
import { ContactNotFound } from '../../errors/ContactNotFound';

interface IDeleteContactInput {
	id: string;
}

interface IOutput {
	id: string;
	name: string;
	email: string;
	phone: string;
}

export class DeleteContactUseCase {
	constructor(private readonly contactRepository: IContactRepository) {}

	async execute(input: IDeleteContactInput): Promise<IOutput> {
		const contact = await this.contactRepository.delete(input.id);
		if (!contact) {
			throw new ContactNotFound();
		}

		return {
			id: contact.id,
			name: contact.name,
			email: contact.email,
			phone: contact.phone ?? '',
		};
	}
}
