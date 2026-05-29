document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animação de Contagem Progressiva (Números que crescem)
    const numeros = document.querySelectorAll('.numero');
    const velocidadeContagem = 200; // Quanto menor, mais rápido

    const iniciarContagem = (elemento) => {
        const atualizarContagem = () => {
            const alvo = +elemento.getAttribute('data-alvo');
            const atual = +elemento.innerText;
            const incremento = alvo / velocidadeContagem;

            if (atual < alvo) {
                elemento.innerText = Math.ceil(atual + incremento);
                setTimeout(atualizarContagem, 1);
            } else {
                elemento.innerText = alvo;
            }
        };
        atualizarContagem();
    };

    // Observador para disparar os números apenas quando aparecerem na tela
    const observerOptions = {
        threshold: 0.5
    };

    const contadorObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                iniciarContagem(entry.target);
                observer.unobserve(entry.target); // Roda a animação apenas uma vez
            }
        });
    }, observerOptions);

    numeros.forEach(num => contadorObserver.observe(num));


    // 2. Manipulação do Formulário de Contato
    const form = document.getElementById('form-contato');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede a página de recarregar
        
        // Simulação de envio bem-sucedido
        const nome = document.getElementById('nome').value;
        
        alert(`Obrigado pelo contato, ${nome}! Juntos, cultivaremos um futuro mais forte e verde. Sua mensagem foi simulada com sucesso.`);
        
        form.reset(); // Limpa os campos
    });

    // 3. Menu Mobile Simples
    const mobileMenu = document.getElementById('mobile-menu');
    const navUl = document.querySelector('nav ul');

    mobileMenu.addEventListener('click', () => {
        // Altera o estado do menu para telas menores de forma prática
        if(navUl.style.display === 'flex') {
            navUl.style.display = 'none';
        } else {
            navUl.style.display = 'flex';
            navUl.style.flexDirection = 'column';
            navUl.style.position = 'absolute';
            navUl.style.top = '70px';
            navUl.style.left = '0';
            navUl.style.width = '100%';
            navUl.style.backgroundColor = '#ffffff';
            navUl.style.padding = '20px';
            navUl.style.boxShadow = '0 10px 10px rgba(0,0,0,0.05)';
        }
    });
});
