import React, { useEffect } from "react";
import NavbarThree from "../components/Layouts/NavbarThree";
import MainBanner from "../components/HomeTwo/MainBanner";
import OurFeaturedSolutions from "../components/HomeTwo/OurFeaturedSolutions";
import AboutUs from "../components/HomeTwo/AboutUs";
import Services from "../components/HomeTwo/Services";
import FunFacts from "../components/HomeTwo/FunFacts";
import Projects from "../components/HomeTwo/Projects";
import OurPricingPlan from "../components/HomeTwo/OurPricingPlan";
import Testimonials from "../components/HomeTwo/Testimonials";
import BlogPost from "../components/Common/BlogPost";
import FreeTrialArea from "../components/Common/FreeTrialArea";
import PartnerSlider from "../components/Common/PartnerSlider";
import Footer from "../components/Layouts/Footer";

export default function HomeTwo() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users`);
        if (!response.ok) throw new Error("lỗi gọi api");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("lỗi", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      <NavbarThree />

      <MainBanner />

      <OurFeaturedSolutions />

      <AboutUs />

      <Services />

      <FunFacts />

      <Projects />

      <OurPricingPlan />

      <Testimonials />
      <div
        style={{
          padding: "20px",
          background: "#f9f9f9",
          marginTop: "30px",
        }}
      >
        <h2>Danh sách người dùng</h2>
        {loading ? (
          <p>Đang tải...</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li> // Hiển thị tên người dùng
            ))}
          </ul>
        )}
      </div>

      <BlogPost />

      <FreeTrialArea />

      <PartnerSlider />

      <Footer />
    </>
  );
}
