결제가 이루어지는 프로젝트 입니다. 

결제를 하기 전 쿠폰과 포인트를 통해 할인을 적용받을 수 있습니다. 

json-server를 이용하여 마크업 데이터를 디자인 하였습니다. 
user = 고객정보
cart = 장바구니에 담은 상품들
coupon = 쿠폰데이터
point = 포인트 데이터

쿠폰은 정액제와 정률제로 구분됩니다. 
정액제 = 할인 금액
정률제 = 할인률

정액제쿠폰이 먼저 적용된 후 정률제 쿠폰이 적용됩니다. 이유는 할인폭을 낮추기 위해서 입니다. 
쿠폰할인은 총결제금액을 넘을 수 없습니다. 

포인트는 여러개의 포인트가 누적되는 방식이기에 유저의 포인트를 여러개를 가저와 하나로 합쳐서 화면에 출력합니다. 
전액사용 버튼과 원하는 만큼 포인트를 사용하도록 입력하는 input이 있습니다. 
input에는 숫자만 입력가능합니다.
포인트할인은 총 결제금액을 넘을 수 없습니다. 
포인트는 5000포인트 이상, 10000원이상 제품 구매시 사용가능힙니다. 

포인트가 먼저 적용되고 난 후 쿠폰이 적용됩니다. 
쿠폰을 적용한 후 포인트를 적용했을때 할인 금액이 총 결제금액을 넘으면 마지막에 적용된 쿠폰이 취소됩니다. 

쿠폰과 포인트 모드 사용한 쿠폰 유효기간이 만료된 쿠폰은 사용할 수 없습니다. 

결제는 토스 페이먼츠 위젯을 사용하여 결제하였습니다. 
