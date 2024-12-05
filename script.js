const checkbox = document.getElementById('checkbox')
const button = document.getElementById('btn')

button.addEventListener('click', () => {
  checkbox.checked = !checkbox.checked
})