<script>
    // Función para mostrar la sección seleccionada y ocultar las demás
    function showContent(id) {
        // Ocultar todas las secciones
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.classList.remove('active'));
        
        // Mostrar la sección activa
        const activeSection = document.getElementById(id);
        activeSection.classList.add('active');
    }

    // Función para abrir WhatsApp con un mensaje personalizado
    function handleWhatsappContact(topic) {
        const phoneNumber = '1234567890'; // Número de teléfono de WhatsApp
        const message = `¡Hola! Quiero más información sobre ${topic}.`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank'); // Abre la ventana de WhatsApp
    }

    // Función para permitir desplazarse a una sección cuando se hace clic en un botón
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Función para cambiar la clase de la sección activa (para mostrarla)
    document.addEventListener('DOMContentLoaded', () => {
        // Por defecto, mostrar la primera sección (hospital-info)
        showContent('hospital-info');
    });

    // Agregar un evento a los botones de cada sección para cambiar la sección activa
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            // Obtén el id de la sección que se debe mostrar
            const sectionId = this.getAttribute('data-section');
            showContent(sectionId);
        });
    });

</script>
    // Script para el botón de WhatsApp que se activa con un clic en cualquier sección
    document.querySelectorAll('.whatsapp-button').forEach(button => {
        button.addEventListener('click', function() {
            // Usamos el texto de la sección para enviar un mensaje personalizado por WhatsApp
            const sectionTitle = this.closest('.section').querySelector('h2').innerText;
            handleWhatsappContact(sectionTitle);
        });
    });

</script>
