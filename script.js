document.addEventListener("DOMContentLoaded", function() {
    const url = window.location.href;
    fetch(`https://wardriving.pl/licznikOdwiedzin.php?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
        const div = document.getElementById('widgetLicznikOdwiedzin');
        div.innerHTML = `
            <style>
                #widgetLicznikOdwiedzin {
                    font-family: Arial, sans-serif;
                    border: 3px solid black;
                    border-radius: 5px;
                    padding: 10px;
                    width: 200px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    text-align: center;
					background-color:rgb(0, 204, 255);;
                }

                #widgetLicznikOdwiedzin .footer {
                    font-size: 10px;
                    margin-top: 10px;
                }

                #widgetLicznikOdwiedzin a {
                    color: inherit;
                    text-decoration: underline;
                }
            </style>
            Liczba odwiedzin: ${data.odwiedziny}
            
            `;
    });
});