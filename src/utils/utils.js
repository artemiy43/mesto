export function isLoading(form, flag) {                                       //функция для улучшения UX
  const button = form.querySelector('.popup__save-button');            // находим необходимую кнопку на форме
  if (flag===true)                                                     // в зависимости от флага, меняем её текст
    button.textContent = 'Сохранение...';
  else
    button.textContent = 'Сохранено';
}
