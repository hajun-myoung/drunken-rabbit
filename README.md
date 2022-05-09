# 프로젝트 기획서

**20팀 프로젝트 : Drunken Rabbit**                         

*Drink Easy, Drunken Rabbit.*

와인 초보자들을 위한 와인 검색 및 정보 전달 서비스입니다.

## 목차                                               

1. 프로젝트 소개 및 사용 소스
2. 프로젝트의 목표
3. 프로젝트 기능 설명
4. 기능 구현 및 서비스를 위한 데이터 분석법
5. 프로젝트 구상도
6. 프로젝트 팀원 별 역할
7. Q&A

## 프로젝트 소개 및 사용 소스                         

**프로젝트 소개**

와인을 잘 모르는 사람들에게 와인 진입 장벽을 낮추는 서비스.

더불어, 세계 여러 나라의 와인의 특징과 자신이 고른 와인과 비슷한 와인 추천, 

특정 와인과 잘 어울리는 안주 고르기 등 다양한 와인 경험에 관련된 서비스를 제공한다.

**서비스 내 사용 데이터**

1. Wine Reviews(<https://www.kaggle.com/datasets/zynicide/wine-reviews>)
 - 11만개 이상 와인 종에 대한 review가 모아져 있는 데이터.
 - 점수를 기준으로 모수를 줄일 수 있음

2. Wine Recommender
 - Wine 선택지의 다양함(선택의 어려움)을 보여주기 위한 dataset
 - A) 생산국의 다양성 B) 가격의 군집화를 하나의 데이터셋으로 시각화 가능

3. Alcohol consumption per capita
 - 해가 갈수록 커지는 주류시장을 시각화하기 위해 사용한 dataset
 
4. 그 외 데이터셋
 - Selenium을 활용해 크롤링한 wine image url 데이터셋
 - Word2vec을 활용하여 만든 유사 와인 데이터셋(Wine Review와 결합)

**기술 스택**

1. Front-End : HTML, CSS, JS, React
2. Back-End : JS, NodeJS, MongoDB
3. Data Analysis : Python, Jupyter, Google Cloud Platform

**활용 라이브러리**

- Mui
- Numpy
- Pandas
- wordCloud
- Seleinum
- Word2vec
- Chart.js
- worldMap.js
- genism (wmdistance 적용)

## 프로젝트의 개요 및 목표                                  
 
**프로젝트 개요**

2022년 현재, 코로나라는 긴 터널의 끝이 보임과 동시에 다시 주류 문화 및 음료/주류 시장의 팽창이 기대됩니다. 그 중에서도 와인은 전 세계인의 기호식품으로서, 한국에서도 그 입지가 날로 커져가고 좋은 와인을 찾는 애주가, 또 와인의 세계에 빠져보고 싶은 초보자들 역시 꾸준히 증가하고 있습니다. 하지만 와인이라는 술의 진입장벽 또한 높은 것이 사실입니다. 저희 20팀은 이 와인이라는 술에서 서비스의 가능성을 엿보고 과연 소비자들이 원하는, 수요가 있는 서비스를 어떻게 하면 이 와인이라는 전 세계적인 기호식품의 특성을 잘 반영하여 만들어볼 수 있을까 하는 물음에서 출발하여 서비스 개발에 착수하였습니다.

**프로젝트의 목표**

20팀의 Drunken Rabbit의 목적은 와인의 기존 customer, 혹은 potential customer로 하여금 저희 서비스를 이용하여 자신의 취향에 맞는 와인을 찾고, 또 자신의 취향과 비슷한 다른 와인들을 추천해주며 내가 어떤 스타일의 와인을 좋아하는지를 발견하게 해주는 것입니다. 또한 세계 각국별 와인의 특징, 그 와인과 잘 어울리는 안주 추천 등 와인 관련 종합 컨텐츠를 제공합니다. ‘나 와인 좀 안다!’라는 말이 나오도록 만들어 드리는 것이 저희 서비스의 목적입니다.

## 프로젝트의 기능 설명                                     

**메인 기능**

Drunken Rabbit의 메인 기능은 간단하고도 당연하게, 와인 검색 기능과 검색한 와인에 대한 상세 정보 제공입니다. Drunken Rabbit에서는 와인의 키워드, 가격, 평점에 따라 선호하는 와인을 검색할 수 있으며, 그 와인을 클릭하여 선택한 와인의 상세 정보와 함께 비슷한 와인, 잘 어울리는 안주 또한 확인 가능합니다. 초보자들은 와인 용어 (예 : 드라이함, 바디감)를 잘 모를 수 있기에, 와인 맛의 용어에 대한 설명도 함께 제공합니다.

**서브 기능**

Drunken Rabbit의 서브 기능은 총 2가지로, worldMap, myPage 기능입니다. worldMap 기능은 세계 지도에서의 와인 검색 기능으로, 특정 국가를 선택할 시 그 나라의 대표적인 와인과 함께 그 나라 와인의 특징 정보를 제공합니다. myPage 기능은 자신이 좋아요한 와인을 모아볼 수 있는 기능으로, 자신이 어떤 류의 와인을 좋아하는 지 한눈에 볼 수 있습니다.

## 기능 구현을 위한 데이터 분석법

**01와인 소거법**

저희 데이터셋에는 총 13만개의 와인 데이터가 저장되어있습니다. 하지만 이 중에는 불용 자원도 상당수 섞여 있고, 그대로 사용시에는 원하는 검색 기능을 제공하지 못할 수 있다는 문제가 있습니다. 따라서 저희가 검색에 필요한 keyword의 함유 여부, 와인 평가 점수의 평균치 상회 여부 등의 가준을 통해 와인 데이터를 선별, 1만 8천개의 데이터로 개수를 줄여 데이터 분석과 서비스 제공에 최적화시켰습니다.

**02비슷한 와인 추천법**

사용자가 고른 와인과 비슷한 와인을 선별하기 위해서는 word2vec을 활용하였습니다. 기본적으로 코사인 유사도를 통해 와인 설명간 유사도를 계산하여 가장 높은 유사도를 지닌 와인 Top3를 유사 와인으로 선별하는 방식입니다. 다만, word2vec은 기본적으로 많은 메모리를 요구하고 속도 또한 빠르지 않습니다. 따라서 저희는 최적의 검색 속도를 제공하기 위해 사전에 미리 18000개의 모든 와인을 Brute-Force 방식으로 순회하며 미리 각 와인 데이터베이스 필드에 넣어두었습니다. 
다만, word2vec은 기본적으로 단어의 유사도를 파악하기 위한 방식입니다. 따라서 저희 와인 설명 문장의 코사인 유사도를 구하기 위해서는 먼저 **문장의 각 단어의 벡터의 평균값**을 구할 필요가 있었습니다. 그를 위해서 wmdistance를 활용하였습니다. 하지만 이는 당연히 word2vec보다는 오래 걸리는 방식(각 문장의 모든 단어의 벡터를 계산)이기 때문에, word2vec의 word-splitting-dimension을 300에서 100으로 줄일 수 밖에 없었습니다. 따라서 정확도 또한 7퍼센트의 하향을 감수하였습니다. 
```
#동작하지 않는, 로직을 보여주기 위한 코드입니다.
for i in range(wines) :
    for j in range(i+1, len(wines)) :
        similarity = word2vecdistance(wines[i], wines[j])
        if similarity > top3_similarity :
            min(top3_similarity) = top3_similarity
#완전 탐색으로, 약 하루 + 6시간 정도의 시간이 소요되었습니다
```

**03삭제한 데이터들**

원래 제공하려고 했던 와인과 맞는 미슐랭 식당의 데이터는 프로젝트의 변경에 따라 사용하지 않기로 결정, 삭제하였습니다.


## 프로젝트 구상도

**클릭하여 20팀의 프로젝트 구상도를 확인해주세요!**

**01 팀 스토리보드**

[team20-wine-storyboard__4_.pdf](/uploads/096d6fa48d16acfb4513b13b3de83480/team20-wine-storyboard__4_.pdf)

**02 팀 피그마**

[team20-wine-figma](https://www.figma.com/file/WMveIvBqwsV9MJJodnU4wR/Wireframe?node-id=0%3A1)

## 프로젝트 팀원 별 역할
| 이름 | 담당 업무 |
| ------ | ------ |
| 이호산 | 팀장/백엔드 개발/데이터분석 |
| 심은지 | 백엔드 개발/서기 |
| 노서현 | 프론트엔드 개발/프론트 총괄 |
| 명하준 | 프론트엔드 개발 |
| 김효진 | 프론트엔드 개발 |

**멤버별 responsibility**

1. 팀장

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드 

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

 3. 백엔드 & 데이터 담당  

- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
- 수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정

4. 서기

- 기획, 개발, 수정 단계에서의 상황 기록 및 일지 작성

## Q&A

**구매 링크는 없나요?**

국내에는 아직 아쉽게도 이런 많은 종류의 와인을 취급하는 도/소매점이 존재하지 않습니다. 따라서 아쉽게도 저희는 와인 추천까지가 저희 서비스에서의 제공이며, 구매는 해외 직구등을 이용하시는 것을 추천드립니다.

**이런 기능이 더 있으면 좋겠어요!**

구현 가능한 기능이라면 최대한 귀를 열고 서비스에 적용하도록 노력해보겠습니다!

**협업은 어떻게 진행되었나요?**

저희 팀은 협업을 위해 Gather.town을 적극적으로 활용하였으며, 매일 2시부터 5시까지의 코어타임을 가져 전원이 소통하며 코딩할 수 있는 시간을 갖기 위해 노력했습니다!
