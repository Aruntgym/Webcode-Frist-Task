async function search() {
    try {
        const nameInput = document.getElementById('nameInput').value;

        if (!nameInput) {
            alert('Please enter a name.');
            return;
        }

        const response = await fetch(`https://api.nationalize.io/?name[]=${nameInput}`);
        const data = await response.json();

        const resultBox = document.getElementById('resultBox');
        resultBox.innerHTML = '';

        if (data.length > 0) {
            data.forEach((result) => {
                const count = result.count;
                const name = result.name; 
                let demo = "";
                for(let i=0;i<data.length;i++){
                    if(data[i].name==="michael" || "Matthew" || "jane") {
        data[i].country.map((value)=>{
                demo+=`<p><span>country_id: ${value.country_id}</span></p>
                <p><span>probability: ${value.probability.toFixed(2)}%</span></p>`
        })
    }
                }
                

                const resultDiv = document.createElement('div');
                resultDiv.innerHTML = `
                <div class="card" style="width: 18rem;">
                <div class="container">
                <div class="info">
                <p><strong>Count:</strong> ${count}</p>
                <p><strong>Name:</strong> <span class="highlight">${name}</span></p>
                 ${demo}
                 </div>
                 </div>
                 </div>
                                      `;

                resultBox.appendChild(resultDiv);
            });
        } else {
            resultBox.innerHTML = '<p>No results found.</p>';
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
