import { ConfirmBoxModule } from './confirm-box.module';

describe('ConfirmBoxModule', () => {
  let confirmBoxModule: ConfirmBoxModule;

  beforeEach(() => {
    confirmBoxModule = new ConfirmBoxModule();
  });

  it('should create an instance', () => {
    expect(confirmBoxModule).toBeTruthy();
  });
});
