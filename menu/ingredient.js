document.addEventListener('DOMContentLoaded', () => {
    const ingredientsButtons = document.querySelectorAll('.ingredientsButton');
    const modal = document.querySelector('.ingredientdetaile');
    const closeModal = document.querySelector('.closeingredient');

    ingredientsButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.add('active');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.classList.remove('active');
        }
    });
});
