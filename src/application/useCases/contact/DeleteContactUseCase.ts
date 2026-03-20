import { prismaClient } from '../../../libs/prismaClient';
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
	async execute(input: IDeleteContactInput): Promise<IOutput> {
		const contact = await prismaClient.contact.delete({
			where: {
				id: input.id,
			},
			select: {
				id: true,
				name: true,
				email: true,
				phone: true,
			},
		});
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
