import Head from "next/head";
import Banner from "../components/banner/Banner";
import ChooseProduct from "../components/Home/ChooseProduct";
import BestSellingProduct from "../components/Home/BestSellingProduct";
import JustForSection from "../components/Home/JustForSection";
import OfferBanner from "../components/Home/OfferBanner";
import NewestProduct from "../components/Home/NewestProduct";
import ExclusiveProduct from "../components/Home/ExclusiveProduct";
import SpecialOffer from "../components/Home/SpecialOffer";
import BestBrand from "../components/Home/BestBrand";
import MakeupSection from "../components/Home/MakeupSection";
import Testimonial from "../components/Home/Testimonial";
import Newsletters from "../components/Home/Newsletter";
import InstagramSection from "../components/Home/InstagramSection";
import PromoModal from "../components/common/PromoModal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - THE BORCELLE CART</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>

      <Banner />
      <ChooseProduct />
      <div id="Cycling" className="pt-5 mt-5">
        <BestSellingProduct />
      </div>
      {/* <JustForSection /> */}
      {/* <OfferBanner /> */}
      <NewestProduct />
      {/* <ExclusiveProduct />   */}
      {/* <SpecialOffer /> */}
      {/* <BestBrand /> */}
      {/* <MakeupSection /> */}
      {/* <Testimonial /> */}
      {/* <Newsletters /> */}
      {/* <InstagramSection /> */}
    </>
  );
}
