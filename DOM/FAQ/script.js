const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
    question.addEventListener('click', function() {

        this.classList.toggle('active');

        const answer = this.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});