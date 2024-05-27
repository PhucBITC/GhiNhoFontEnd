/* Khái Niệm Biến */

// Trường hợp đặt dấu ; thì không đặt đấu chấm ; cx được mà đặt cũng được tùy vào sở thích của các bạn 
// Khai báo biến của nó là var (còn được gọi là variable )
// Biến weight là biến để dùng khai báo chỉ số cân nặng 
// Tên Biến được phân biệt chữ hoa và chữ thường và bao gồm cả số , chú ý kí tự đầu tiên đặt với chữ thì mới có tên biến được 
// Ví dụ cho sử dụng 1 biến: 
var fullName = 'Nguyen Viet Phuc';
alert(fullName)
// Lệnh NàySẼ IN RA MÀN HÌNH --->>

/* Thuật Ngữ Built-in */ 
// Hàm alert 
// Hàm console.log(tên biến )Nó sẽ in ra phần console ở phần trình duyệt 
// Hàm console.warn(tên biến)Nó sẽ in ra hàm cảnh báo có cái ! màu vàng 
// Hàm console.error(tên biến)Nó sẽ in ra hàm cảnh báo có cái dấu x màu đỏ bị lỗi 
// Hàm Confirm  vd : confirm('xac nhan ban dã du tuoi) Nó sẽ in ra thông báo hộp thoại 
// Hàm Promptr  vd: promptr('xac nhan ban da du tuoi )Nó sẽ in ra hộp thoại có ô input ngoài màn hình có thể cho người dùng nhập vào
// Hàm Set timeout ; Dòng lệnh này được chạy sẽ thực thi 1 đoạn code sau 1 khoảng thời gian được người dùng cho phép (1000=1s ; 10000= 1phut ;100000= 10phut) và nó chỉ chạy 1 lần khi chúng ta nhấp vào nó 
setTimeout(function(){
    alert('Thong bao xuat hien man hinh chinh ')
},1000)
// Hàm Set interval ;Dòng lệnh này được chạy sẽ thực thi 1 đoạn code sau 1 khoảng thời gian được người dùng cho phép (1000=1s ; 10000= 1phut ;100000= 10phut) và nó sẽ chạy liên tục và nó cứ cách 1s thì thông báo nó sẽ chạy 
setInterval(function(){
    alert('Thong bao xuat hien man hinh chinh ')
},1000)

/**Làm quen với toán tử  */
// Toán tử số học -Arithmetic (+ - * / )
var a = 1 * 2;
console.log(a)
// Toán tử gán -Assignment (=)
var fullName = 'Nguyen Viet Phuc';
console.log(fullName)
// Toán tử so sánh - Comparison (==)
var a = 2 ;
var b = 3 ;
if (a > b ) {
    alert('sai');/**IN RA MÀN HÌNH CHO MÀN HÌNH SAI */
}
// Toán tử logic--logical 
var a = 2 ;
var b = 3 ;
if ( a > 0 && b > 0 ) {
    alert('Dung');/**In ra màn hình đúng  */
}

/**Toán tử số học  */
// + --> Cộng 
// - --> Trừ
// * --> Nhân 
// / --> Chia 
// ** --> Lũy Thừa 
// % --> Chia lấy số dư 
// += --> Tăng 1 giá trị số
// -- --> Giảm 1 giá trị số

/**Toán Tử Gán
Toán tử        Ví dụ         Tương Đương
  =             x = y             x = y 
  +=            x += y            x = x + y
  -=            x -= y            x = x - y 
  *=            x *= y            x = x * y 
  /=            x /= y            x = x / y
  **=           x **= y           x = x ** y 
  
*/

/**Toán tử ++-- tiền tố & hậu tố */
// Tiền Tố --a ; ++a
var a = 6 ;
// Việc 1 : + 1 cho a , a = a + 1 ==> a = 7 
// Việc 2 : Trả về a sau khi được + 1 
console.log(++a)//In ra 7 
 
// Hậu Tố a-- ; a++
var a =  6; 
// Việc 1 : 'a ' coppy , ==> a coppy = 6 
// Việc 2 : trừ 1 của a , a = a -1 ==> a = 5 
// Việc 3 : trả về a coopy 
m
/** Toán tử nối chuỗi (String operator) */
var firstName = 'Phuc'
var lastName = 'Phuc'
console.log(firstName + lastName)// in ra se la Phuc 

/**TOÁN TỬ SO SÁNH 
== ----> Bằng 
!= ----> Không bằng 
> ----> Lớn hơn 
< ----> Nhỏ hơn 
>=R ----> Lớn hơn hoặc bằng 
<= ----> Nhỏ hơn hoặc bằng 
 */
var a = 2
var b = 3
if (a != b ) {
    console.log('dieu kien dung')
} else {
    console.log('dieu kien sai')
}// Nếu nó là sai thì sẽ in ra là điều kiện sai , còn đúng thì nó sẽ in ra là điều kiện đúng 

/**Kiểu dữ liệu Boolean */
var a = 2 
var b = 2 
var isSuccess = a > b 
console.log(isSuccess)
//Dữ liệu boolean sẽ in ra màn hình cho 2 kết quả giá trị true & false hiện chũ màu xah dương phân biệt 

/**Câu lệnh điều kiện If (if - else)*/
// Trong javascrip có 6 giá trị sau sang Boolean sẽ là false
// 0
// false
// '' - ""
// undefined
// NaN
// null
var isSuccess = 0
if (isSuccess) {
    console.log('Dieu Kien Dung')
} else {
    console.log('Dieu Kien Sai')
}// RETURN DIEU KIEN SAI 

/**Toán tử logical */
// 1.&& - And (Biểu thức phải đúng cả thì đk mới đúng  , nếu chỉ sai 1 trong vô số điều kiện thì giá trị sẽ sai)
// 2.|| - Or (Biểu thức chỉ cần 1 biểu thức đúng trong vô số giá trị thì giá trị đưa ra là ĐÚNG , còn nếu tất cả các giá trị sai thì đưa ra giá trị false)
// 3.! - Not (Biểu thức này trái ngược sử đụng ! biểu thức đúng sẽ chuyển thành sai , mà biểu thức sai sẽ chuyển thành đúng )
var a = 1 
var b = 2
if ( a > 0 && b > 0 ) {
    console.log('Dieu Kien Dung')
}

var a = 3 
var b = 4
if ( a > 0  || b > 0 ) {
    console.log('Dieu Kien Dung')
}

var a = 3 
var b = 4
if ( !(a < 0) ) {
    console.log('Dieu Kien Dung')
}//Đưa ra điều kiện đúng 

/**KIỂU DỮ LIỆU JAVASCRIP
1. Dữ liệu nguyên thủy - Primitive Data
-Number
-String 
-Boolean 
-Undefined
-Null
-Symbol 
2. Dữ liệu phức tạp - complex Data 
-Function 
-Object 
 */

// Number type
var a = 2 
var b = 3
// String type 
var fullName = 'Phuc Viet'

// Boolean  type 
var isSuccess = true

// Undefined type 
var age ;

// Null 
var isNull = null 

// Symbol 
var id = Symbol('id')//unique 
var id2 = Symbol('id')//unique 
console.log( id === id2)

//Function 
var myFunction = function() {
    alert('Hi xin  chao ')
}
myFunction()

// Object type 
var myObject = {
    name: 'Phuc',
    adrees:'nghe an',
    age:18,
    myFunction: function () {

    }
} 
console.log('myObject', myObject)

// Array type 
var myArray = [
    'Javascrip',
    'php',
    'RuBy'
]
console.log( myArray)

/**TOÁN TỬ SO SÁNH PHẦN 2 */
//  === (so sánh bằng tuyệt đối cả value và type )
// !==  (So sánh khác tuyệt đối cả value và type )
var a = 1 
var b = '1'
console.log(a === b ) // Đưa ra kết quả là false 

var a = 1 
var b = '1'
console.log(a !== b ) // Đưa ra kết quả là true 

/** TOÁN TỬ LOGICAL VÀ CÂU LỆNH ĐIỀU KIỆN IF */
// Hiểu hơn về câu lệnh điều kuện 
// Và phép so sánh 

//And '&&'
var isSuccess = 'A' && 'B' && 'C '//Ví dụ về toán tử and '&&'
console.log(isSuccess) //Nếu mà trong giá trị biến không nằm trong 6 giá trị false , thì toán tử and'&&' sẽ lấy giá trị ở cuối cùng của giá trị 
// ----->In ra console.log là C
var isSuccess = null && 'A' && 'B' && 'C'// Ví dụ này có phần tử Null nằm trong 6 giá trị false 
console.log(isSuccess) // Nếu mà toán tử && có 1 trong 6 giá trị false thì Kết quả luôn ưu tiên kết quả false và sẽ loại bỏ các giá trị không cần thiết 
// ---> In ra console.log là Null 

//Or '||'
var isSuccess = 'A' ||'B' ||'C' // Ví dụ này chúngminh trái ngược với && , nó sẽ lấy giá trị value bên trái là nó sẽ lấy luôn , và các value sau nó sẽ không liên quan đến nó 
console.log(isSuccess)
// ---> In ra console.log là A 

var isSuccess = 'A' ||'B' ||undefined ||'C' // Ví dụ này có 1 giá trị nằm trong 6 giá trị false , nhưng toán tử || sẽ luôn luôn lấy value bên trái và không chú ý đến vế phải .
console.log(isSuccess) 
// ---> console.log vẫn là A 
// Chú ý : Nếu muốn toán tử or '||' điều kiện sai thì trong các giá trị vale khai báo biến đều chứa hết các giá trị thuộc trong 6 giá trị false 

/**Khái Niệm Hàm function 
1. Hàm là gì ?
     - Một khối mã 
     - Làm 1 viêc cụ thể 
2. Loại Hàm 
     - Built-in 
     - Tự định nghĩa 
3. Tính Chất 
     - Không thực thi khi định nghĩa 
     - Sẽ thực thi khi được gọi 
     - Có thể nhận tham số 
     - Có thể trả về 1 giá trị 
     - Hàm có thể chứa a-z A-Z 0-9 _ $   
     - Không được đặt số ở kí tự đầu tiên 
        
 */
// Tạo Hàm Đầu tiên 
function showDialog() {
    alert('Hi xin chao cac ban')
}
showDialog();

/**Tham số trong hàm  */
//Truyền 1 tham số 
function write(message) {
    console.log(message)
}
write('Day la log') 
// Truyền nhiều tham số 
function write(one1 , one2) {
    console.log(one1)
    console.log(one2)
}
write('ok' , 'ok2')
//Đối tượng arguments 
function write() {
    console.log(arguments)
}
write('log1', 'log2',)
// Giới thiệu vòng lặp for 
function write() {
    for (var param of arguments)
    console.log(param)
}
write('log1','log2','log4')
// Ví dụ chi tiết về vòng lặp for 
function write() {
    var myString =' ';
    for (var param of arguments)
    myString += `${param} - ` 
}
write('log1','log2','log4')//Nó sẽ in ra màn hình nằm ngang và cách nhau bằng dấu gạch ngang 

/**Từ khóa return trong hàm  */
//VÍ DỤ 
function cong(a , b ) {
    return a*b //Hàm này là để trả về giá trị bất kì giá trị gì 
}
var a = cong( 5 , 6 )
console.log(a)// Sẽ trả về gía trị là 30 
//Lưu ý : Hàm trả về giá trị sẽ được thực thi , các hàm viết sau đó sẽ không được chạy hoặc thực hiện 
function tru(a,b) {
    return a - b 
    console.log('tru')//Hàm này viết  sau hàm trả về giá trị nên không được chạy 
    alert('')//Hàm này viết  sau hàm trả về giá trị nên không được chạy 
}
var b = tru(5 , 2 )
console.log(b)//Kết quả sẽ là 3 

/* Hiểu hơn về hàm  
Một số điều cần biết về function 
1. Khi function đặt trùng tên ? 
2. Khai báo biến trong hàm ? 
3. Định nghĩa hàm trong hàm ? 

*/
//1Khi function đặt trùng tên 
function write() {
    console.log(on1)
}
function write() {
    console.log(on2)
}
function write() {
    console.log(on3)
}
write()//Nó sẽ lấy giá trị là console.log(one3) , 2 cái function trên đã bị function dưới cùng ghe đè , nó sẽ đè khi có phần tử giá trị ở sau nữa 

//2. Khai báo biến trong hàm ? 
//Chúng ta có thể khai báo biến ở trong hàm 
function write() {
    var fullName = 'Nguyen Viet Phuc'
    console.log(fullName)
}
write()

//3. Định nghĩa hàm trong hàm ? 
function write1() {
    function write2() {
        console.log('Nguyen Viet Phuc')
    }
    write2()
}
write1()

/**CÁC LOẠI HÀM
1.Declaration function  
2.Expression function 
3.Arrow function 
  */
//1.Declaration function (Ví dụ về nó)
function write() {
}
//2.Expression function( Ví dụ về nó )
var write = function() {
}//vd 

setTimeout(function autologin() {//autologin để khi mình coi nơi mình đã  code lại , phần đó code nhằm mục đích đê nhấn mạnh phần login 
})//vd 

var myObject = {
    myFunction: function() {

    }
}

// Declaration function VÀ Expression function Đều đưa ra kết quả tương tự như nhau cả , Nhưng Declaration function khác Expression function  là Nó gọi TRƯỚC KHI ĐỊNH NGHĨA
write()// Nó gọi trước vẫn chạy hoạt động , đó là sự khác biệt về Declaration function
function write() {
    console.log('viet phuc')
}

/**KIỂU DỮ LIỆU CHUỖI (STRING)
1.Tạo chuỗi 
   - Các cách để tạo chuỗi 
   - Nên dùng cách nào ? Lý do ?
   - Kiểm tra dât type 
2. Một số case sử dụng backlash (\)\
3. Xem độ dài chuỗi 
4. Chú ý độ dài khi viết code 
5. Template string ES6 
 */

//1. Các cách để tạo chuỗi 
var a = ('nguyen viet phuc')//Cách 1 (Ưu tiên cách 1 ) (typeof là string)
var a = new string ('nguyen viet phuc ')//cách 2 ((typeof là object ))

// 2.Một số case sử dụng backlash (\)
var a = ('nguyen viet phuc\'ĐỘC THÂN\' ' )//ĐỂ xuất hiện dấu ngoặc kép ta dùng dấu gạch chéo 
var a = ('day la dau \\' )//in ra là dấu \ ; 2 \\ thì thành 1 dấu 

//3.XEM ĐỘ DÀI CHUỖI 
var a ='Nguyen Viet Phuc '
console.log(a.length)// Độ dài chuỗi được in ra là 17 kí tự 

// 4.Chú Ý Độ Dài Khi Viết Code 
var fullName = 'DAY LA TOI MOI KHI TRO NEN CO DƠN '
+"DAY LA TOI MOI KHI TRO NEN CO DƠN "
+"DAY LA TOI MOI KHI TRO NEN CO DƠN "
console.log(fullName)//Mỗi dòng không nên vượt quá 80 kí tự , nên xuống dòng cho văn bản hợp lý 

//5.Template string ES6
var firstName = 'Nguyen'
var lastName = 'Viet'// Cách này dùng nối chuỗi tiện lợi 
console.log(`Toi la : ${firstName} ${lastName}`)// In ra là Toi la : Nguyen Viet

/**LÀM VIỆC VỚI CHUỖI */
//1. length (Độ dài văn chuỗi)
var a = 'phuc'
console.log(a.length)//độ dài chuỗi 4

//2. Find index (indexOf)(Tìm vị trí nằm tron dòng1 chuỗi)
var a = 'Học Ngu LÀ Học Ngu Vì Nó Học Ngu'//Trường hợp nó không tìm thấy giá trị thì sẽ xuất hiện là -1 
console.log(a.indexOf('N'))//Nó sẽ in ra thông báo xuất hiện ở dòng 4 trong chuỗi 'Học Ngu' 
console.log(a.indexOf('Học Ngu', 9)) //Nó sẽ in ra thông báo xuất hiện ở hàng 11 , BỞI Vì ta tìm vị trí thông tin nó ở hàng sau 9 nên sẽ lấy chữ Học Ngu ở hàng thứ 11 
console.log(a.lastIndexOf('Học Ngu'))// Nó sẽ in ra thông báo ở dong 25 cuối cùng , lệnh này sẽ tìm phần tử ở giá trị cuối cùng 
console.log(a.search('Học Ngu'))//Nó sẽ xuất hiện ở dòng đầu 

//3. Cut string (Cắt Chuỗi ) 
var a = 'Toi la nguyen viet phuc '//Đề bài cắt lấy chữ 'nguyen'
console.log(a.slice(8,14))//8 là kí tự đầu , 14 là kí tự kết thúc , Và nó sẽ in ra chữ nguyen

var a = 'Toi la nguyen viet phuc '//Đề bài cắt lấy chữ 'nguyen viet phuc'
console.log(a.slice(8))//8 là kí tự băt đầu để lấy gía trị , còn lấy hết giá trị dằng sau nó thì không cần ghi 

var a = 'Toi la nguyen viet phuc'//Đề bài cắt lấy chữ 'h' Gọi chung là đếm từ phải sang trái và đếm từ 0- đến số âm 
console.log(a.slice(-3,-2))//In ra là chữ h 

///4. Replace (Lệnh này dùng dể thay đôi chữ này sang chữ khác trong 1 chuỗi )
var a = 'TOI LA PV ' //Đề bài thay chữ PV -->> thành chữ 'Phúc Viết'
console.log(a.replace('PV','Phúc Viết'))

var a = 'Tôi la  PV , hân hanh được chào PV' // Đề bài thay đổi tất cả các chữ PV thành Phúc Viết 
console.log(a.replace(/PV/g,'Phúc Viết'))//ĐÂY LÀ BIỂU THỨC Chính Quy  

//5.Convert to upper case (Chuyển đôi cả chuỗi tất cả thành chữ HOA )
var a = 'toi la nguyen viet phuc'
console.log(a.toUpperCase())//ĐƯỢC IN RA LÀ --> TOI LA NGUYEN VIET PHUC

//6.Convert( to lower case (Chuyển đổi tất cả viết hoa thành viết thường)
var a = 'TOI LA NGUYEN VIET PHUC'
console.log(a.toLowerCase())//Được in ra là --> toi la nguyen viet phuc 

//7.Trim (lỆNH NÀY NÓ SẼ LOẠI BỎ KHOẢNG TRẮNG Ở 2 ĐẦU )
var a = '  toi la nguyen viet phuc   '
console.log(a.trim()) //Được in ra và đã bị xóa đi trắng (cách để biết đã khoảng trắng là bôi đen dòng được in , hoặc sử dụng length để đo dộ dài chuôi)

//8.Split ( Lệnh này Cắt 1 chuỗi thành array dựa vào 1 điểm chung ở trong chuỗi )
var a = 'JAVASCRIP, PHP , RUBY'//Điểm chung của cái này là dấu phẩy rồi cách ra 1 tý 
console.log(a.split(', '))//In ra là --> Là biến đổi thành 1 mảng array 

var a = 'JAVASCRIP' //Đề bài là sẽ cắt ra tưng chưx một , điểm chung ở đây là một nháy đơn trống''
console.log(a.split('')) //In ra từng chữ của  mảng array 

//9. Get a character bt index (Lệnh này có thể lấy được 1 ký tự)
const a = 'Phuc Viet';
console.log(a.charAt(0))//In ra là chữ P 

const a = 'Nguyen Viet Phuc'
console.log(a[1])//In ra là g

/**NUMBER ( SỐ VÀ LÀM VIỆC VỚI SỐ ) */
//1. Cách Tạo giá trị number 
var a = 3 
var PI = 3.14 //Cách 1 (ƯU TIÊN LẤY KIỂU KHAI BÁO NÀY )
var otherNumber = new Number(9)//Cách 2 

//2.Cách kiểm tra giá trị Số Không Hợp Lệ (NaN)
var result = 20 / 'ABC';
console.log(isNaN(result))

//2.5  được sử dụng để kiểm tra xem một giá trị có là một số hữu hạn không. 
var result = 20 / 'ABC';
console.log(isFinite(result))

//2.6 được sử dụng để kiểm tra xem nó có phải là số nguyên hay không 
let t =5 
console.log(Number.isInteger(5))// true vì nó là số nguyên 


//3.Làm Viêc Với Number 

var age = 18 ;
console.log(age.toString())//Hàm này sẽ đưa ra giá trị là string (chuỗi)

var PI = 3.227824 
console.log(PI.toFixed(2))//Đây là dạng làm tròn số thập phân in ra sẽ là 3 ; Còn trong trường hợp thêm số 2 thì nó sẽ làm tròn bắt đầu sau dấu phẩy thập phân và in ra là 3.22 

/**MẢNG ARRAY */
//Cách viết mảng ARRAY 
var languages = [
    'string',
     1 , 
     undefined , 
     function () {

     },
     'java'
]

// Kiểm tra kiểu dữ liệu 
console.log(typeof languages)// kiểu object 

//Cách kiểm tra biến này có phải là ARRAY hay không 
consolelog(Array.isArray(languages))// In ra true là đúng kiểu Array 

//Truy xuất mảng để coi độ dài mảng 
console.log(languages.length)// IN ra là 5 

/**LÀM VIỆC VỚI MẢNG ARRAY   */
//1. To string 
var languages = [
    'Java',
    'PHP',
    'Ruby'
];
console .log(languages.toString())//Biến đổi từ array sang string Java,PHP,Ruby

//2. Join 
console .log(languages.join('-'))// Biến đổi có thể làm thay đổi dấu phẩy , hoặc truyền 1 kí tự bất kì , để chuỗi thêm đẹp hơn Java-PHP-Ruby
utd 
//3. Pop (là nó sẽ xóa đi phần tử(element) cuối mảng , Nếu càng thêm giá trị Pop thì càng ngày càng bót phần tử )
console.log(languages.pop())//In ra là Java và Ruby

//4. Push (là nó sẽ thêm phần tử vào cuối mảng , càng thêm Push thì phần tử cuối càng tăng )
console.log(languages.push('Phuc' , 'Viet')) //In ra Java , PHP , RUBY , Phuc , Viet 

//5. Shift (Nó sẽ xóa đi phần tử(element) đầu mảng  càng thêm thì nó càng xóa phần tử đầu )
console.log(languages.shift())// In ra là PHP,Ruby 
f
//6. Unshift (là thêm 1 phần tử(element) vào đầu mảng và trả về độ dài của mảng )
console.log(languages.unshift('Phuc','Viet'))// In ra sẽ là Phuc, Viet , Java , PHP , RUBY 

//7. Splicing (Xóa đi vị trí bất kì trong ARRAY )
languages.splice(1,1)//In ra sẽ là xóa từ PHP và kết qủa là Java,Ruby
console.log(languages) //Hàm này sẽ đưa phần tử ra 

languages.splice(1, 2)//In ra sẽ là xóa từ PHP & Ruby  và kết qủa là Java 

languages.splice(1, 0 ,'Phuc')// In ra sẽ là 'Java','Phuc','PHP','RuBy' và có thể chèn thêm element đó trong mảng array , và kết quả là Java , PHUC ,PHP,Ruby  ); nên nhớ tham số thứ 2 là số"0" có ý nghĩa là nó không xóa đi bất cứ phần tử nào , mà cho có thể thêm chuỗi ở ngay vị trí stars 
languages.splice(1, 1 ,'Phuc')// In ra sẽ là xóa phần tử PHP  và có thể chèn thêm element đó trong mảng array , và kết quả là Java , PHUC,Ruby  )

//8. Concat (Hàm này sẽ dùng để nối array)
var languages = [
    'Java',
    'PHP',
    'Ruby'
];
var languages2 = [
    'Phuc',
    'Viet'
];
console.log(languages.concat(languages2))//Hàm này nó sẽ nối chuỗi khác nhau với  1 phần tử và in ra kết qủa là   'Java','PHP','Ruby','Phuc','Viet'
console.log(languages2.concat(language))//Hàm này nó sẽ nối chuỗi khác nhau với  1 phần tử và in ra kết qủa là'Phuc','Viet,'Java','PHP','Ruby'

//9.Slicing (hàm này có nghĩa là để cắt một vài element một mảng 
console.log(languages.slice(1,2))//Hàm này sẽ cắt phần tử ra là PHP 
console.log(languages.slice(1))//Hàm này sẽ cắt phần tử ra là PHP , RUBY 

/**Object đối tượng */
var myInfor = {
    name:'Phuc Viet',
    age:18,
    address:'Nghe An'
}
myInfor.email = 'Phuczo262@gmail.com';//Cái này có thể gán cho nó và cho thêm 1 giá trị trong object 
console.log(myInfor);// In ra sẽ là Phuc Viet , 18 , Nghe An , Phuczo262@gmail.com

//Cách lấy giá trị(value) ra ngoài 
var myInfor = {
    name:'Phuc Viet',
    age:18,
    address:'Nghe An'
}
console.log(myInfor.name)// In ra là Phuc Viet  (Cách 1)
console.log(myInfor['name'])//In ra là Phuc Viet (Cách 2)
//
var myInfor = {
    name:'Phuc Viet',
    age:18,
}
var email = 'age'// Tên trong chuỗi phải giống như trong objcet là sẽ truyền được tham số 
console.log(myInfor[email])// In ra là 18 
//
var emailKey = 'address'
var myInfor = {
    name:'Phuc Viet',
    age:18,
    [emailKey]:'Nghe An '//Lưu ý trong khai biến[]không cần phải thêm dấu chuỗi.
}
console.log(myInfor)// In ra là name:Phuc Viet , age:18 , address:Nghe An 

//Xóa value object
var myInfor = {
    name:'Phuc Viet',
    age:18,
    email:'Nghe An'
}
delete myInfor.age// Hàm delete này sẽ xóa bất cứ giá trị nào mà chúng ta goi nó 
console.log(myInfor)// In ra sẽ còn là name:Phuc Viet , email:Nghe An 

//Trong object có phương thức function 
var myInfor = {
    name:'Phuc Viet',
    age:18,
    getName: function() {
        return this.name
    }
}
console.log(myInfor.getName())// Lấy ra giá trị của function là Phuc Viet 
//Lưy ý , function là -----> phương thức -->method ; thuộc tính --->property

/**Object constructor (Xây dựng đối tượng) */
//Ví Dụ
function User(firstName,lastName,avata) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avata = avata;
    
}
var author = new User('Phuc','Viet','avata');
var user = new User('Vu','Nguyen','avata');
console.log(author)
console.log(user)

//**Object prototype */
function User(firstName,lastName,avata) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avata = avata;
    this.getName =function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}
var author = new User('Phuc','Viet','avata');
var user = new User('Vu','Nguyen','avata');
console.log(user.className)
console.log(user2.getClassName());

/**Đối tượng Date  */
var date = new Date();
console.log(Date)// Nó sẽ trả về múi giờ rất chính xác (Luôn luôn dùng cách này , điều này sẽ lấy đến phương thức dễ dàng hơn )

var date = Date();
console.log(Date)// Kết quả cũng vậy , nhưng typeof ra có kết quả khác New 
//Tháng 
var date =new Date();
var month =date.getMonth();
console.log(month);//In ra tháng hiện tại 
//Ngày
var date =new Date();
var day =date.getDate();
console.log(day);//In ra ngày hiện tại 
//Năm
var date = new Date();
var year =date.getFullYear();
console.log(year)//IN ra năm hiện tại 
//Giây 
var date = new Date();
var seconds =date.getSeconds();
console.log(seconds)//IN ra năm hiện tại 

/*  Math Object ( Toán đối tượng )
// Math.PI 
console.log(Math.PI);Nó sẽ trả về đúng giá trị số Pi mà đầy đủ chi tiết cho chúng ta cần khi khai triển cần thiết 

// Math.round()
console.log(Math.round(1.5));Nó là phương thức trả về làm tròn số , vd các ban đưa vào số thập phân thì nó sẽ làm tròn ; Nếu đưa vào 1.3 --> 1 ; 1.8--> 2 ; 1.5-->2; 1.49--->1 ;

// Math.abs()(Viết tắt của từ absolute)
console.log(Math.abs(); Nó là phương thức số tuyệt đối hay hiểu 1 cách đơn giản là biến 1 số âm thành 1 số dương vd đưa vào -4 ---> 4 ; 4--->4 ; -2--->2 .

// Math.ceil()
console.log(Math.ceil()) Nó là phương thức làm tròn trên cho dù phương thức có nhỏ đến mấy thì nó vẫn làm tròn trên 4.0000000001---->5 cho dù khi nào số thập phân có giá trị lớn hơn 0 đằng sau dấu phẩy thì nó sẽ làm tròn trên .

// Math.floor() 
console.log(Math.floor()); Nó là phương thức làm tròn dưới vd 5.1--->5 ; 5.9999999---> 5

// Math.random() 
console.log(Math.random());Nó là phương thức trả về cho các bạn dãy số nhỏ hơn 1 
VD Tiếp : console.log(Math.floo (Math.random() * 10)); Bài toán trên cho chúng ta biết nó sẽ lấy kết quả ngẫu nhiên từ 0 - 9 random bất kì 
VD Tiếp : 
var random = Math.floor(Math.random() * 5);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin'
]
console.log(bonus[random]);/// Bài toán này nó có 4 phần tử là lấy từ phần tử số 0 đến phần tử số 4 . Khi in ra nó sẽ lấy ngẫu nhiên từ danh sách bonus để random 

VD TIẾP VỀ GAME KHÓ ĂN % : 
var random = Math.floor(Math.random() * 100);
if (random < 5 ) {
    console.log('Chúc mừng bạn nhận vật phẩm may mắn )
}

// Math.max()
console.log(Math.max()); Nó là phương thức trả về số giá trị cao nhất khi bạn cho 1 dãy số trong đó vd (50 ,49,-30,-3,-1) thì nó sẽ lấy giá trị cao nhất là 50 
// Math.min()
console.log(Math.min()); Nó là phương thức trả về số giá trị thấp nhất  khi bạn cho 1 dãy số trong đó vd (50 ,49,-30,-3,-1) thì nó sẽ lấy giá trị thấp nhất là -3
 */

/* Rẽ nhánh If , else 
// Câu lệnh rẽ nhánh , chúng ta có 2 kiểu như sau 
**Kiểu 1 : Kiểu 1 này là so sánh theo cách bình thường , nếu như trong 2 phần tử khác có date === 2 cả thì in ra nó sẽ lấy 2 phần tử luôn 'Nay là thứ 3 '; 'Nay là thứ 4 'chưa được tối ưu hóa rõ rệt 
var date = 5 ;
if (date === 2) {
    console.log('Nay là thứ 2 ')
}
if (date === 5) {
    console.log('Nay là thứ 3 ')
}
if (date === 5) {
    console.log('Nay là thứ 4 ')
}  else {
    console.log('không ra ')
}

**Kiểu 2 :Còn về kiểu này thì có cách viết lạ hơn 1 chút , nhưng nó có lợi ích trong việc tối ưu hóa rõ rệt, ví dụ nếu chúng ta lấy 2 phần tử date ===2 thì câu lệnh này sẽ trả về hàm đầu tiên nó xét còn phần tử thứ 2 đúng giá trị nhưng nó sẽ bỏ qua 
var date = 2 ;
if (date === 2) { 
    console.log ('Nay la thu 2 ')
} else if(date === 3) {
    console.log('Nay la thu 3 ')
} else if(date === 4) {
    console.log('Nay la thu 4 ')
} else { 
    console.log ('Không Biết ')
}
*/

/* Câu lệnh rẽ nhánh Switch */
// Đoạn mã sau chữ case: Thì nó sẽ chạy sau khi thực thi ; Từ khóa break thì có nghĩa là "thoát khỏi khối lệnh Switch"
// Switch cách hoạt động của nó là các bạn phải cần truyền cho giá trị number hoặc biến hoặc chuỗi hoặc 1 biểu thức điều kiện cũng được , Switch sẽ tính toán và lấy giá trị cho các bạn khi đưa vào switch
// Nó có thể lấy nhiều giá trị từ case , trừ khi có từ khóa "break" thì nó mới dừng lại thôi 
// Như các bạn thấy vd dưới thì mình đưa vào giá trị là 3 , và khi in ra mình được 3 giá trị đó là 3,4,5 bời vì nếu khi viết xong 1 chuỗi mà bạn không "break" để kết thúc dòng lệnh thì nó vẫn sẽ lấy nhiều phần tử 
// Còn trong trường hợp này khi mình đưa vào giá trị là 3 , thì nó sẽ in ra giá trị là 3 vì nó đã bị break kết thúc từ thời điểm đó nên chương trình chỉ nhận giá trị đúng với toán tử === 
// Thuộc tính cuối cùng là default thì khi người dùng đưa vào không cho phép thì nó sẽ in ra giá trị là "Không có giá trị "
/*Nên sử dụng if else hay switch */
// LƯU Ý:
//Trong trường hợp mà các bạn sử dụng if else thì nên dùng cho so sánh > < hoặc = 
//Trong trường hợp mà các bạn sử dụng switch thì các bạn sẽ biết trước giá trị case của nó từ 3 giá trị trở lên là dùng switch còn 2 giá trị trở xuống thì dùng if else 
var date = 3 ;
switch(date) { 
    case 2 : 
        console.log('Hom nay la thu 2 ')
        break;
    case 3 : 
        console.log('Hom nay la thu 3 ')
        break // break;   
     case 4 : 
        console.log('Hom nay la thu 4 ')
        break // break; 
    case 5 : 
        console.log('Hom nay la thu 5 ')
        break;
    default : 
        console.log('Khong co gia tri')
}  
// Đây là 1 ví dụ khác 
//giống nhiềung cho nhiều điều kiện khác nhau 
// Bây giờ tôi đưa vào giá trị là 3, 2 hoặc 5  thì khi in ra tôi được gía trị là 'Hom nay la thu 2,3,4 bởi vì khi 1 giá trị phù hợp thì nó sẽ lấy cả 3 giá trị đó 
// 
var date = 3 ;
switch(date) { 
    case 2 :      
    case 3 : 
    case 4 : 
        console.log('Hom nay la thu 2,3,4 ')
        break 
    case 5 : 
        console.log('Hom nay la thu 5 ')
        break;
    default : 
        console.log('K phần tử cùng nhau thì nên xử lý cách này cho ngắn và gọn gàng , xử lí login chuhong co gia tri')
}   
//1 ví dụ về chuỗi 
function run(fruits) {
    var result;

    switch(fruits) {
        case "Banana":
            result = "This is a Banana";
        case "Apple":
            result = "This is an Apple";
            break;
        default :
            result = "No fruits";
    }

    return result;
}
console.log(run("Banana"))
console.log(run("Apple"))

/* Toán tử ba ngôi ( 3 ngôi)(ternary operator) */
// Trong những trường hợp gán biến đơn giản , hoặc gán biến 1 chữ cái đơn giản thì chúng ta nên dùng toán tử 3 ngôi ; còn trong những trường hợp phức tạp thì chúng ta không cần dùng đến nó 
// Đây là cách viết thông thường 
var course = {
    name:'Javascrip',
    coin: 250
}
if (course.coin > 0) {
    console.log(`${course.coin} Coins`);
} else {
        onscole.log('Mien Phi')///Nó sẽ in ra là 250 Coins
}
// Đây là cách viết ngắn gọn 
//Nếu điều kiện ở vị trí thứ nhât mà đúng thì nó sẽ lấy giá trị ở vế thứ 2  
// Để ngăn cách vế thứ 2 và thứ 3 thì chúng ta ngăn cách bằng dấu chia : 
var course = {
    name:'Javascrip',// Cái này để thêm demo thôi 
    coin: 250
}
var result = course.coin > 0  ? `${course.coin} Coins` : "Miễn Phí ";

/* VÒNG LẶP FOR 
1.for - Lặp với điều kiện đúng có thể là 1 biểu thức điều kiện hoặc 1 giá trị tương đương  , thường dùng mã để lặp đi lặp lại ví dụ như 1 -10000 
2. for / in - Lặp qua key của đối tượng có thể là array , object hoặc là string  
3. for /of - Lặp qua value của đối tượng và đối tượng có thể array hoặc string 
4. While - Lặp qua khi điều kiện đúng gần giống với vòng for , có thể định nghĩa cho nó chạy từ bao nhiêu đến bấy nhiêu và nó cũng sẽ phải kiểm tra điều kiên , đúng thì nó sẽ chạy sai thì nó không chạy
5. do / while -Lặp ít nhất 1 lần , sau đó lặp khi điều đúng , thường sử dụng để chạy ít nhất một lần , bởi vì cái lần đầu tiên chạy thì nó không cần kiểm tra điều kiên , nhưng lần thứ 2 chạy nó sẽ kiểm tra điều kiện và đúng thì nó sẽ chạy , sai thì nó sẽ đưng .  
*/
//Vòng lặp for 
//Trong dấu() thì được viết ba đoạn mã và mỗi đoạn mã , được cách nhau dấu chấm phẩy , mã đầu tiên chúng ta cần đưa vào  1 biến 
//Biểu thức quyết định bài toán có chạy hay không , nếu biểu thức đúng sẽ chạy còn sai sẽ là dừng 
//Đề bài là làm thế nào nó có thể chạy được 1000 lần 
// Cách thức hoạt động của vòng lặp for 
// Trước khi in ra thì việc đầu tiên của nó là chạy đoạn mã đầu tiên và đoạn mã đầu tiên chỉ chạy duy nhất một lần 
// Sau khi chạy được mã thứ nhất , thì nó sẽ chạy sang mã thứ hai , vd đó cho thấy i < = 1000 thì nó sẽ trả về true và khi điều kiện đúng thì vòng lặp for nó sẽ thực thi cái đoạn mã được viết trong dấu {} này 
// Sau khi thực thi xong trong cái {} này thì nó sẽ chuyển sang cái vế thứ ba để thực thi đoạn mã , i đang là 1 thì nó thực đoãn mã thứ 3 là i tăng lên 1 là i= 2 ; và nó tiếp tục in ra số 2 , cứ tiếp tục như vậy cho tới khi nó <=1000 là sẽ dừng lại 
for (var i = 1 ; i <= 1000 ; i++ ) {
    console.log(i)
    //code 
}
//For loop 
// Đây là lấy ra tất cả những phần tử của mảng 
var myArray = [
    'Java',
    'PHP',
    'DART',
    'PYTHON'
];
var arraylength = myArray.length;
for (var i = 0 ; i < arraylength ; i++){
    console.log(i);// sẽ in ra là 0,1,2,3 phần tử 
    console.log(myArray[i])// sẽ in ra giá trị của chúng Java , PHP , DART, PYTHON 
}
//For/in loop

var myInfor = {// ĐÂY LÀ ĐỐI TƯƠNG 
    name:'Son Dang',
    age:18,
    address:'Ha Noi , Viet nam'
}
for( var key in myInfor) {
    console.log(key)//se lay ra cac phan tu name, age , address 
    console.log(myInfor[key])// Se in ra cac phan tu value ,, Son Dang ,  18 , Ha Noi, Viet nam

}

var language = [
    'Java',
    'PHP',
    'DART',
    'PYTHON'
];
for( var key in language ) {// MẢNG ARRAY 
    console.log(key)// Nó sẽ in ra 0, 1,2,3 
    console.log(language[key])// Nó sẽ in ra giá trị từng thành phần 'Java','PHP','DART','PYTHON'
}

//For... of 

var language = [ // Mảng Array 
    'Java',
    'PHP',
    'DART',
    'PYTHON'
];
for( var value of language ) {
    console.log(value);// Nó sẽ in ra JAVA , PHP , DART , PYTHON. 
}

var string  ='Java'
for( var value of string ) {// MẢNG Chuỗi string 
    console.log(value);// Nó sẽ in ra JAVA , PHP , DART , PYTHON. 
    console.log(string)/// Nó sẽ in ra Java 
    console.log(string[1])//Nó sẽ lấy phần tử là a 
}

var myInfor  = {// MẢNG Object , đối tượng 
    name:'Phuc',
    age:16
}
//console.log(Object.keys[myInfor]) Cái này là cách bình thường để lấy giá trị ra 
for( var value of Object.keys[myInfor]) {
  console.log(value)// Nó sẽ in ra là name và age 
  console.log(myInfor[value])// Nó sẽ in ra là Phuc và 16 
}

var myInfor  = {// Ví dụ lấy ra từng giá trị của chúng 
    name:'Phuc',
    age:16
}
for( var value of Object.keys[myInfor]) {
    if(value === 'name'){
        console.log(myInfor[value])// Nó sẽ in ra giá trị là Phuc, tương tự muôn in 16 thì thay đôi value === 'age'    
    }
}

// Vòng lặp while loop 

var i =1 ;
while(i <= 1000 ){
    i++;
    console.log(i)// Nó sẽ in ra dòng lệnh 1---> 1000 rồi sẽ dừng lại , nếu bạn viết vòng lặp while sai thì nó sẽ bị treo trình duyệt 
}

var myArray = [ // mảng array 
    'javascript',
    'php'
]
var i = 0 ;
while(i <= Array.length ){  
    console.log(myArray[i])// Nó sẽ in ra giá trị của mảng là javascrip và php 
    i++;
}

// Vòng lặp do/while loop  
var i = 0 ; // Cách hoạt động của vòng lặp do/while là lần thứ nhất nó sẽ lặp và không kiểm tra điều kiện , lần thứ 2 nó mới thực hiện việc kiểm tra điều kiện  
do {
   i++ 
   console.log(i)// Nó sẽ in ra từ 1 ---> 10 
}while (i <10 )

var i = 0 ;
var isSuccess = false ;
do {
   i++ 
   console.log('nap the thanh cong ' + i)
   if (false) {
      isSuccess = true  
   }
}while (!isSuccess && i <3)// In ra nạp thẻ thành công từ 1 --> 3 

// Break và Continue trong vòng lặp 

for(i = 0 ; i <1000; i++) {// Lệnh này in từ 0 ---> 999
    console.log(i)
    if ( i >= 5) {// Khi điều kiện này thỏa mãn thì từ khóa break sẽ được thực thi    
       break // Nó sẽ in ra lấy đến từ 0---> 5 
   }
}

for(i = 0 ; i <10; i++) {// Lệnh này in từ 0 ---> 10
    
    if ( i%2 !==0) {// Khi điều kiện này thỏa mãn thì từ khóa break sẽ được thực thi    
       continue  // Nó sẽ in ra lấy các số lẻ 0,2,4,6,8 , còn muốn in ra số chẵn thay thay đổi i%2 ==0 thì nó sẽ in ra số chẵn 
   }
   console.log(i)
}

// Vòng lặp lồng nhau Nested loop 
var myArray = [
    [1,2 ],
    [3,4 ],
    [5,6 ]
 ]
 for (var i =0 ; i < myArray.length; i++) {
    for (var j = 0 ; j <myArray[i].length; j++){ // Cách thức nó hoạt động này là 
       console.log(myArray[i][j]);
    }
    
 }

// Ví dụ về vòng lặp tiếp 
// Đề bài là in ra các vòng lặp cách nhau 5 đơn vị 
 for(i=0 ; i<100 ; i +=5 ) { // i+= 5 thì có nghĩa là i sẽ tăg giá trị lên 5 lần 
    console.log(i)// In ra các số từ 0 , 5,10....95 
 }

/* ĐỆ QUY , ĐỆ QUY LÀ GÌ  */
// Xác định điểm dừng
//Logic handle ---> Tạo ra điểm dừng 
function deQuy() {
    
}
deQuy();

/*LÀM VIỆC VỚI MẢNG PHẦN 2  
Array methods: 
    forEach() Nó sử dụng để duyệt qua phần tử mảng , NÓ có thể duyệt qua mảng hoặc vòng lặp 
    every()được sử dụng để kiểm tra xem tất cả các phần tử của một mảng có thỏa mãn một điều kiện nhất định hay không. Nếu như các phần tử mà không phù hợp hết cho dù là 1 cái phù hợp với điều kiện nhưng trong mảng lại có 2 cái khác điều kiện thì nó sẽ đưa ra điều kiện sai 
    some() Nó sẽ có thuộc tính nếu bạn đưa ra điều kiện nào đó , thì các phần tử bên trong có khớp với điều kiên some đưa ra thì nó ra in ra true , vd some ===0 ,thì bên trong mảng dù chỉ có 1 giá trị = 0 thì nó cũng true 
    find() Nó sẽ trả về chỉ khi tìm được 1 phần tử thôi
    filter() Nó sẽ trả về chỉ khi đúng với điều kiện và trả về nhiều phần tử trùng nhau 
    map()  được sử dụng để tạo ra một mảng mới bằng cách thực hiện một phép biến đổi trên mỗi phần tử của mảng gốc
    reduce()
*/
//forEach()
var myArray = [
    {
        name:'Phuc',
        age:15
    },
    {
        name:'Phuc',
        age:16
    }
]
myArray.forEach(function(course) {
    console.log(course)//In ra hết 2 khối trong mảng array ra 
})

//Every 
var myArray = [
    {
        name:'Phuc',
        age:0
    },
    {
        name:'Phuc',
        age:0
    }
]
var isFree = myArray.every(function(free1, index) {
    console.log(index)
    return free1.age ===0
})
console.log(isFree)//Nó sẽ in ra true vì chúng ta cho tất cả age là  đều bằng không , tất cả các giá trị phải khớp với điều kiện vòng lặp thì nó mới in ra true , nếu trong 2 phần tử đó có 1 cái không phù hợp với điều kiện thì nó sẽ false, còn đúng thì ngược lại 

//SOME 
var myArray = [
    {
        name:'Phuc',
        age:0
    },
    {
        name:'Phuc',
        age:0
    }
]
var isFree = myArray.some(function(free1, index) {
    console.log(index)
    return free1.age ===0
})
console.log(isFree) /// Nó tương tự cú pháp every , nhưng nó có điều kiện khác , khi lấy ra trị trong mảng , chỉ cần 1 giá trị đúng thì nó sẽ đưa ra true và đồng thời dừng việc return(trả hàm )

// Find()
var myArray = [
    {
        name:'Phuc',
        age:0
    },
    {
        name:'Phuc',
        age:0
    }
]
var isFree = myArray.find(function(free1, index) {
    return free1.name === 'Phuc'//Nó hoạt động khi tìm đến phần tử từ trên xuống dưới thì nó sẽ dừng khi gặp phần tử mà điều kiện đúng , và nó luôn trả về 1 giá trị 
})
console.log(isFree) // Hàm find() này có tác dụng là tìm kiếm phần tử nhanh gọn , có thể tìm bất cứ thành phần nào mà bạn không tìm thấy 

//Filter 
var myArray = [
    {
        name:'Phuc',
        age:0
    },
    {
        name:'Phuc',
        age:1
    },
    {
        name:'Phuc1',
        age:1
    }
]
var isFree = myArray.filter(function(free1, index) {
    return free1.name === 'Phuc' // Nó sẽ trả về hàng loạt nếu mà nó trùng với điều kiện , thuộc tính filter rất tiện khi chúng ta muốn tìm ra nhiều phần tử cùng 1 lúc 
})
console.log(isFree) 

// map()
const myArray = [{name:'Phuc', age:0}, {name:'Phuc', age:1}, {name:'Phuc1', age:1}];

function courseHandle(course) {
  return { name: `Khoa hoc: ${course.name}`, age: course.age, text: `Gia: ${course.name}` };
}

const newCourse = myArray.map(courseHandle);
console.log(newCourse);/// Nó sử dụng để tạo 1 mảng mới trong hàm array , và nó sẽ trả về đối tượng mới trong với các thuộc tính được thay đổi theo cách muốn 

