# Tic-Tac-Toe

소소하지만 확실한 행복의 첫번째 습작 틱택토 프로젝트

<br>
<br>

## 스터디 방법

구현사항 설계 -> TicTacToe 기능 개발 -> 페어를 정해 페어프로그래밍 진행 -> 코드리뷰 진행

<br>
<br>

## 페어현황

| 팀 / 이름 |            |
| --------- | ---------- |
| 1팀       | 정호, 나현 |
| 2팀       | 연진, 슬기 |
| 3팀       | 승훈, 나라 |

<br>
<br>

## 구현목표

Tic-Tac-Toe게임을 **React를** 사용하여 구현합니다.

<br>

### 구현예시

<br>

![Tic-Tac-Toe Game](./public/tictactoe.gif)

<br>
<br>

## 공통 구현사항

- [ ] 빈 사각형 9개가 (3 \* 3) 존재한다.
- [ ] 빈 사각형을 클릭하면 “O” 나 “X”가 표시된다.
  - [ ] 한 번 클릭한 표시는 변할 수 없다.
  - [ ] 처음 클릭은 “X”가 표시된다.
- [ ] 클릭을 하여 “O” 또는 “X” 가 표시되었다면 그 다음 표시는 무조건 다른 모양이 표시된다.
  - [ ] Next Player를 보여주며 다음 표시를 알려준다. (ex: Next Player: X)
- [ ] 승리조건을 충족한다면 게임을 멈추고 승리자를 보여준다.
  - [ ] 승리조건은 가로, 세로, 대각선을 포함하여 3개가 연속적으로 존재한다면 승리조건에 만족한다. (ex: Next player ⇒ Winner player로 변경)
  - [ ] 승리자가 정해지면 더 이상 클릭 불가
