Fake News Classifier
========================
## Model
| Model Accuracy | Train | Validation | Test |
|----------------|-------|------------|------|
| LSTM           | 0.9774 | 0.98381   | 0.7544 |
| SenCNN         | 0.9624 | 0.8016    | 0.7827 |
| BERT           | 0.9662 | 0.8299    | 0.8070 |

- 세 개 모델 모두 Early Stopping 을 적용한 결과입니다.

## Dataset
데이터셋은 [SNU factcheck](https://factcheck.snu.ac.kr/)를 크롤링하여 사실, 거짓으로 라벨링하였음.
거짓 데이터셋의 양이 더 많아서 네이버 뉴스에서 추가로 데이터를 모아 두 라벨링된 데이터의 크기가 같게 함.

## References
- [A Study on Korean Fake news Detection Model Using Word Embedding, 2020](https://www.koreascience.or.kr/article/CFKO202022449680088.pdf)
- [Research Analysis in Automatic Fake News Detection, 2019](http://hiai.co.kr/wp-content/uploads/2019/12/%EB%85%BC%EB%AC%B8%EC%A6%9D%EB%B9%99_2019_02.pdf)

