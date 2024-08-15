import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import AboutUs from "../../components/aboutus/AboutUs";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Container className="my-5">
        <Category />
        <HomePageProductCard />
        <AboutUs />
      </Container>
    </Layout>
  );
};

export default HomePage;
