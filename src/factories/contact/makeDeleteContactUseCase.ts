import { DeleteContactUseCase } from '../../application/useCases/contact/DeleteContactUseCase';

export function makeDeleteContactUseCase() {
  return new DeleteContactUseCase();
}
