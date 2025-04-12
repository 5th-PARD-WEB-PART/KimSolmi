// import styled from "styled-components";

// export default function test() {
//   return 
//   <div>
//     <Title>Test!</Title>
//     <MidTitle> 2차 세미나!</MidTitle>
//   </div>
   
// }

// const Title = styled.h1`
//   color: red;
//   font-size: 60px;
// `;


// const MidTitle = styled.(Title)`
//   color: blue;
//   &:hover {
//   color : purple }
//   font-size: 60px;
// `;


//Styled Components 사용한 코드 
/*
import styled from "styled-components";

export default function Home() {
  return (
    <Div>
      <Title>자기소개</Title>
      <Info>
        <Name>이름: KIM SOL MI </Name>
        <Age>나이: 만 21 AGE </Age>
        <Mbti>MBTI: ENTJ </Mbti>
        <Major>전공: 컴퓨터공학심화</Major>
      </Info>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  color: #4caf50;
  font-size: 48px;
  text-align: center;
  margin-bottom: 40px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  font-size: 20px;
`;

const Name = styled.p`
  color: #ff6347;  // Tomato
`;

const Age = styled.p`
  color: #4682b4;  // SteelBlue
`;

const Mbti = styled.p`
  color: #32cd32;  // LimeGreen
`;

const Major = styled.p`
  color: #8a2be2;  // BlueViolet
`;

*/

//TailWind를 사용한 스타일 구문
/* 바로 옆에 스타일이 보임 
그리고 얘는 반응형이  */
/*
const Home = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">About Me</h2>
            <p className="text-lg text-gray-500">
              <span className="font-semibold text-green-600">Name:</span> 팽도리 
            </p>
            <p className="text-lg text-gray-500">
              <span className="font-semibold text-green-600">Age:</span> 3 ages
            </p>
            <p className="text-lg text-gray-500">
              <span className="font-semibold text-green-600">MBTI:</span> ENTJ
            </p>
            <p className="text-lg text-gray-500">
              <span className="font-semibold text-green-600">Major:</span> AI Computer Science
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  
  */