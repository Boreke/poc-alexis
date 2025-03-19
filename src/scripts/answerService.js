export async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
            "Access-Control-Allow-Origin": Location.origin
        },

        body: JSON.stringify(data)
    });
    return response.json();
}

export function showAnswer(answer) {
    const answerDiv = document.getElementById('answerDiv');
    answerDiv.innerHTML = answer;
    answerDiv.classList.remove('hidden');
}