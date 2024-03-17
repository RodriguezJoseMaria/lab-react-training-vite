import "./App.css";
import profileImg from "./assets/images/Profile-Image.jpg";
import profileImgGlasses from "./assets/images/Profile-Image-Glasses.png";
import IdCard from "./Components/IdCard";
import Greetings from "./Components/Greetings";
import Random from "./Components/Random";
import BoxColor from "./Components/BoxColor";
import CreditCard from "./Components/CreditCard";
import Rating from "./Components/Rating";
import DriverCard from "./Components/DriverCard";
import LikeButton from "./Components/LikeButton";
import ClickablePicture from "./Components/ClickablePicture";
import Dice from "./Components/Dice";
import Carousel from "./Components/Carousel";
import NumbersTable from "./Components/NumbersTable";
import FaceBook from "./Components/FaceBook";
import SignupPage from "./Components/SignupPage";
import RGBColorPicker from "./Components/RGBColorPicker";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <br />
      <h2>Iteration 1 | Component: IdCard</h2>
      <div>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <br />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <br />
      <h2>Iteration 2 | Component: Greetings</h2>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <br />
        <Greetings lang="fr">François</Greetings>
        <br />
        <Greetings lang="en">English</Greetings>
        <br />
        <Greetings lang="es">Spanish</Greetings>
      </div>
      <br />
      <h2>Iteration 3 | Component: Random</h2>
      <div>
        <Random min={1} max={6} />
        <br />
        <Random min={1} max={100} />
      </div>
      <br />
      <h2>Iteration 4 | Component: BoxColor</h2>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <br />
        <BoxColor r={128} g={255} b={0} />
        <br />
        <BoxColor r={-520} g={2550} b={181} />
      </div>
      <br />
      <h2>Iteration 5 | Component: CreditCard</h2>
      <div className="flex">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <br />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <br />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <br />
      <h2>Iteration 6 | Component: Rating</h2>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <br />
      <h2>Iteration 7 | Component: DriverCard</h2>
      <div>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE",
          }}
        />
        <br />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER",
          }}
        />
      </div>
      <br />
      <h2>Iteration 8 | State: LikeButton</h2>
      <div>
        <LikeButton /> <LikeButton />
      </div>
      <br />
      <h2>Iteration 9: State: ClickablePicture</h2>
      <div>
        <ClickablePicture img={profileImg} imgClicked={profileImgGlasses} />
      </div>
      <br />
      <h2>Iteration 10 | State: Dice</h2>
      <div>
        <Dice />
      </div>
      <br />
      <h2>Iteration 11 | State: Carousel</h2>
      <div>
        <Carousel
          images={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg",
          ]}
        />
      </div>
      <br />
      <h2>Iteration 12 | List and Keys | NumbersTable</h2>
      <div>
        <NumbersTable limit={12} />
        <br />
        <NumbersTable limit={5} />
      </div>
      <br />
      <h2>Iteration 13 | List and Keys - FaceBook (Simple)</h2>
      <h2>&</h2>
      <h2>Iteration 14 | List and Keys - FaceBook (Advanced)</h2>
      <div>
        <FaceBook />
      </div>
      <br />
      <h2>Iteration 15 | Form - SignupPage</h2>
      <div>
        <SignupPage />
      </div>
      <br />
      <h2>Iteration 16 | Lifting State Up - RGBColorPicker</h2>
      <div>
        <RGBColorPicker />
      </div>
    </div>
  );
}

export default App;
