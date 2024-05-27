Phân biệt díplay 
## Display: INLINE  
1. Các phần tử có từ display inline nằm cạnh nhau sẽ hiển thị trên 1 hàng ngang .
2. Không thể tác động vào padding trên dưới của phần tử , nhưng có thể tác động vaò trái phải . 
3. Thẻ mặc định inline : a, span , b , i ....

## Display:block 
1. Các phần tử display block sẽ chiến thắng không gian và nằm 1 mình trên một hàng .
2. Có thể tác dụng vào padding  trên- dưới- trái- phải của phần tử . 
3. Thẻ mặc định block : h1..h6 , p , section , nav ....

## Display : inline-block 
1. Các phần tử có display inline-block khi ởi gần nhau sẽ nằm trên 1 hàng . 
2. Có thể tác ddoongj vào paddding trên - dưới - trái - phải . 

## Padding 
1. Tạo ra vùng đệm cho một nội dung trong website .
2. Padding là không gian nằm giữa content và hover 
3. Padding : top-left-right -bottom 
4. Background tác động lên cả không gian của paddding 
5. Paddding làm phình to 1 phần tử 
## Border 
1. Tạo đường viền bao quanh  của  phần tử bao gồm width , type , color 
5. Type: solid , dashed , dotted ...

## Margin 
1. Tạo ra khoảng cách giiuwax 2 phần tử trên website 
2. Căn Giữa một khối trong một khối cho trước khi sử dụng margin auto .
3. Margin không liên quan đến phần tử 

## Phân biệt margin vs padding 
1. Margin là không gian bên ngoài của border của phần tử 
2. Padding là không jgian giữa content và border và nó thuộc vào phần tử đó . 


## Box-Sizing 
1. Kích thước của khối = box-content  + padding + border .
2. Khi padding theo mặc định kích thước phần tử được phình ra . 
3. Để thiết lập padding , border , bằng cách thu nhỏ nội dung bên trong nội dung sử dụng trong box-sizing : border-box .
*{
    box-sizing :border-boxs
}