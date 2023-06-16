import Image from "next/image";
import styles from "./page.module.css";
import { Header, ParallaxImg } from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <ParallaxImg />
      <div style={{ height: "100vh" }}>
        <p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam perspiciatis laborum eius ad aperiam porro commodi, necessitatibus obcaecati dolore assumenda
            dolor reiciendis, cupiditate consectetur odit id cum consequuntur illo!
          </span>
          <span>
            Quo fugit eum quas quos ab praesentium magnam sunt in tempore quae autem recusandae molestiae numquam, illo minima maiores, repellendus, placeat exercitationem ducimus
            quis ipsam nobis. Suscipit deleniti veritatis reiciendis.
          </span>
          <span>
            Dicta cupiditate quisquam sapiente quaerat obcaecati ipsa corrupti illo veniam. Corporis cum laudantium minus mollitia amet corrupti, architecto commodi, sint unde
            praesentium esse eaque, at molestias maiores. Voluptates, illo excepturi!
          </span>
          <span>
            Eos culpa voluptatum earum provident eaque dolorem itaque nemo voluptatibus id dolore cumque, praesentium temporibus numquam? Distinctio, iure dolorum dicta molestiae
            deserunt pariatur laudantium aut ex, necessitatibus nam ipsa consequatur.
          </span>
          <span>
            Optio enim ullam quisquam placeat, porro cupiditate aliquid sit ducimus dolorem consectetur, eos in velit temporibus? Quod beatae quis voluptatum fugit! Culpa,
            provident itaque nisi mollitia quia praesentium. Aspernatur, ullam.
          </span>
        </p>
      </div>
    </>
  );
}
