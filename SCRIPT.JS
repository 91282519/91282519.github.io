document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('attendanceForm');
  const fullNameInput = document.getElementById('fullName');
  const dateInput = document.getElementById('date');
  const subjectInput = document.getElementById('subject');
  const clearBtn = document.getElementById('clearBtn');
  const tableBody = document.querySelector('#attendanceTable tbody');

  // Función para limpiar el formulario
  function clearForm() {
    fullNameInput.value = '';
    dateInput.value = '';
    subjectInput.value = '';
  }

  // Función para crear una fila en la tabla
  function addRow(fullName, date, subject) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${fullName}</td>
      <td>${date}</td>
      <td>${subject}</td>
      <td><button class="action-btn">Eliminar</button></td>
    `;

    // Añadir evento para eliminar la fila
    tr.querySelector('button').addEventListener('click', () => {
      tableBody.removeChild(tr);
    });

    tableBody.appendChild(tr);
  }

  // Evento submit para guardar la asistencia
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = fullNameInput.value.trim();
    const date = dateInput.value;
    const subject = subjectInput.value.trim();

    if (!fullName || !date || !subject) {
      alert('Por favor completa todos los campos.');
      return;
    }

    addRow(fullName, date, subject);
    clearForm();
  });

  // Evento para limpiar el formulario
  clearBtn.addEventListener('click', clearForm);
});
