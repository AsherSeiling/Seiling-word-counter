// 2020 Seiling Enterprises

var parsed_words = [];

var num_occurr = 0;

var buffer = "";

var words;
var words_find;

function main(){
    words = document.getElementById("sentance").value;
    word_find = document.getElementById("search_word").value;
    let num = 0;
    let char = "";
    for (char in words){
        if (words.charAt(num) == " "){
            parsed_words.push(buffer);
            buffer = "";
            console.log("space");
        }
        else if (words.charAt(num) == "."){
            if (words[num + 1] != " "){
                parsed_words.push(toString(buffer));
                buffer = "";
            }
        }
        else if (words.charAt(num) == ","){
            parsed_words.push(buffer);
            buffer = "";
        }
        else if (words.charAt(num) == ";"){
            parsed_words.push(buffer);
            buffer = "";
        }
        else if (words.charAt(num) == ":"){
            parsed_words.push(buffer);
            buffer = "";
        }
        else {
            buffer += words.charAt(num);
        };
        num += 1;
    }

    for (let chars in parsed_words){
        if (parsed_words[chars] == word_find){
            num_occurr += 1;
            console.log(num_occurr);
        }
    }
}

function place_data(){

}