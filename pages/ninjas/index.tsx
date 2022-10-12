import { GetStaticProps, InferGetStaticPropsType } from "next";
import styles from "@styles/Ninjas.module.css";
import Link from "next/link";

type NinjaModel = {
  id: number;
  name: string;
};

const Ninjas = ({ ninjas }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja: NinjaModel) => {
          return (
            <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
              <a className={styles.single}>
                <h3>{ninja.name}</h3>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

export default Ninjas;
