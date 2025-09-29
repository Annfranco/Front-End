
// Utility Functions
function showPage(pageId) {
  // Hide all containers
  document.querySelectorAll('.container').forEach(container => {
    container.style.display = 'none';
  });
  // Show the selected container
  document.getElementById(pageId).style.display = 'block';
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);
  
  document.getElementById('lengthCheck').classList.toggle('valid', hasLength);
  document.getElementById('upperCheck').classList.toggle('valid', hasUpper);
  document.getElementById('numberCheck').classList.toggle('valid', hasNumber);
  document.getElementById('specialCheck').classList.toggle('valid', hasSpecial);
  
  return hasLength && hasUpper && hasNumber && hasSpecial;
}

// Event Listeners
document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('recoveryEmail').value;
  const errorElement = document.getElementById('recoveryEmailError');
  const successElement = document.getElementById('recoverySuccess');
  
  if (!validateEmail(email)) {
    errorElement.style.display = 'block';
    successElement.style.display = 'none';
    return;
  }
  
  errorElement.style.display = 'none';
  successElement.style.display = 'block';
  
  setTimeout(() => {
    showPage('loginPage');
  }, 2000);
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  let hasError = false;
  
  if (name.length < 3) {
    document.getElementById('nameError').style.display = 'block';
    hasError = true;
  } else {
    document.getElementById('nameError').style.display = 'none';
  }
  
  if (!validateEmail(email)) {
    document.getElementById('emailError').style.display = 'block';
    hasError = true;
  } else {
    document.getElementById('emailError').style.display = 'none';
  }
  
  if (!validatePassword(password)) {
    hasError = true;
  }
  
  if (password !== confirmPassword) {
    document.getElementById('passwordError').style.display = 'block';
    hasError = true;
  } else {
    document.getElementById('passwordError').style.display = 'none';
  }
  
  if (!hasError) {
    document.getElementById('registerSuccess').style.display = 'block';
    setTimeout(() => {
      showPage('loginPage');
    }, 2000);
  }
});

document.getElementById('password').addEventListener('input', function(e) {
  validatePassword(e.target.value);
});

// Initial page load
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('page');
  
  if (page === 'forgot') {
    showPage('forgotPasswordPage');
  } else if (page === 'register') {
    showPage('registerPage');
  } else {
    showPage('loginPage');
  }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  showPage('homePage');  
});

document.addEventListener('DOMContentLoaded', function () {
  const inputPesquisa = document.getElementById('pesquisa');
  if (inputPesquisa) {
    inputPesquisa.addEventListener('keyup', function () {
      const termo = this.value.toLowerCase();
      const linhas = document.querySelectorAll('#tabela tbody tr');

      linhas.forEach(linha => {
        const textoLinha = linha.innerText.toLowerCase();
        linha.style.display = textoLinha.includes(termo) ? '' : 'none';
      });
    });
  }
});

let veiculos = [];

document.getElementById('homeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const marca = document.getElementById('marca').value.trim();
  const modelo = document.getElementById('modelo').value.trim();
  const ano = document.getElementById('ano-veiculo').value.trim();

  if (!marca || !modelo || !ano) {
    return;
  }

  if (editIndex === null) {
    veiculos.push({ marca, modelo, ano });
  } else {
    veiculos[editIndex] = { marca, modelo, ano };
    editIndex = null;
    document.getElementById('submitBtn').textContent = "Cadastrar Veículo"; 
  }

  atualizarTabela();

  document.getElementById('marca').value = '';
  document.getElementById('modelo').value = '';
  document.getElementById('ano-veiculo').value = '';
});

function atualizarTabela() {
  const tbody = document.querySelector('#tabela tbody');
  tbody.innerHTML = '';
  veiculos.forEach((veiculo, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${veiculo.marca}</td>
      <td>${veiculo.modelo}</td>
      <td>${veiculo.ano}</td>
      <td>
        <button type="button" class="btn-acao editar" onclick="editarVeiculo(${index})">Editar</button>
        <button type="button" class="btn-acao excluir" onclick="deletarVeiculo(${index})">Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

let editIndex = null; 

function editarVeiculo(index) {
  const veiculo = veiculos[index];
  document.getElementById('marca').value = veiculo.marca;
  document.getElementById('modelo').value = veiculo.modelo;
  document.getElementById('ano-veiculo').value = veiculo.ano;

  editIndex = index;
  document.getElementById('submitBtn').textContent = "Atualizar Veículo"; 

  showPage('homePage');
}

function deletarVeiculo(index) {
  if (confirm("Tem certeza que deseja excluir este veículo?")) {
    veiculos.splice(index, 1); 
    atualizarTabela();
  }
}





