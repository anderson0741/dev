function countCode(str){
    output = 0;
    for (let i=0; i<str.length; i++){
        if (str.substring(i,i+2) ==="co" && str[i+3] ==="e"){
            output++;
        }
    }
    return output;
    // var count = (str.match(/co.*?e/g)).length;
    // console.log(count)
}

// countCode("codedaksjdnfaksjfcovekfnjasjdnfcose");
console.log(countCode("cojkafngkjndcodeakjsdnfkjsanfscovesankjfnakcobe"))