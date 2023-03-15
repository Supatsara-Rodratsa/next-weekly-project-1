"use client";
import Icon from "@src/components/Icon";
// import Paragraph from "@src/components/Globals/Paragraph";
import Title from "@src/components/Title/Title";
import { ICON } from "@src/constants/constants";
import useAxios from "@src/hooks/useAxios";
import { AxiosProps } from "@src/types/types";
// import Movies from "@src/app/data/movies.json";

export default function Home() {
  const { response } = useAxios({
    method: "GET",
    url: "data/movies.json",
  } as Pick<AxiosProps, "method" | "url">);

  console.log(response, "response");

  return (
    <>
      <Title>Hello world!</Title>
      <Icon color="red" type={ICON.RATING} />
    </>
  );
}
