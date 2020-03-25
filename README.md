# SimonMemory

The Game of Memory

Background from:
https://wallpaperaccess.com/amazing-abstract

Speech Synthesis Code from:
https://stackoverflow.com/questions/15653145/using-google-text-to-speech-in-javascript

Grid DIV itterator code based on help at:
https://codereview.stackexchange.com/questions/157895/create-multiple-divs-inside-a-containing-div
document.write('<div class="gridbox" value='+i+'>'+ i.toString() + '</div>');

for(let i=0;i<4;i++)
{
[gridbox[i],gridbox[i+8],gridbox[i+16],gridbox[i+24]].foreach(function (element)
{
element.addEventListener("click", displayTop);
});
}
