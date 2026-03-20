import { UpdateContactUseCase } from '../../application/useCases/contact/UpdateContactUseCase';

export function makeUpdateContactUseCase() {
  return new UpdateContactUseCase();
}
