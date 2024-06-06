function copy() {
    navigator.clipboard.writeText('vanderson.alex.cani@gmail.com')
        .then(() => {
            console.log('Email copiado para área de transferência.');
            alert('Email copiado para área de transferência.');
        })
        .catch((error) => {
            console.error('Falha ao copiar email para a área de transferência.', error);
            alert('Falha ao copiar email para a área de transferência.');

        })
};