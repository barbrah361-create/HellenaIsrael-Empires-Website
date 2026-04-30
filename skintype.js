document.getElementById('whatsappSubmit').addEventListener('click', function() {
   
    const phoneNumber = "+254717263203"; 
   
    const skinType = document.getElementById('skinType').value;
    const skinProblem = document.getElementById('skinProblem').value;

   
    const message = `Hello Hellenaisrael Authentic Cosmetic Empire!%0A%0AI would like a consultation for my skin.%0A%0A` + 
                    `*Skin Type:* ${skinType}%0A` + 
                    `*Skin Problem:* ${skinProblem}%0A%0A` + 
                    `Please advise on the best cosmetic products for me.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
});