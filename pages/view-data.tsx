import React from "react";
import View from "@/modules/view-data/View";
import axios from "axios";
import { UserResponse } from "@/pages/api/view";

function ViewData({ data }: { data: UserResponse }) {
  return <View data={data} />;
}

export async function getServerSideProps() {
  const res = await axios.get(
    "http://localhost:3000/api/view?limit=1000&offset=1"
  );

  return {
    props: {
      data: res.data,
    },
  };
}

export default ViewData;
