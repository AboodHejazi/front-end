const handleSubmit = async (event) => {
    event.preventDefault();
    const url = document.getElementById('url').value;

    if (!isValidUrl(url)) {
        alert('Please enter a valid URL!');
        return;
    }

    const response = await fetch('http://localhost:8081/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
    });

    const data = await response.json();
    updateUI(data);
};

const isValidUrl = (url) => {
    const regex = /^(http|https):\/\/[^ "]+$/;
    return regex.test(url);
};

const updateUI = (data) => {
    document.getElementById('results').innerHTML = `
        <p><strong>Polarity:</strong> ${data.polarity}</p>
        <p><strong>Subjectivity:</strong> ${data.subjectivity}</p>
        <p><strong>Text:</strong> ${data.text}</p>
    `;
};

export { handleSubmit };
