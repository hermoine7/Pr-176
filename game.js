
let words = [
    {
        "inputs": 6,
        "category": "Indian City know as the Pink City",
        "word": "Jaipur"
    },
    {
        "inputs": 9,
        "category": "Indian City know as the Boston of India",
        "word": "Ahmedabad"
    },
    {
        "inputs": 5,
        "category": "Indian City know as the Diamond city of India",
        "word": "Surat"
    },
    {
        "inputs": 7,
        "category": "Indian City know as The City of Nawabs",
        "word": "Lucknow"
    },
    {
        "inputs": 6,
        "category": "Indian City know as the Leather City of the World",
        "word": "Kanpur"
    },
    {
        "inputs": 6,
        "category": "Indian City know as the Gateway of India",
        "word": "Mumbai"
    },
    {
        "inputs": 6,
        "category": "Indian City know as the Wine Capital of India",
        "word": "Nashik"
    },
    {
        "inputs": 9,
        "category": "Indian City know as the Garden city of India",
        "word": "Bangalore"
    },
    {
        "inputs": 9,
        "category": "Indian City know as the Silicon Valley of India",
        "word": "Bangalore"
    },
    {
        "inputs": 5,
        "category": "Indian City know as the Scotland of India",
        "word": "Coorg"
    },
    {
        "inputs": 6,
        "category": "Indian City know as the Sandalwood city",
        "word": "Mysore"
    },
    {
        "inputs": 9,
        "category": "Indian City know as the City of Pearls",
        "word": "Hyderabad"
    },
    {
        "inputs": 7,
        "category": "Indian City know as The City of Festivals or Athens of the East",
        "word": "Madurai"
    },
    {
        "inputs": 7,
        "category": "Indian City know as the Detroit of Asia",
        "word": "Chennai"
    },
    {
        "inputs": 11,
        "category": "Indian City know as the Paris of the East",
        "word": "Pondicherry"
    },
    {
        "inputs": 10,
        "category": "Indian City know as the Steel city of India",
        "word": "Jamshedpur"
    },
    {
        "inputs": 12,
        "category": "Indian City know as the Temple city of India",
        "word": "Bhubaneshwar"
    },
]

$(document).ready(function () {
    fillBlanks();
})

function fillBlanks() {
    //Select a random word
    const randomWord = words[Math.floor(Math.random() * words.length)];

    //Make sure blanks are empty to begin with
    $("#blanks").empty();

    //Show blanks uisng <span>
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }

    //Show Hint
    $("#hint").html(randomWord.category)

    var gameOver=false
    //Fill blanks only if the character match is found
    $(".clickable").click(function () {
        var correctGuess = false;      

        //Get the id of the button clicked
        let id = $(this).attr("id");

        //Get the life 
        var life = parseInt($("#life").text())

        //Loop through all the letters 
        for (var i = 0; i < randomWord.word.length; i++) {
            //Check if the character matches the id of the button
            if (randomWord.word.charAt(i).toLowerCase() == id) {
                //Check if the life is still left and blank is is empty/already filled
                if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {

                    //fill blanks
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;

                    //Check if the word guess is complete
                    if ($("#blanks").text() === randomWord.word.toLowerCase()) {
                        $("#result").text("You Win!!")
                        correctGuess = true;
                        gameOver=true
                    }
                }                
            }
            
        }
       
        if (life > 0 && correctGuess!=true && gameOver!=true) {           
            life = life - 1
            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("You Lost!!")
        }
    })
}

    