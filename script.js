const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.body.innerHTML = `

    <div class="loading">

        <h2>Loading your surprise... ❤️</h2>

        <div class="bar">

            <div class="progress" id="progress"></div>

        </div>

        <p id="percent">0%</p>

    </div>

    `;

    let width = 0;

    let interval = setInterval(() => {

        width++;

        document.getElementById("progress").style.width = width + "%";

        document.getElementById("percent").innerHTML = width + "%";

        if(width >= 100){

            clearInterval(interval);

            window.location.href="code.html";

        }

    },25);

});