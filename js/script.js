// Menu hambúrguer responsivo

const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("nav__list--open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// FAQ – acordeon

const faqItems = document.querySelectorAll(".faq__item");

if (faqItems.length > 0) {
  faqItems.forEach((item) => {
    const button = item.querySelector(".faq__question");
    const answer = item.querySelector(".faq__answer");

    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      // Alterna o estado atual do item

      button.setAttribute("aria-expanded", isExpanded ? "false" : "true");
      answer.hidden = isExpanded;
      item.classList.toggle("faq__item--open", !isExpanded);
    });
  });
}


// Formulário de contato – feedback básico

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const feedbackEl = contactForm.querySelector(".form__feedback");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // evita recarregar a página

    // Campos principais
    const nome = contactForm.querySelector("#nome");
    const email = contactForm.querySelector("#email");
    const assunto = contactForm.querySelector("#assunto");
    const mensagem = contactForm.querySelector("#mensagem");
    const aceite = contactForm.querySelector('input[name="aceite"]');

    // Reset da mensagem
    if (feedbackEl) {
      feedbackEl.textContent = "";
      feedbackEl.style.color = "";
    }

    // Validação simples de campos obrigatórios
    if (
      !nome.value.trim() ||
      !email.value.trim() ||
      !assunto.value ||
      !mensagem.value.trim() ||
      !aceite.checked
    ) {
      if (feedbackEl) {
        feedbackEl.textContent =
          "Por favor, preencha todos os campos obrigatórios e confirme que está ciente do caráter acadêmico do projeto.";
        feedbackEl.style.color = "#c92a2a"; 
      }
      return;
    }

    // Simulação de envio bem-sucedido

    if (feedbackEl) {
      feedbackEl.textContent =
        "Mensagem enviada com sucesso! Obrigado por entrar em contato com a equipe do Próximo Passo.";
      feedbackEl.style.color = "#2b8a3e";
    }

    // Limpa o formulário após o "envio"
    contactForm.reset();
  });
}

// Formulário de pré-cadastro – feedback básico

const signupForm = document.querySelector("#signup-form");

if (signupForm) {
  const feedbackEl = signupForm.querySelector(".form__feedback");

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = signupForm.querySelector("#cad-nome");
    const email = signupForm.querySelector("#cad-email");
    const areaInteresse = signupForm.querySelector("#cad-area-interesse");
    const objetivo = signupForm.querySelector("#cad-objetivo");
    const nivelExperiencia = signupForm.querySelector("#cad-nivel-experiencia");
    const aceite = signupForm.querySelector('input[name="aceite"]');

    if (feedbackEl) {
      feedbackEl.textContent = "";
      feedbackEl.style.color = "";
    }

    if (
      !nome.value.trim() ||
      !email.value.trim() ||
      !areaInteresse.value ||
      !objetivo.value.trim() ||
      !nivelExperiencia.value ||
      !aceite.checked
    ) {
      if (feedbackEl) {
        feedbackEl.textContent =
          "Por favor, preencha todos os campos obrigatórios e confirme que está ciente de que este pré-cadastro é uma simulação.";
        feedbackEl.style.color = "#c92a2a";
      }
      return;
    }

    if (feedbackEl) {
      feedbackEl.textContent =
        "Pré-cadastro enviado com sucesso! Esta simulação representa como a plataforma poderia receber seus dados para sugerir vagas e roadmap.";
      feedbackEl.style.color = "#2b8a3e";
    }

    signupForm.reset();
  });
}
