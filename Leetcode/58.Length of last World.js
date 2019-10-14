var lengthOfLastWord = function(s) {
    s = s.trim();
    var  ns = s.split(" ");
    var last = ns.pop();
    console.log(ns);
    console.log(last);
    console.log(last.length);
};
lengthOfLastWord("a ")
lengthOfLastWord("hello world")