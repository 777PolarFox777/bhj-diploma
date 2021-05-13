/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      App.setState('user-logged');
      this.element.reset();
      const modal = App.getModal('register');
      modal.close()
    });
  }
}
