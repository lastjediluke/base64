
// Define the string
// var encodedStringAtoB = 'SGVsbG8gV29ybGQh';
// var decodedStringAtoB = atob(encodedStringAtoB);
// console.log(decodedStringAtoB);

let g_base64_str;
let g_count = 1;

function get_string()
{
  let base64_str = document.getElementById("base_string").value;
  console.log(base64_str);
  decode_string(base64_str);
}

function append_node(str)
{
  var para = document.createElement("p");
  var num = g_count.toString();
  var node = document.createTextNode(num + ".... " + str);
  para.appendChild(node);

  var element = document.getElementById("result");
  // element.appendChild(para);

  // add line and text
  var line = document.createElement("hr");
  element.prepend(line);
  element.prepend(para);
  g_count = g_count + 1;
}


function decode_string(str)
{
  

  // var x = document.getElementById("base_string").textContent;
  // var b64Data     = 'H4sIAAAAAAAAAwXB2w0AEBAEwFbWl2Y0IW4jQmziPNo3k6TuGK0Tj/ESVRs6yzkuHRnGIqPB92qzhg8yp62UMAAAAA==';

  // Decode base64 (convert ascii to binary)
  var strData     = atob(str);


  // Convert binary string to character-number array
  var charData    = strData.split('').map(function(x){return x.charCodeAt(0);});

  // Turn number array into byte-array
  var binData     = new Uint8Array(charData);

  // Pako magic
  var data        = pako.inflate(binData);
  // var data = pako.inflate(new Uint8Array( binData ) , {"to":"string"})

  // Convert gunzipped byteArray back to ascii string:
  var strData     = String.fromCharCode.apply(null, new Uint16Array(data));

  console.log(strData);
  append_node(strData);
}