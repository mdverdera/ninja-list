import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

type NinjaModel = {
  id: number;
  name: string;
  email: string;
  website: string;
  address: {
    city: string;
  };
};

const Details = ({
  ninjas,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div>
        <h1 className="text-4xl">{ninjas.name}</h1>
        <p>{ninjas.email}</p>
        <p>{ninjas.website}</p>
        <p>{ninjas.address.city}</p>
      </div>
    </>
  );
};

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((ninja: NinjaModel) => {
    return {
      params: { paramId: ninja.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.paramId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ninjas: data,
    },
    revalidate: 10,
  };
};
