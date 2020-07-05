// 2020 Asher Seiling

var parsed_words = [];

var num_occurr = 0;

var buffer = "";

var words;
var words_find;

function main(){
    let words_get = document.getElementById("sentance").value;
    let word_find_get = document.getElementById("search_word").value;
    words = words_get.toLowerCase();
    word_find = word_find_get.toLowerCase();
    let num = 0;
    let char = "";
    for (char in words){
        if (words.charAt(num) == " "){
            parsed_words.push(buffer);
            buffer = "";
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
    };
    parsed_words.push(buffer);
    for (let chars in parsed_words){
        if (parsed_words[chars] == word_find){
            num_occurr += 1;
        };
    };

    place_data();
}

function place_data(){
    let words_count = parsed_words.length;
    document.getElementById("word_out").innerHTML = "Word: " + word_find;
    document.getElementById("occurrence_out").innerHTML = "Occurrences: " + num_occurr;
    document.getElementById("words_out").innerHTML = "Word Count: " + words_count.toString();
}
