import { getFrameMetadata } from "@coinbase/onchainkit";
import { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_HOST}/dashboard.png`,
  post_url: `${process.env.NEXT_PUBLIC_HOST}/api/frame`,
});

export const metadata: Metadata = {
  title: 'farcast.xyz',
  description: 'FAR',
  openGraph: {
    title: 'farcast.xyz',
    description: 'FAR',
    images: [`${process.env.NEXT_PUBLIC_HOST}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
    <h1>Hello Devs</h1>
    </>
  )
}
