
const url = 'https://otokariev.pythonanywhere.com/api/about/'; // Замените на ваш URL



function Footer() {
  fetch(url, {
    method: 'GET',
    headers: {
      // Добавьте заголовки, если необходимо
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Распарсить ответ в формате JSON (или response.text() для текста)
    })
    .then(data => {
      console.log('Success:', data.results[0].text
      );
    })
    .catch(error => {
      console.error('Error:', error);
    });
  return (
    <footer>
      все права защищены 2023
    </footer>
  )
}

export default Footer