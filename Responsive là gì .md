* Responsive Là gì :
- là kỹ thuật giúp website hiện thị tương thích với nhiều kích thước màn hình khác nhau (mobile , table.PC......)
-Tối ưu trải nghiệm người dùng :
1 . Hiện thị rõ ràng các thành phần (hình ảnh , cỡ chữ , nút bấm...)
2. Ẩn/hiện thị các thành phần phù hợp theo kích thước màn hình 


* CHÚNG TA SẼ LÀM GÌ  
1. Dùng css để thay đổi kích thước phù hợp cho các thành phần hiện thị trên website (cỡ chữ , hình ảnh , nút bấm ...)
2. Dùng css để ẩn // hiện các thành phần phù hợp theo kích thươcs màn hình 

* TÁC DỤNG CỦA DÒNG LỆNHN NÀY TRONG HTML 
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
1. Nó là thẻ để có thể giúp website chúng ta không bị thay dổi kích thước khi coi qua nhiều thiết bị khác nhau  

* Thuộc Tính Media query (@media) là thuộc tính quan trọng nhất trong Responsive
1.Phần width=device-widthđặt chiều rộng của trang theo chiều rộng màn hình của thiết bị (sẽ thay đổi tùy theo thiết bị).
2.Phần này initial-scale=1.0đặt mức thu phóng ban đầu khi trang được trình duyệt tải lần đầu tiên.

* Media query ?
    @Media not|only mediatype and (mediafeature and|or|not mediafeature) {
        CSS-CODE ;
    }
1. Keywords:
  -not 
  -only 
  -or
  -and 
2. Mediatypes
  -print
  -screen
  -speech
  -all-default 
3. Mediafeature 
  -max-width
  -min-width 
4. Polyfill? 


* Độ Rộng Của Các Nhiều Thiết Bị 
320px — 480px: Thiết bị di động
481px — 768px: iPad, Máy tính bảng
769px - 1024px: Màn hình nhỏ, máy tính xách tay
1025px — 1200px: Máy tính để bàn, màn hình lớn
1201px trở lên — Màn hình cực lớn, TV

**Đổi đơn vị ra (em) 1em sẽ bằng 16px , thì cứ lấy px hiện tại rồi chia 16px thì ra số em 

/* Mobile & Tablet : width<1024px */(Cái này là dùng chung cho cả Tablet & Mobile )
@media only screen and (max-width:63.9375em) {}

/* Mobile: width < 740px */
@media only screen and (max-width: 46.1875em) {}

/* Tablet: width >= 740px and width < 1024px */
@media only screen and (min-width: 46.25em) and (max-width: 63.9375em) {}

* Khái niệm Breakpoints?
1.Breakpoints là những vị trí điểm mà bố cục website sẽ thay  đổi - thích ứng để tạo giao diện reponsive 
2.https://www.google.com/search?q=media+queries+common+breakpoints&rlz=1C1WBCC_viVN1082VN1082&oq=media+queries+common+breakpoints&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIOCAEQIxgTGCcYgAQYigUyDAgCEAAYQxiABBiKBTIMCAMQABhDGIAEGIoFMg0IBBAAGIMBGLEDGIAEMgwIBRAAGEMYgAQYigUyCggGEAAYsQMYgAQyBggHEEUYPNIBCTM0OTk1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8 ĐÂY LÀ ĐƯỜNG LINK LẤY KÍCH THƯỚC PHÙ HỢP CHO REPONSIVE 

** Lưu ý nên nhớ cái này ( 2 lệnh cú pháp này để điều chỉnh kích thước trên grid )
@media only screen and (min-width:740px) and (max-width:1023px) {
    .wide {
       width:644px;
    }
}

@media only screen and (min-width:1024px) and (max-width:1039px) {
    .wide {
       width:984px;
    }
} 


** Tạo đối tượng row 
1. Vai trò các column , giúp các columns nằm theo chiều ngang 
2. Khi tổng chiều ngang columns vượt quá kích thước Row cho columns xuống hàng 
3. Loại bỏ khoảng thừa do gutters tạo ra ở 2 phía 
** Các kích thước phù hợp F8 đã đưa ra để phù hợp cho ROW 
@media  (min-width:740px)  {
    .row {
      margin-left:-8px;
      margin-right:-8px;
    }
}

@media  (min-width:1113px)  {
    .row {
       margin-left:-12px;
       margin-right:-12px;
    }
} 
@media  (min-width:1024px) and (max-with:1239px)  {
    .wide.row{
       margin-left:-12px;
       margin-right:-12px;
    }
} 


** Cách tính phần trăm chia từng côt :
-Nếu như column có 12 cột (100%) , mà bạn muốn chia 1 cột , thì lấy 100% chia cho / 12 rồi nhân với số cột bạn muốn chia , vd chia 2 cột thì lấy 100%/12 nhân 2 ...., chia 3 cột thì 100% /12 nhân 3 
** Tạo đối tượng column 

** Column:.col 
Prefix class 
   -c  - mobile 
   -m  - tablet 
   -l  - PC 

** Cách căn giữa khi html kết hợp với gird 

html   <div class="col l-6  l-0-3 m-8 m-0-2">
                <div class="my-column">
                    <h1>Column 1</h1>
                </div>
            </div>
TRONG PHẦN TRƯỜNG HỢP NÀY THÌ NÊÚ MUỐN CĂN GIỮA CHO PHẦN TỪ my-column thì bạn cần phải  làm các bước sau 
PC
b1`: Xác định phần tử trên có bao nhiêu cột ( Hiện tại chúng ta thấy xét cho phần tử PC thì đó là 6 cột )    
b2 : Như bạn thấy trên phần [col l-6  l-0-3 ] thì phần tử kia là 1 phần 6 cột bên trái và 1 phần 6 cột bên phải ===> tổng là 12 cột sau khi chúng ta thêm l-0-3 thì 1 phần tử kia sẽ được căn giữa   ,
b3 : Như bạn thấy đó muốn nó ở giữa thì phải nắm phần tử đó có bao nhiêu cột , tổng là 12 cột và bạn cho phần tử kia là 6 cột chỉ 1 phần thì bạn chỉ cần thêm 3 cột nhỏ 2 bên 6 cột thì nó sẽ nằm giữa vd 3 6 3 thì tổng của nó là 12 cột , vỳ vậy bạn nên cho l-0-3 thì nó sẽ căn ra giữa phần tử .


TABLET
b1`: Xác định phần tử trên có bao nhiêu cột ( Hiện tại chúng ta thấy xét cho phần tử Tablet thì đó là 8 cột cho một phần tử  )    
b2 : Như vậy bạn giống như bước bên trên PC làm y chang vậy , bạn muốn căn giữa thì bạn sẽ cho 8 cột nằm giữa , còn 2 bên là 2 cột bên trái và bên phải ===> 2 8 2 thì tổng sẽ là 12 côt và nó nằm giữa khi ta thêm lệnh m-0-2 

Tiếp tục về độ cột nhỏ hơn thì bạn cũng làm như ===> Đây là trình tự các bước để căn giữa phần tử 

** Lưu ý 

l-6 ý nghĩa đang nói đến chia dạng cột ở PC và nếu đặt ở dang cột l-6 thì cột sẽ được chia ra 2 cột lớn , 1 cột lớn tương ứng 6 cột nhỏ bên trái và bên phải 
ví dụ như bạn muốn xuật hiện 3 cột thì bạn chỉ cần ghi là l-4 ; m-4 hay  c-4 
4 cột thì ghi là l-3 ; m-3; c-3 ;


** ĐÂY LÀ CÁCH ĐỂ CĂN CHỈNH PHÙ HỢP MÀN HÌNH 
+ Dưới đây là vd về cách thiết lập cho phù ; ở trang html ta thấy đó , có chia 2 thẻ div thì 1 thẻ là chia 3 cột còn thẻ div còn lại là 9 cột ; thì bây h muốn phần 9 cột kia hiện 2 mục thì chúng ta chỉnh thành l-6 , và 3 cột thì chỉnh thành l-4 , cứ tương tự mà chia đều như vậy 2 cột hiện ở trong phần div 9 cột thì ta lấy 12:6=2 thì ta để là l-6 
+ Tương tự với Tablet cũng vậy muốn chia tablet ở dạng 3 cột thì ta nhẩm trong đầu là 12
+ Còn về phần l-0 ; c-0 ; m-0 thì nó sẽ phụ thuộc khi bạn thu nhỏ màn hình , nếu có 2 mục như bên dưới thì khi bạn thu nhỏ màn hình đến tablet thì nó sẽ tự động ẩn đi thẻ div bên trái vì khi đó chúng ta đã xét thuộc tính m-0 đi kèm với display:none;
+Nhưng khi xét thẻ div đầu tiên là m-0 thì thẻ div thứ hai sẽ xét là m-12 sẽ cho full , nếu bạn không cho m-12 thì nó sẽ bị lỗi 
 <div class="col l-3 m-0 c-0">
                <div class="catelory">
                    <ul>
                        <li>jaja</li>
                        <li>jajaj</li>
                        <li>jajaj</li>
                    </ul>  
                </div>
              
            </div>
            <div class="col l-9 m-12 c-12">
                <div class="row">
                    <div class="col l-4 m-6 c-12">
                        <div class="my-column">
                            <h1>Column 1</h1>
                        </div>
                    </div>
                    <div class="col l-4 m-6 c-12">
                        <div class="my-column">
                            <h1>Column 1</h1>
                        </div>
                    </div>
                    <div class="col l-4 m-6 c-12">
                        <div class="my-column">
                            <h1>Column 1</h1>
                        </div>
                    </div>
                </div>
               
            </div>


** PHẦN MỞ RỘNG THÊM TIẾP THEO 
+ Như bạn thấy đó , tôi thêm 2 lệnh gird mới vào thẻ gird , thì với 2 dòng lệnh này nó sẽ tự động xóa các phần rãnh gutter của trang web **Đây là phần thẻ htnl  , và trong thẻ div tôi thêm phần no-gutter để chương trình có thể chạy, và như chúng ta thấy đó , tôi đã đặt trang web chia bố cục thành 2 phần , trong trường hợp tôi chưa thêm phần lệnh no-gutter thì phần gutter ở 2 bên vẫn cách nhau ra 1 khoảng , sau khi tôi thêm thuộc tính vào thì nó biết mất khoảng trắng ở giữa 2 phần còn được goi là 'gutter' 
+Tương tự như vậy thì 3 cột cũng , 4 cột cũng vậy , có bấy nhiêu cột nó cũng sẽ bị thay đổi phần gutter 
        <div class="grid wide container">          
                <div class="row no-gutter">
                    <div class="col l-6 ">
                        <div class="my-column">
                            <h1>Column 1</h1>
                        </div>
                    </div>
                    <div class="col l-6 ">
                        <div class="my-column">
                            <h1>Column 1</h1>
                        </div>
                    </div>
.row.no-gutter {
    margin-left:0px;
    margin-right:0px;
} 

.row.no-gutter .col {
    padding-left:0px;
    padding-right:0px;
}
 