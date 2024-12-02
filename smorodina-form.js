const submitForm = () => {
    const form = document.getElementById('smorodinaForm');
    const formData = {};
  
    //Итерация по элементам формы
    for (const element of form.elements) {
      if (element.name) { // Пропускаем элементы без имени
        formData[element.name] = element.value;
      }
    }
  
  
    //Выводим данные в div с id="output"
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Очищаем div перед выводом новых данных
  
    for (const key in formData) {  
      outputDiv.innerHTML += `<p>${formData[key]}</p>`;
    }
    output.classList.add('active');
  }



