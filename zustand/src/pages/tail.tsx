export default function Tail() {
  return (
    <main className="min-h-screen bg-gary-100 p-6">
      <h1 className=" text-3xl fon-bold text-center mb-8 text-gray-900">
        Tailwind 반응형 실습{" "}
      </h1>
      <div className="grid gird-cols-1 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5].map(
          (
            _,
            index //_ 을 쓰는 이유? 맵 함수 써야할 변수에 대해서 쓰는 것, value 가  들어가야함. 어떤 배열에 대한 값, index 으로
          ) => (
            <div
              key={index}
              className="
            p-6 rounded-2xl shadow-md hover:shadow-lg transition
            bg-blue-100
            sm:bg-green-100
            md:bg-yellow-100
            lg-bg-purple-100 
            xl-bg-red-100
            "
            >
              <h2 className="text-xl font-sembold mb-2 text-gray-900">
                {" "}
                Card {index + 1}{" "}
              </h2>
              <p className="text-gray-700">
                {" "}
                This card changes color by screen size!{" "}
              </p>
            </div>
          )
        )}
      </div>
    </main>
  );
}
