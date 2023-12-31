## 프로젝트 정보
- 음식 주문 앱
- 음식 수량을 정하고 카트에 담을 수 있다.
- React
- https://saber-lip-4c8.notion.site/FoododerApp-2330086212bc444ea3c2791a6ab296ae?pvs=4

### 1일차
- 헤더와 기본적 구조 설정
- 웹사이트 요약 부분 텍스트로 표시
- 음식 리스트 보여주기

### 2일차
- 수량과 +담기 버튼
- 팝업창 띄우기

### 3일차
- 헤더 장바구니 클릭 시 모달이 나타남.
- 닫기와 모달 뒷부분을 클릭 시 모달 닫힘.
- +담기를 누를 시 최종 장바구니 배열에 넣도록 로직 짬.

### 4일차
- 수량을 정하여 +담기를 누르면 장바구니에 담긴다.
- 장바구니에 수량이 추가될때마다 버튼 이펙트가 발생한다.
- 장바구니 모달 안에서 -. + 버튼으로 수량 조절이 가능하다.

### 5일차
- 파이어베이스에 연동하여 하드코딩 되어있었던 음식 목록 가져오기
- 페이지 로딩 + 오류 처리

### 6일차
- 주문하기 버튼을 누르면 아래 결제 양식 창이 뜸.
- 결제 양식 창에 있는 취소버튼을 누르면 장바구니 모달이 닫힘.
- 입력 창에 아무것도 입력 안 할 시 빨갛게 변하면서 정확한 입력을 하라는 오류 문구가 밑에 뜸.

### 7일차
- 주문 정보와 장바구니 아이템이 서버에 전송되며, 서버는 이 정보를 기반으로 주문을 처리하고 저장.
- 장바구니 모달에서 주문하기를 눌렀을 때 문구 띄우기.
- 주문 후, 장바구니 비우기.
- 장바구니 주문 후, 닫기 버튼을 누르면 장바구니 모달 닫힘.
