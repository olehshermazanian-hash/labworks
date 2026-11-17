const averegeGrade = 85;

switch (true) {
  case averegeGrade < 60:
    console.log('Незадовільно');
    break;
    case averegeGrade <= 70:
    console.log('Задовільно');
    break;
  case averegeGrade <= 80:
    console.log('Добре');
    break;
  case averegeGrade <= 90:
    console.log('Дуже добре');
    break;
  case averegeGrade <= 100:
    console.log('Відмінно');
    break;
  default:
    console.log('Некоректна оцінка');
}