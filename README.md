# Nabi market(나비장터)

<div align="center">
  <div>
    <img style="text-align: center;" src="https://github.com/team-nabi/nabi-market-client/assets/107387817/1a6cd215-6603-4ed1-89e0-032c1f9acb77" width="33%"/>
  </div>
  <div>
    <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ff6%2Fnabi-market&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a> 
  </div>
</div>

# Nabi Market version 1.0

> 프로그래머스 4기 F6팀  
> 개발기간 : 2023.10 ~ 2023.11

## 배포주소

> 프론트엔드 : https://nabi-market-client.vercel.app/  
> 백엔드 : https://www.nabi-market.kro.kr/

## FE 개발팀 소개

<table>
  <tr>
    <td><img src="https://avatars.githubusercontent.com/u/107387817?v=4" width="180" height="180"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/71625012?v=4" width="180" height="180"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/61399141?v=4" width="180" height="180"/></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/doggopawer">김동현</a>
    </td>
    <td align="center"><a href="https://github.com/oaoong">정재희</a>
    </td>
    <td align="center"><a href="https://github.com/juyeon-park">박주연</a>
    </td>
  </tr>
</table>

## 한 줄 소개

시장가치가 떨어진 물건을 비슷한 가치의 물건과 교환하는 과정을 쉽게 만들어주는 서비스

## 기획 배경

- 돈 받고 팔기는 애매하고 버리기는 아까운 제품이 있을 때, 비슷한 가치의 물건과 교환 할 수 있는 서비스 미존재
- 물물교환 만을 위한 플랫폼의 부재
- 돈을 쓰지 않고 원하는 물건을 얻고자 하는 사람들의 기대를 충족
- 물물교환에서 비슷한 가치의 물건을 손 쉽게 보고자 하는 요구에 특화된 기능을 제공하는 서비스에 대한 요구

## 타겟층

- 집안에 사용하지 않는 물건을 현재 자신이 필요한 물건과 교환하기를 원하는 사람
- 시장가치가 떨어진 물건들을 다른 실용적인 물건과 교환하고자 하는 사람
- 현재 자신이 가지고 있는 물건과 비슷한 가치를 지닌 물건을 교환하고자 하는 사람

## 기존 중고거래 서비스와의 차별점

- 판매가 잘 되지않는 중고물품에 대한 교환 거래 가능.
- 판매가 아닌 물물 교환 전용 플랫폼
- 업로드 하는 유저가 물건의 가격대를 선택하고 가치가 비슷한 물건들끼리의 오퍼가 가능하다.
- 비슷한 물건끼리의 오퍼 외에도 나머지 가격대에 찔러보기가 가능하다.

## 5. 주요 기능

- 물물교환을 할 아이템을 등록 할 수 있다.
- 내가 등록한 아이템과 비슷한 가격대의 물건을 검색 할 수 있다.
- 교환하고자 하는 물건에 제안을 할 수 있다.
- 받은 제안, 제안 수락/거절에 대한 알림을 확인 할 수 있다.
- 제안을 수락한 물건의 사용자와 채팅을 할 수 있다.

## 시작 가이드

### 설치

```
git clone https://github.com/team-nabi/nabi-market-client.git
```

### 실행

```
cd nabi-market-client
npm install
npm run dev
```

## 스택

### Environment

<span><img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"/>
<img src="https://img.shields.io/badge/Github Actions-2088FF?style=flat-square&logo=Github Actions&logoColor=white"/>
</span>

### Config

<img src="https://img.shields.io/badge/Pnpm-F05138?style=flat-square&logo=Pnpm&logoColor=white"/>

### Development

<span>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Headless UI-66E3FF?style=flat-square&logo=Headless UI&logoColor=white"/>
</span>

### Communication

<span>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white"/>
</span>

## 화면 구성

<table>
  <tr>
    <td><img src="https://github.com/team-nabi/nabi-market-client/assets/107387817/55e08a45-af95-4460-bcb2-73f489c63051" width="180" height="180"/></td>
    <td><img src="https://github.com/team-nabi/nabi-market-client/assets/107387817/28c2b251-fb60-445e-9cc1-9a4ebcebd31c" width="180" height="180"/></td>
    <td><img src="https://github.com/team-nabi/nabi-market-client/assets/107387817/9702e57f-f7b5-4b2d-890c-97af9f43e4ef" width="180" height="180"/></td>
  </tr>
  <tr>
    <td align="center">홈 페이지</td>
    <td align="center">물건 검색 페이지</td>
    <td align="center">물건 상세 페이지</td>
  </tr>
</table>
<table>
  <tr>
    <td><img src="https://github.com/team-nabi/nabi-market-client/assets/107387817/9cc883df-fbe9-40cf-bcf7-f86a02524b1c" width="180" height="180"/></td>
    <td><img src="https://github.com/team-nabi/nabi-market-client/assets/107387817/f4610a1f-7b3d-4079-a596-785804fa41d1" width="180" height="180"/></td>
    <td><img src="https://github.com/team-nabi/nabi-market-client/assets/107387817/cabefeec-21d0-4acf-90f8-0a8086111425" width="180" height="180"/></td>
  </tr>
  <tr>
    <td align="center">로그인 모달</td>
    <td align="center">물건 등록,수정 페이지</td>
    <td align="center">마이 페이지</td>
  </tr>
</table>
<table>
  <tr>
    <td><img src="https://github.com/team-nabi/nabi-market-client/assets/107387817/ca40e67a-f13f-4ed9-a284-63bc82c10aeb" width="180" height="180"/></td>
    <td><img src="https://github.com/team-nabi/nabi-market-client/assets/107387817/82a6394c-d69f-4339-a946-1ae72a7349b7" width="180" height="180"/></td>
    <td><img src="https://github.com/team-nabi/nabi-market-client/assets/107387817/41f1e2f1-7066-4f15-8240-7e9fe5b49258" width="180" height="180"/></td>
  </tr>
  <tr>
    <td align="center">내 물건 페이지</td>
    <td align="center">찜 목록 페이지</td>
    <td align="center">거래 내역 페이지</td>
  </tr>
</table>
<table>
  <tr>
    <td><img src="https://github.com/team-nabi/nabi-market-client/assets/107387817/0d9c5aad-d1a8-46c6-8441-2bebb8c9ce51" width="180" height="180"/></td>
    <td><img src="https://github.com/team-nabi/nabi-market-client/assets/107387817/4e5a2044-4b48-4d6d-b8d1-a1b15d8dcf9d" width="180" height="180"/></td>
    <td><img src="https://github.com/team-nabi/nabi-market-client/assets/107387817/54c5b2f6-4558-4089-8518-f4cfedf7e44d" width="180" height="180"/></td>
  </tr>
  <tr>
    <td align="center">채팅방 목록 페이지</td>
    <td align="center">알림 목록 페이지</td>
    <td align="center">채팅 페이지</td>
  </tr>
</table>

## 디렉토리 구조

```
public
├── font
└── images
src
├── app
├── components
├── config
├── constants
├── contexts
├── hooks
├── lib
├── services
├── styles
├── types
└── utils
```
