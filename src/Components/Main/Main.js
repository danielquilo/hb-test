import "./Main.css";

import HornedBeast from "../HornedBeast/HornedBeast";
import data from "../../data.json";

export default function Main({ handleModal }) {
  const beasts = data.map(function (item) {
    return (
      <HornedBeast
        key={item._id}
        title={item.title}
        imageUrl={item.image_url}
        description={item.description}
        handleModal={handleModal}
      />
    );
  });

  return (
    <main>
      {beasts}
      {/* <HornedBeast title={data[0].title} imageUrl={data[0].image_url} description={data[0].description} />
      <HornedBeast title={data[1].title} imageUrl={data[1].image_url} description={data[1].description} />
      <HornedBeast title={data[2].title} imageUrl={data[2].image_url} description={data[2].description} /> */}
    </main>
  );
}