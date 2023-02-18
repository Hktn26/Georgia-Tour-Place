import Card from "./Card";
import { data } from "../utils/Data";
import './../scss/Home.scss';

const Home = () => {
    return (
        <div className="home">
          {data.map((item, i) => (
                <Card key={i} {...item} />
            ))}
        </div>
    );
};

export default Home;