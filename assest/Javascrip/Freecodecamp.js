<p id="info">Demo content</p> //Html
const info = document.querySelector("#info"); //đoạn mã JavaScript này được sử dụng để thay đổi nội dung văn bản của một phần tử trên trang web từ "Demo content" thành "Hello World".
info.innerText = "Hello World"; 

// SO SÁNH GIỮA innerHTML và innerText 
<div id="exampleElement"></div>//Đây là thẻ html
function batki() {
    const exampleElement = document.querySelector("#exampleElement");
    exampleElement.innerText = "This is some <strong>text</strong>.";
} 
/// ĐOẠN NÀY SẼ IN RA với 1 văn bản i chang thô sơ 

const exampleElement = document.querySelector("#exampleElement");
exampleElement.innerHTML = "This is some <strong>text</strong>.";/// ĐOẠN NÀY SẼ IN RA với 1 văn bản có thể thay đổi được thuộc tính html trong phần text đó sẽ được in đậm lên giống như bạn đang thay đổi thuộc tính HTML vậy 


// Thuộc tính click 
button3.onclick = goTown; //có ý nghĩa là khi người dùng click vào button có id là "button3", hàm goTown() sẽ được gọi.Ở đây, button3 là biến chứa tham chiếu đến phần tử button có id là "button3". Khi người dùng click vào button này, sự kiện click sẽ xảy ra.Khi sự kiện click xảy ra, JavaScript sẽ tự động gọi hàm được gán cho thuộc tính onclick của button, trong trường hợp này là hàm goTown(). Điều này có nghĩa là nếu bạn click vào button có id là "button3", thì hàm goTown() sẽ được thực thi.

// Kiến thức 
const locations = [{}]; // Tạo một mảng với một đối tượng rỗng

// Object ( đối tượng )
const location = {
    name: "Naomi", 
    "favorite color": "purple" /// nếu thuộc tính có tên dài thì nên bỏ trong dấu "" "favorite color"
  }
