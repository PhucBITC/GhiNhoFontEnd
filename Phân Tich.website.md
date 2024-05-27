Những phần thường gặp trong 1 giao diện 1 website :
1 . Header(Phần đầu tranng )
2. Navigation(Phần điều hướng )
3. Breadcrumb(Nó là 1 cái chỉ giống như các bạn bbieets là bạ đang ở thành phần naò của website)
4. Sizebar(Là 1 cái thanh nó thường được đặt ở bên trái hoặc bên phải màn hình)
5. Slider(Nó được hiểu là có thể là ảnh hay bất cứ nôị dung gì , biểu hiện nó tự dịch chuyển trượt trượt )
6. Content (Nó là trung tâm website nội dung )
7 . Banner (Ảnh quảng cáo )
8. Footer(Chân Trang) 

**Định hình 1 website trước  khi bắt đầu làm :
1. Phân Tích 
2. Dựng Base(Xây móng)
3. Xây dựng từng phần theo phân tích 
4. Hoàn thiện 
assets/css/style.css

**Các bước :
1.Làm từ ngoài vào trong 
2.Làm từ trên xuống dưới 
3. Tổng quan đến chi tiết 

** Phân tÍch các bước để hoàn thành từng phần trong css 
1. Vị trí 
2. Kích Thước 
3. Màu Sắc 
4. Kiểu Dáng (Chữ , Hình tròn , Hình Vuông ,,,,)

                      

### CÁC THẺ TRONG HTML TẠO BẢNG ###
`form 
```
   <form  action="" method=""> 
   <!-- các thẻ item của form -->
   </form> 
   cho ví dụ 
   <form action="/submit-url" method="post">
   </form>
   trong trường hợp này form action có đường dẫn là tạo 1 đường dẫn đến để dẫn đến trình duyệt khác 
   còn thuộc tính method thì nó là điều này có nghĩa là khi người dùng nhấn nút gửi (submit), dữ liệu từ biểu mẫu sẽ được gửi đến địa chỉ "/submit-url" bằng phương thức POST.
```

#### Các thẻ item trong from 
* input Các thẻ dùng cho type 
  - text : Cho phép nhập dữ liệu là text  
                  <label for="fullName">
                     Name 
                    <input type="text" id="fullName" name="fullName" value="" size="" />
  - password : Nhập dữ liệu là mật khẩu , các chữ bị mã hóa thành hiển thị ẩn 
                     <label for="password">
                           Mật khẩu</label>
                       <input type="password" name="password" id="password">

  -radio : Cho phép tạo những lựa chọn trên from (Chỉ được phép chọn 1 , trong nhiều sự lựa chọn còn lại )
                 <label for="gender">
                        Giới tính
                    <label><input type="radio" name="gender" id="gender" />Nam </label>
                    <label><input type="radio" name="gender" id="gender" />Nữ </label>
  -checkbox :Cho phép tạo ra nhiều lựa chọn và chọn nhiều 
                <label for="fav">Sở thích </label>
                    <input type="checkbox" name="fav1" id="fav1"/>Bong da
                    <input type="checkbox" name="fav2" id="fav2"/>cau long 
                    <input type="checkbox" name="fav3" id="fav3"/>bong ban 

  -date : Dùng trường hợp cho ngày tháng  
                  <label for="Birthday">
                    Năm Sinh 
                    <input type="date" id="Birthday" name="Birthday" value="" size="" />
  -number:Chỉ cho phép nhập dữ liệu là số  
                  <label for="fullName">
                     Số Điện Thoại 
                    <input type="number" id="fullName" name="fullName" value="" size="" />
  -email: giống như text 
  -file : Nó sẽ mở ra 1 cửa sổ để bạn có thể thêm ảnh tùy thích  
                  <label for="avata">ẢNH ĐẠI DIỆN </label>
                     <input type="file" name="avata " id="avata">

  
  
   Nếu bạn thêm <label></label> thì khi bấm vào chữ nó sẽ tự động hiện thị trong bảng 
  * Thuộc tính của thẻ input 
      -id 
      -class 
      -name
      -value
      -size : đơn vị là số và nó quy định chiều dài input ; vd size:45
      -placehoder : Dùng để mô tả cho input đó , không có nó thì không biết mô tả đó nói gì 
      -lable : Nó cũng giống như placehoder nhưng phần mô tả nó nằm trên bảng , còn palcehoder thì nó nằm hiển thị trong bảng 
* THẺ button 
   -có các type sau 
      - submit : Gửi thông tin đi đến sever để xử lý <button> Đăng Kí</button>
      - reset : Xóa hết thông tin đã nhập trên form  <button type='reset' >Làm sạch trọng phần bảng mình đã nhập</button> 
* Thẻ <textarea>\
   - Có các thuộc tính tạo ra bảng nhưng có thể nhập được nhiều số liệu 
      <label for="Nhập tùy ý " >Nhập tiêu đề bên ngoài  </label>
        <textarea rows="Chiều rộng của văn bản " cols="Chiều ngang của văn bản " placeholder="giới thiệu   bạn thân " ></textarea>
* Thẻ <fieldset>
  - Nó có thuộc tính là tạo ra một cái khung bao quanh toàn bộ thẻ tạo bảng from 
  - Bên trong thường sử dụng thêm thẻ legend
  <fieldset>
     <from>
       <legend>Tiêu đề khung from </legend>
       <label for="tùy ý " > Nhập tùy ý    </label>
       <input type="text " id="tùy ý " name="tùy ý " >
     </from>
  </fieldset>
* Thẻ <select>
   - Nó có thuộc tính tạo thành phần giống như chọn tỉnh thành phố     

 <label for="tuy y">Tỉnh Thành</label>
    <select name="province">
      <option value="1">Ha Noi</option>
      <option value="1">Da Nang </option>
      <option value="1">Ho Chi Minh </option>
      <option value="1">Quang Nam</option>
    </select>



  


    