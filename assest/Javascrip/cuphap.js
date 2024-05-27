/**  JavaScript có thể "hiển thị" dữ liệu theo nhiều cách khác nhau:*/

// Viết vào một phần tử HTML, sử dụng innerHTML.
// Viết vào đầu ra HTML bằng cách sử dụng document.write().(Việc sử dụng document.write() sau khi tài liệu HTML được tải sẽ xóa tất cả HTML hiện có :)
// Viết vào hộp cảnh báo, sử dụng window.alert().(Hiện thị ngay kết quả màn hình )
// Viết vào bảng điều khiển trình duyệt, sử dụng console.log() (Mở tag trình duyệt để sửa lỗi)

/**Cú pháp để in ra trình duyệt  */
/**html
 <p id="demo"></p>
 */ 
<scrip>
  document.getElementById("ID").innerHTML = variable ;
</scrip>
//File javascrip 
function myFunction(a, b) {
  return a * b 
}
let w = myFunction(5,6 )



/**Công Dụng Các Biến  */
// var	Khai báo một biến
// let	Khai báo một biến khối
// const	Khai báo một hằng số khối
// if	Đánh dấu một khối câu lệnh sẽ được thực thi theo một điều kiện
// switch	Đánh dấu một khối lệnh sẽ được thực thi trong các trường hợp khác nhau
// for	Đánh dấu khối lệnh sẽ được thực thi trong vòng lặp
// function	Khai báo một hàm
// return	Thoát khỏi một chức năng
// try	Thực hiện xử lý lỗi đối với một khối câu lệnh


/**Cú Pháp Để Chèn Chữ VÀO PHẦN TỬ HTML  */
document.getElementById("").innerHTML = " Tuy Thick "

/**Biến Javascrip */
// Có 4 biến đuọc khai báo : Automatically ; var ; let ; const 
// 1. Luôn khai báo biến
// 2. Luôn sử dụng const nếu giá trị không được thay đổi
// 3. Luôn sử dụng const nếu không nên thay đổi loại (Mảng và Đối tượng)
// 4. Chỉ sử dụng let nếu không thể sử dụngconst
// 5. Chỉ sử dụng var nếu bạn PHẢI hỗ trợ các trình duyệt cũ.
// Khai báo biến mà không có giá trị , thì sẽ xuất hiện thông báo undefined màn hình 
var fullName = ' phuc'
var fullName;
// Nếu bạn khai báo lại một biến javascrip được khai báo bằng var nó sẽ không mất giá trị 
// Nhưng đối với let và const thì khai báo vậy sẽ bị lỗi cú pháp 
// Kí hiệu đô la $ được sử dụng là một chữ cái định danh chứa $ là tên biến hợp lệ 
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
// Kí hiệu đô la _ được sử dụng là một chữ cái định danh chứa _ là tên biến hợp lệ 
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;

/**TRuthy Và Falsy là gì  */
console.log(Boolean(['BMW'])) // true
console.log(Boolean({ name: 'Miu' })) // true

console.log(!!'hi') // true
// !! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định, mà 2 lần phủ định lại trở thành "khẳng định". Trong Javascript thì đây là một "tip" để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean.
//Thêm !! phía trước các giá trị truthy sẽ luôn trả về true.

// Trong Javascript có 6 giá trị sau được coi là Falsy:
// false
// 0 (số không)
// '' or "" (chuỗi rỗng)
// null
// undefined
// NaN
console.log(!!false) // false
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!NaN) // false

// Ngoài 6 giá trị đã đề cập tới ở phần False thì toàn bộ các giá trị khác đều là Truthy , kể cả những giá trị sau :
// '0' (một chuỗi chứa số không)
// ' ' (một chuỗi chứa dấu cách)
// 'false' (một chuỗi chứa từ khóa false)
// [] (một array trống)
// {} (một object trống)
// function(){} (một hàm "trống")

/**LƯU Ý  */
// Dạng biểu thức so sánh sẽ trả về giá trị boolean 
// Hoặc biểu thức cũng so sánh nhưng cũng không trả về giá trị boolean
// Toán tử logical sẽ thường trả về giá trị boolean 

/** Toán tử gán ca  */
//  <<=       x <<= y        x = x << y 
//  >>=       x >>= y        x = x >> y 
//  >>>=      x >>>= y        x = x >>> y 

/** Toán tử gán bitwise  */
//  &=       x &= y         x = x & y  
//  ^=       x ^= y         x = x ^ y  
//  |=       x |= y         x = x | y  

/**Toán tử logic  */
//  &&=      x &&= y        x = x &&  (x = y )
//  ||=      x ||= y        x = x ||  (x = y )
//  ??=      x ??= y        x = x ?? (x = y )

/** Các loại dữ liệu javacsip  */
//Có 8 giá trị 
//1.Number , 2.String , 3.Bigint ,4.Boolean ,5.Undefined ,6.Null ,7.Symbol ,8.Object 
//Kiểu dữ liệu đối tượng có thể chứa : Một đối tượng , Một mảng , Một ngày tháng

/**Từ khóa return trong hàm  */
let x = 16 + 4 + "string"   //Javascrip coi  16 và 4 là số cho đến khi đạt đến "String"
console.log(let) // Hàm này sẽ đưa ra giá trị là 20string 

let a = "string" + 16 + 4;    //Javascrip coi toán tử đầu tiên là chuỗi nên tất cả các chuỗi toán hạng đều được coi là chuỗi 
console.log(let)//Hàm này sẽ đưa ra là string164 

/**Các Loại Javascrip động */
//Javascrip có dữ liệu động , Điều này có nghĩa là cùng 1 biến có thể đã từng chứa các loại dữ liệu khác nhau 
let b;
b = 5;
b = "String";
alert(b) // Sẽ đưa ra giá trị là String 

/**Chuỗi String  */
//Một chuỗi hoặc 1 chuỗi văn bản là giống như tên 1 nhân vật "Viet Phuc"
//Chuỗi được viết trong dấu ngoặc kép , Bạn có thể dùng dấu ngoặc đơn hoặc dấu ngoặc kép cũng được 
let lastName = 'Viet'
let firstName = "Phuc"
//Bạn có thể dùng dấu ngoặc kép bên trong 1 chuỗi , miễn là chúng không trùng khớp với dấu ngoặc kép xung quanh chuỗi 
var ten1 = 'viet'
var ten2 = 'Phuc"'
var ten3 = "'Dtrai'"

/** NUMBER */
//Tất cả các số javascrip được lưu trữ dưới dạng số thập phân (dấu phẩy động )
//Số có thể được viết có  hoặc không có số  thập phân 
let x1 = 34.00;//34
let x2 = 34;//34
let x3 = 3.14;//3.14
//Các số cực lớn hoặc cực nhỏ có thể được viết bằng kí hiệu khoa học (số mũ )
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123

/**Javascrip Biglnt */
//Tất cả các số javascrip được lưu trữ ở định dạng dấu phẩy động 64-bit 
//Javascrip Biglnt là một kiểu dữ liệu mới , có thể được sử dụng để lưu trữ  các giá trị số nguyên quá lớn để được biểu thị bằng Số JavaScript thông thường.
//Bạn không thể thực hiện phép toán giữa loại Biglnt và loại số 
var c = BigInt("123456789012345678901234567890");//123456789012345678901234567890

/** Javascrip Array */
const cart = ['Viet','Phuc','Dtrai'] ; // in ra sẽ lấy giá trị 'Viet' khi bạn khai báo biến cars[0] , ví dụ như vậy nếu cars[1] thì sẽ in ra là 'Phuc'
//Các chỉ mục mảng dựa trên 0, có nghĩa là mục đầu tiên là [0], mục thứ hai là [1], v.v.

/**Javascrip object (Đối tượng ) */
//Các đối tượng JavaScript được viết bằng dấu ngoặc nhọn {}.
//Thuộc tính đối tượng được viết dưới dạng cặp tên:giá trị, phân tách bằng dấu phẩy.
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

/**Javascrip undefined */
let car;
console.log(car)// cho ra kết quả là undefined bời vì bạn không gán giá trị naò cho nó 

let cat = ""
console.log(cat)// Cái này là 1 giá trị rỗng không liên quan gì đến undefined 

/**Javascrip Function (Chức năng javascrip ) */
//Hàm JavaScript là một khối mã được thiết kế để thực hiện một tác vụ cụ thể.
//Một hàm JavaScript được thực thi khi "thứ gì đó" gọi nó (gọi nó).
function myString(){
    alert('xin chao cac ban')
}
myString()

/**Cú pháp hàm Javascrip **/
//Hàm JavaScript được xác định bằng functiontừ khóa, theo sau là tên , theo sau là dấu ngoặc đơn () .
//Tên hàm có thể chứa các chữ cái, chữ số, dấu gạch dưới và ký hiệu đô la (quy tắc giống như biến).
//Các dấu ngoặc đơn có thể bao gồm các tên tham số được phân tách bằng dấu phẩy:( tham số1, tham số2, ... )
//Mã được hàm thực thi được đặt bên trong dấu ngoặc nhọn: {}
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
/**Object (đối tượng javascrip)  */
//Có 2 cách để đưa giá trị object ra màn hình 
let n = {
  age : 18 , 
  nam : 'string'
}
console.log(n.age)//Cách 1 

let m = {
  age : 18 , 
  nam : 'string'
}
console.log(m["age"])//Cách 2
//Phương thức đối tượng của object 
let peron = {
  age : 18 , 
  nam : 'string',
  lastName: 'Phuc',
  firstName:'Nguyen',
  fullName : function () {
    return this.lastName + this.firstName //Từ khóa this được định nghĩa là chủ sở hữu , nó sẽ gán bất kì giá trị nào khi gọi nó 
  }
}
console.log(person.fullName())//Hàm này in ra là Phuc Nguyen

//Lưu ý nếu không có () thì hàm sex không được khai báo ra 
let person1 = {
  age : 18 , 
  nam : 'string',
  lastName: 'Phuc',
  firstName:'Nguyen',
  fullName : function () {
    return this.lastName + this.firstName //Từ khóa this được định nghĩa là chủ sở hữu , nó sẽ gán bất kì giá trị nào khi gọi nó 
  }
}
console.log(person1.fullName)//Hàm này in ra là function() { return this.firstName + " " + this.lastName; }

/**SỰ KIỆN JAVASCRIP */
//button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button> Cách này sẽ làm cho html in ra 1 button và hiện thị ngày giờ 
//<button onclick="this.innerHTML=Date()">The time is?</button> VÍ DỤ NÀY NÓI LÊN MÃ THAY ĐỎI CỦA PHẦN TỬ RIÊNHG CỦA NÓ (SỬ DỤNG this.innerHTML )
//<button onclick="myArray()">onclick</button> // Hoặc có thể khai báo hàm qua cú pháp , qua riêng 1 file js , khi bạn cho tham số myArray 

/**Các sự kiện phổ biến 
 * onchange : Nó là một phần tử HTML đã được thay đổi 
 * onclick : Nó là khi người dùng nhấp vào 1 phần tử HTML 
 * onmouseout : Nó là khi người dùng di chuyển chuột ra khỏi phần tử HTML
 * onkeydown : Là khi người dùng nhấn 1 phím trên bàn phím 
 * onload : Trình duyệt đã tải trang xong 
 */

/**Chuỗi STRING  */
// Có 3 cách để truyền chuỗi về nháy đơn và nháy ""
var add = 'It\'s is a dog ' // IN RA SẼ LÀ It'S is a dog 
var exam = "I am a student \"i\" watn to " //IN RA SẼ LÀ I am a student "i" want to 
var hhh= "TOI LA NGUYEN VIET\\ PHUC" // IN RA SẼ LÀ TOI LA NGUYEN VIET \ PHUC 
console.log("Hello\bWorld");  // In ra: HellWorld (vì \b xóa ký tự "o")
console.log("Hello\fWorld");  // In ra: Hello (trang mới)World
console.log("Hello\nWorld");   // In ra: Hello (xuống dòng mới)World
console.log("Hello\rWorld");   // In ra: World (vì \r di chuyển con trỏ về đầu dòng)
console.log("Hello\tWorld");   // In ra: Hello    World (ký tự tab ngang)
console.log("Hello\vWorld");   // In ra: Hello (ký tự tab đứng)World

let text2 ='PHUC' + 'YEU' + 'CA' +'NHA'
console.log(text2)// In ra tiện lợi khi khai báo giá trị quá dài 


let text =
`The quick
 brown fox
 jumps over
 the lazy dog`;
console.log(text)//Hàm này sẽ in ra được 1 chuỗi nằm dọc không cần thêm toán tử cộng để nối 

let yeu = new String("John");//Kết quả John
console.log(typeof yeu ) // In ra sẽ là object 
let haz = 'chuoi'//Kết quả John
console.log(typeof haz)//in ra sẽ là chuỗi (string)

/**PHƯƠNG THỨC CHUỖI */
var text222 = "HELLO WORLD";//Kết quả : H 
document.getElementById("demo").innerHTML = text222.charAt(0);//Phương charAt()thức trả về ký tự tại một chỉ mục (vị trí) đã chỉ định trong một chuỗi:

let text222 = "HELLO WORLD";//Kết quả : 7 
document.getElementById("demo").innerHTML = text222.charCodeAt(0);//Phương charCodeAt()thức trả về mã của ký tự tại một chỉ mục được chỉ định trong chuỗi:Phương thức này trả về mã UTF-16 (một số nguyên từ 0 đến 65535).

//Chuỗi  at()
const name2 = "W3Schools";//Phương at()thức trả về ký tự tại một chỉ mục (vị trí) được chỉ định trong một chuỗi.
let letter = name2.at(2);// KẾT QỦA : S

document.getElementById("demo").innerHTML = letter;//Lấy chữ cái thứ ba của tên:

const namex = "W3Schools";
let letter1 = namex[2];
document.getElementById("demo").innerHTML = letter1;

/**Property Access[] (Quyền truy cập thuộc tính ) */
const namex1 = "W3Schools";
console.log(namex1[0])// In ra là chữ W 

let text21 = "HELLO WORLD";
text21[0] = "A";  // Cái "A" này không có lỗi và nó cũng không họat động 

/**Extracting String Parts (Trích xuất các bộ phận chuỗi) */
// Có 3 phương pháp để trích xuất một phần của chuỗi : slice(start , end ) ; substring(start , end ); substr(stard , length )

//slice(start ,end) (Cắt 1 phần tử chuỗi )
let textxx = "Apple, Banana, Kiwi";
let part = textxx.slice(7, 13);//(Cắt 1 phần tử chuỗi  từ thứ tự 7 đến 13 Banana)
//**Lưu ý : Nếu hàm slice mà giá trị trước(start) lớn hơn giá trị kết thúc(end) thì nó sẽ trả về 1 chuỗi rỗng  */
let hh = "Apple, Banana, Kiwi";
let part1 = hh.slice(7);// Cắt đi phần từ bắt đầu số 7 đến hết chuôi Banana , Kiwwi )

let textsa = "Apple, Banana, Kiwi";
let part22 = textsa.slice(-12);//( Nếu là một số âm thì nóa sẽ lấy giá trị bên phải qua trí , từ bắt đầu số 0 đến -1 và cứ dần dần tăng lên )

let text22 = "Apple, Banana, Kiwi";
let part12 = text22.slice(-12, -6);// Kết quả là Banana 

/** Javascrip String substring  (cái này cũng tương tự như slice()*/
//Sự khác biệt là giá trị bắt đầu và kết thúc nhỏ hơn 0 được coi là 0 trong chuỗi con().
var str = "Hello, World!";
console.log(str.substring(7, 2)); // "ello," Nếu tham số đầu tiên lớn hơn tham số thứ hai, substring() sẽ hoán đổi chúng trước khi xử lý.

var str = "Hello, World!";
console.log(str.substring(3, -2)); // "Hel" Nếu một trong hai tham số là số âm, substring() sẽ coi nó như là 0.

/**Chuỗi javasacrip concat() (Hàm này có chức năng là nỗi được 2 hay nhiều chuỗi ) */
let text1 = "Hello";
let textq = "World!";
let text3 = text1.concat(" ",textq) 
console.log(text3)// //

text = "Hello" + " " + "World!"; //TOÁN TỬ CỘNG 
text = "Hello".concat(" ", "World!");// Áp dụng concat() sẽ rất tiện hơn so với sử dụng toán tử cộng

/**Cắt chuỗi javascrip trim() (Phương thức này là loại bỏ khoảng trắng ở cả hai bên(start & end ) cảu chuỗi */
let phc = "      Hello World!      ";
let phc2 = text1.trim();// Nếu chỉ nhìn mắt thường thì không thể thấy được nhưng bạn sử dụng lệnh length thì sẽ biết được độ dài chuỗi sẽ giảm 

let text$ = "     Hello World!     ";
let text2$$ = text$.trimStart(); // Hàm này cũng cắt khoảng trắng như trim() nhưng nó khác là nó sẽ cắt đi phần tử khoảng trắng đầu tiên , còn khoảng trắng cuối nó vẫn còn đó 

let text$$ = "     Hello World!     ";
let text2$$$ = text$$.trimEnd(); // Hàm này cũng cắt khoảng trắng như trim() nhưng nó khác là nó sẽ cắt đi phần tử khoảng trắng cuỗi cùng (end), còn khoảng trắng đầu (stard) nó vẫn còn đó

/**Chuỗi JavaScript padStart() */
let text44 = "5"; 
let padded = text44.padStart(4,"0");// Cái này sẽ in ra là 0004 ( Trong này "0" là để đưa giá trị lên trước  và  4 sẽ là kí tự tối thiểu mà nó tạo ra và "5" sẽ là kí tự gán sau chuỗi "0")

/**Chuyển đôi chữ hoa và chữ thường  */
let v = 'Nguyen Viet Phuc'
console.log(v.toUpperCase())// In ra là NGUYEN VIET PHUC 

let ư = 'NGUYEN VIET PHUC'
console.log(ư.toLowerCase())// In ra là nguyen viet phuc 
/**Lặp lại chuỗi Javascrip  */
//repeat : nó là lệnh để lặp khi chúng ta gọi 1 số bất kì nó sẽ lặp lại từng đó 
//replace : Nó là lệnh để thay thế một gía trị chỉ định bằng một giá trị khác trong chuỗi 

let text32 = "Phuc"; 
let padS = text32.repeat(3)
console.log(padS) //Nó sẽ in ra là PhucPhucPhuc

let qa ="Nguyen Viet"
let padSe = qa.replace("Viet","mc") //'Viet' này là tryền 1 tham số giống hàm ban đầu để khởi động lệnh , còn "mc" là nơi để tiếp nhận và thay thế cho "Viet"
console.log(padSe) // Nó sẽ in ra là Nguyen mc 
//**Lưu ý Hàm này nếu có 2 chữ trùng trong 1 chuỗi thì nó sẽ lấy phần tử đầu tiên */
//**Lưu ý Hàm này nó cũng phân biệt chữ hoa cả chữ thường nếu nó không giống với hàm mà chúng ta đã khai ra thì sẽ không bao giờ chạy lại được  */
let text2222 = "Please visit Microsoft and Microsoft!";
let newText = text2222.replace("Microsoft", "W3Schools");//Nó sẽ in ra là Please visit W3Schools and Microsoft!

let text123 = "Please visit Microsoft and Microsoft!";
let newText123 = text123.replace(/MICROSOFT!/i, "W3Schools");///Nếu mà bạn muốn phương thức này không biệt chữ hoa và chữ thường thì ta có thể dùng lệnh chính quy /i nhưng nó chỉ thay thế được 1 cái , ở ngoài cùng bên phải 

let text231 = "Please visit Microsoft and Microsoft!";
let newText231 = text.replace(/Microsoft/g, "W3Schools");//Lệnh này nó sẽ thay tất cả các biểu thức giống chữ mà mình đã đưa ra để khai báo và hàm này phải có /""/g

let a321 =  "I love cats. Cats are very easy to love. Cats Cats are very popular."
a321 = a321.replaceAll("Cats","Dogs");
a321 = a321.replaceAll("cats","dogs");
console.log(a321)//In ra sẽ là I love dogs. Dogs are very easy to love. Dogs are very popular.(lệnh này nó sẽ thay thế tất cả trong chuỗi cảu bạn đã khai báo ra bằng lệnh replaceAll())

**HẰNGSỐ//const 
//Hằng số được dùng trong 4 loại , new array , new object , new function , new regExp
**HĂNGSỐVỚIARRAY
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");//

//HẰNG SỐ VỚI OBJECT 
// You can create a const object:
const car1 = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
car1.color = "red";
// You can add a property:
car1.owner = "Johnson";